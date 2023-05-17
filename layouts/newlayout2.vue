<template>
    <v-app>
        <div>Bonjour {{ currentMember.name }}!</div>
        
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