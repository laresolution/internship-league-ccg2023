<template>
    <v-app>
        <v-container elevation="2">
            <v-row>
                <v-col class="py-0">
                    <LeftMenu></LeftMenu>
                </v-col>
                <v-col cols="8" class="py-0">
                    <Nuxt />
                </v-col>
            </v-row>
        </v-container>
    </v-app>
</template>
<script>
import LeftMenu from '~/components/LeftMenu.vue';

export default {
    components: { LeftMenu }
}
</script>
<style scoped type="scss">

</style>