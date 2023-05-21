<template>
    <div>
        {{ givenMemberId }} - {{ givenMember.name }}
        <br />
        <router-link to="../members">Back to list</router-link>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    
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