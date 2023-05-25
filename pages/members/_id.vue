<template>
    
       <!--  {{ givenMemberId }}<br />    
        {{ givenMember.numero }}<br />
        {{ givenMember.name }}<br />
        {{ givenMember.email }}<br />
        {{ givenMember.phone }}<br />
        {{ givenMember.studentNumber }}<br />
        {{ givenMember.programNumber }}<br />
        {{ givenMember.institution }}<br /> 
        {{ givenMember.supervisorName }}<br />
        {{ givenMember.startDate }}<br />
        {{ givenMember.endDate }}<br /> --> 
         <router-link to="../members">Back to list</router-link>
         <MemberSection2 :value="givenMember"></MemberSection2>
         
 

    
  
</template>

<script>
import { mapGetters } from 'vuex'
import MemberSection2 from '~/components/MemberSection2.vue';
 
export default {
    components: {MemberSection2 },
    data() {
        return {};
    },    
    computed: {
        ...mapGetters('members',[
            'members'
        ]),
        givenMemberId() {
            return this.$route.params?.id;
        },
        givenMember () {
            return this.members[this.givenMemberId] || {}
        }
    },
    methods: {}
}
</script>

<style scoped>
</style>