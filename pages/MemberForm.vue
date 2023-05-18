<template>
    <div>
        <router-link to="MemberForm">Member Form</router-link> 
        {{ currentMember.id }}  
        <AddButton @click="addRandomMember"></AddButton>
    
        <AddDialog></AddDialog>
        
        <ul>
            <li v-for="member in members" :key="member.id">
                {{member.name}}   
                {{member.email}}
                {{member.phone}}   
                {{member.studentNumber}}
                {{member.programNumber}}   
                {{member.institution}}
                {{member.supervisorName}}   
                {{member.startDate}}
                {{member.endDate}} 
            </li>
        </ul>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import AddButton from '~/components/buttons/AddButton.vue';
 
import AddDialog from '~/components/AddDialog.vue';
export default {
    name: "MemberForm",
    components: { AddButton,  AddDialog},
    layout: "newlayout2",
    data() {
        return {
            isFormShown: false,
            items: [
                {
                    name: "Empty Member"
                }
            ]
        };
    },
    computed: {
        ...mapGetters('members', [
            'members',
            'currentMember'
        ]),
        regularComputedProperty () {
            return true
        }
    },
    methods: {
        ...mapActions('members', [
            'addMember'
        ]),
        addRandomMember() {
            const id = Math.ceil(Math.random() * 100000)
            this.addMember({
                id,
                name: `New Member (${id})`, 
                email: 'p@gmail.com',
                phone: '5142223344',
                studentNumber: '123456789',
                programNumber: '123456789',
                institution: '123456789',
                supervisorName: '123456789',
                startDate:'20230518',
                endDate:'20230528'  
            })
        }
    }
}
</script>

<style scoped>
</style> 