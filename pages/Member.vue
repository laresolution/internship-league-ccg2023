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
    name: "Member",
    components: { MemberSection2, AddButton, AddMember },
    data() {
        return {
            formShown: false,
            members: 
            [{
                id: 1,
                data: {
                    id: 1,
                    imgSrc: 'https://laresolution.ca/internshipleague/wp-content/uploads/2023/04/vitaly.jpg',
                    name: 'Vitaly Savin',
                    title: 'Web Developer',
                    quote: 'Recently graduated in Web Development and with a solid theoretical base, I am able to learn quickly from Senior Developers and by myself. Strive to solve more complex problems in the most efficient way possible, both as a team and individually.',
                    strengths: 'I work efficiently in a team and have great autonomy in my learning. Creative and with a good ability to synthetize, I can accurately and quickly accomplish tasks to enhance your business operations',
                    likes: 'I enjoy running, skiing and learning new things.'
                }
            },
            { 
                id: 2,
                data: {
                    id: 2,
                    imgSrc: 'https://laresolution.ca/internshipleague/wp-content/uploads/2023/04/vitaly.jpg',
                    name: 'Vitaly Savin Jr',
                    title: 'Web Developer',
                    quote: 'Recently graduated in Web Development and with a solid theoretical base, I am able to learn quickly from Senior Developers and by myself. Strive to solve more complex problems in the most efficient way possible, both as a team and individually.',
                    strengths: 'I work efficiently in a team and have great autonomy in my learning. Creative and with a good ability to synthetize, I can accurately and quickly accomplish tasks to enhance your business operations',
                    likes: 'I enjoy running, skiing and learning new things.'
                }
            },
            { 
                id: 3,
                data: {
                    id: 3,
                    imgSrc: 'https://laresolution.ca/internshipleague/wp-content/uploads/2023/04/vitaly.jpg',
                    name: 'Vitaly Savin Sr',
                    title: 'Web Developer',
                    quote: 'Recently graduated in Web Development and with a solid theoretical base, I am able to learn quickly from Senior Developers and by myself. Strive to solve more complex problems in the most efficient way possible, both as a team and individually.',
                    strengths: 'I work efficiently in a team and have great autonomy in my learning. Creative and with a good ability to synthetize, I can accurately and quickly accomplish tasks to enhance your business operations',
                    likes: 'I enjoy running, skiing and learning new things.'
                }
            }]
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