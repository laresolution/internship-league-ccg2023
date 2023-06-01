<template>
    <div> 
         <ul>
            <li v-for="member in members" :key="member.id" >
                <router-link :to="`/members/${member.id}`">
                    {{member.name}}
                </router-link>
            </li>
        </ul>  
 
  
    <v-btn   
            elevation="2" 
            style="background-color: #FFBB01; color:rgb(224, 43, 32); font-size:20px; text-shadow: 0.08em 0.08em 0.08em rgba(0,0,0,0.4); letter-spacing:4px; font-weight:700; padding: 24px 20px;" @click="affiche"> 
            {{ display }}
    </v-btn> 
    <div v-if="seen">
      <AddMember @created="memberCreated" /> 
      <MemberSection2 v-for="member in members" :key="member.numero" :value="member" v-show="true"></MemberSection2> 
    </div>
</div>
     
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import AddMember from '~/components/AddMember.vue'
import MemberSection2 from '~/components/MemberSection2.vue' 
export default {
    name: "Members",
    components: { AddMember, MemberSection2 },
    data() {
    return {
      seen: false, 
      display: 'Join Now' 
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
            'loadMembers',
            'addMember'
        ]),
        affiche() {
      this.seen = true
    },
    async memberCreated(member) {
      this.seen = false
      await this.addMember(member)
      alert('member added')   
      alert(member.name+'\n'+member.email+'\n'+member.phone
      +'\n'+member.studentNumber+'\n'+member.programNumber
      +'\n'+member.institution+'\n'+member.supervisorName
      +'\n'+member.startDate+'\n'+member.endDate
       
      ) 
       
    }, 
    },
    beforeRouteEnter(to, from, next) {
        next(vm => {
            vm.loadMembers()
        })
    }
}
</script>

<style scoped>
</style>