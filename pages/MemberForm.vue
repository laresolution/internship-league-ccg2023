<template>
    <div> 
        <AddDialog @member-saved="handleMemberSaved"></AddDialog> 
        
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
 
import AddDialog from '~/components/AddDialog.vue';
export default {
    name: "MemberForm",
    components: { AddDialog},
    layout: "newlayout2",
    data() {
        return {
            isFormShown: false, 
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
 
        handleMemberSaved(member) { 
        // Access the saved member information here
        const id = Math.ceil(Math.random() * 100000)
        this.addMember({
            id,
                name: member.name, 
                email: member.email,
                phone: member.phone,
                studentNumber: member.studentNumber,
                programNumber: member.programNumber,
                institution: member.institution,
                supervisorName: member.supervisorName,
                startDate:member.startDate,
                endDate:member.endDate,
        })  
      }
    }
}
</script>

<style scoped>
</style> 