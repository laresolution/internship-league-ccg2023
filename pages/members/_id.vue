<template>
    <v-container> 
        <!-- {{ givenMemberId }}<br />    
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
         
 
    </v-container> 
</template>

<script>
import { mapGetters } from 'vuex'
import MemberSection2 from '~/components/MemberSection2.vue';
 
export default {
    
    data() {
        return {};
    },
    components: {MemberSection2 },
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