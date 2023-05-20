<template>
    <div>
        <AddButton @click="showAddForm"></AddButton>
        <v-card v-if="formShown">
            <v-card-title>Add new member</v-card-title>
            <v-card-text>
                <AddMember @created="memberCreated" @cancel="hideForm"></AddMember>
            </v-card-text>
        </v-card>
        <MemberSection2 v-for="member in members" :key="member.id" v-model="member.data"></MemberSection2>
    </div>
</template>

<script>
import AddMember from '~/components/AddMember.vue';
import MemberSection2 from '~/components/MemberSection2.vue';
import AddButton from '~/components/buttons/AddButton.vue';

export default {
    name: "Members",
    components: { MemberSection2, AddButton, AddMember },
    data() {
        return {
            formShown: false,
            members: 
            [{
                id: 1,
                data: {
                    id: 1,
                    name: 'Philip',
                    email: 'philip@gmail.com',
                    phone: '4381234567',
                    studentNumber: '6189853', 
                    programNumber: '9706',
                    institution: 'G.godin',
                    supervisorName: 'Alex Vinet',
                    startDate: '2023-5-19',
                    endDate: '2023-5-29',
                }
            } ]
        }
    },
    methods: {
        showAddForm() {
            this.formShown = true
        },
        memberCreated(newMember) {
            const newId = Math.ceil(Math.random() * 50000)
            newMember.id = newId
            this.members.push({
                id: newId,
                data: newMember
            })
            this.hideForm()
        },
        hideForm () {
            this.formShown = false
        }
    }
}
</script>

<style scoped></style>