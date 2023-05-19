<template>
    <v-container>
      <AddButton @click="addRandomMember"></AddButton>
      <AddDialog @member-saved="handleMemberSaved"></AddDialog> 
      <MemberSection2 v-for="member in members" :key="member.id" v-model="member.data"></MemberSection2>
    
        <div>  
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
    </v-container>  
</template>

<script>
import { mapGetters, mapActions } from 'vuex' 
import AddDialog from '~/components/AddDialog.vue';
import MemberSection2 from '~/components/MemberSection2.vue';
import AddButton from '~/components/buttons/AddButton.vue';
        
export default {
    name: "MemberForm",
    components: { AddButton, AddDialog, MemberSection2},
    layout: "newlayout2",
    data() {
        return {
            formShown: false,
              members: 
            [{
                id: 1,
                data: {
                    id: 1,
                    name: 'Philip', 
                    email: 'philip@laresolution.ca',
                    phone: '4382223678',
                    studentNumber: '6189853',
                    programNumber: '9709',
                    institution: 'G.Godin',
                    supervisorName: 'Alexandre Vinet',
                    startDate:'2023-05-19',
                    endDate:'2023-05-26',
                }
            }, 
            ]  
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
      addRandomMember() {
                    const id = Math.ceil(Math.random() * 100000)
                     
                    this.addMember({
                        id,
                        name: `name(${id})`, 
                        email: 'philip@gmail.com',
                        phone: `phonet${id}`,
                        studentNumber: `student${id}`,
                        programNumber: `program${id}`,
                        institution: `student${id}`,
                        supervisorName: `institution${id}`,
                        startDate: `startDate${id}`,
                        endDate: `endDate${id}`,
                    })
                }
    }
}
</script>

<style scoped>
</style> 