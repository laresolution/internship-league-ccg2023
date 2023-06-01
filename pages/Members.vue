<template>
  <v-container fluid class="pt-16 backG">
    <div style="display: flex; justify-content: center;"> 
    <v-btn   
            elevation="2" 
            style="background-color: #FFBB01; color:rgb(224, 43, 32); font-size:20px; text-shadow: 0.08em 0.08em 0.08em rgba(0,0,0,0.4); letter-spacing:4px; font-weight:700; padding: 24px 20px;" @click="affiche"> 
            {{ display }}
    </v-btn> 
  </div>
    <div v-if="seen">
      <AddMember @created="memberCreated" />
    </div>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex' 
import AddMember from '~/components/AddMember.vue'
 
export default {
  name: 'members',
  components: { AddMember },
  data() {
    return {
      seen: false, 
      display: 'Join Now' 
    }
  },
  computed: {
    ...mapGetters('members', ['currentmember']), 
  },
  methods: {
    ...mapActions('members', ['addmember']), 
    affiche() {
      this.seen = true
    },
    async memberCreated(member) {
      this.seen = false
      await this.addmember(member)
      alert('member added') 
      alert(member.name+'\n'+member.email+'\n'+member.phone
      +'\n'+member.studentNumber+'\n'+member.programNumber
      +'\n'+member.institution+'\n'+member.supervisorName
      +'\n'+member.startDate+'\n'+member.endDate
       
      ) 
       
    }, 
  },
}
</script>

 
