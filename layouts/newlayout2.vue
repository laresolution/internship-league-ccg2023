<template>
    <v-app>
        <h1>Bienvenue à larésolution Internship-League!</h1> 
        <Nuxt />
    </v-app>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters('members', [
            'currentMember'
        ])
    }
}
</script>
<style scoped type="scss">

</style>