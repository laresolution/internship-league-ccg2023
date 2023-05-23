<template> 
    <v-container> 
    <router-link :to="`/`">Home</router-link> 
      <AddDialog @member-saved="handleMemberSaved"></AddDialog> 
      <MemberSection2 v-for="member in members" :key="member.numero" :value="member"></MemberSection2> 
          
       
    </v-container>  
</template>

<script>
import { v4 as uuidv4 } from 'uuid';
import { mapGetters, mapActions } from 'vuex'; 
import AddDialog from '~/components/AddDialog.vue';
import MemberSection2 from '~/components/MemberSection2.vue';
 
export default {
    name: "Members",
    components: {AddDialog, MemberSection2 },
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
        },
         
    }, 

    methods: {
        ...mapActions('members', [ 'loadMembers','addMember' ]),  
        handleMemberSaved(member) { 
        // Access the saved member information here
        const numero = uuidv4(); // Math.ceil(Math.random() * 100000)
        this.addMember({ 
                numero, 
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
    },  
  
    beforeRouteEnter(to, from, next) {
        next(vm => { 
         vm.loadMembers() ;  
        })
    }
}
</script>

<style scoped>
</style>