<template>
    <v-app>
        <div>Hello {{ currentUser.name }}!</div>
        <Nuxt />
    </v-app>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters('users', [
            'currentUser'
        ])
    }
}
</script>
<style scoped type="scss">

</style>