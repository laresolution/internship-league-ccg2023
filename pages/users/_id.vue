<template>
    <div>
        {{ givenUserId }} - {{ givenUser.name }}
        <br />
        <router-link to="../users">Back to list</router-link>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: "ExampleForm",
    data() {
        return {};
    },
    computed: {
        ...mapGetters('users',[
            'users'
        ]),
        givenUserId() {
            return this.$route.params?.id;
        },
        givenUser () {
            return this.users[this.givenUserId] || {}
        }
    },
    methods: {}
}
</script>

<style scoped>
</style>