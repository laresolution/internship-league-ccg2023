<template>
    <v-container> 
      <AddDialog @member-saved="handleMemberSaved"></AddDialog> 
      <MemberSection2 v-for="member in members" :key="member.id" :value="member"></MemberSection2>

        <div>  
        <ul v-show="false">
            <li v-for="member in members" :key="member.id">
                {{member.id}}
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
    </v-container>  
</template>

<script>
import { mapGetters, mapActions } from 'vuex' 
import AddDialog from '~/components/AddDialog.vue';
import MemberSection2 from '~/components/MemberSection2.vue';
 
        
export default {
    name: "MemberForm",
    components: {AddDialog, MemberSection2},
    layout: "newlayout2",
    data() {
        return {
            formShown: false, 
        }
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
      },
 
    }
}
</script>

<style scoped>
</style> 