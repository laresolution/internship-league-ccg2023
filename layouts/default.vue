<template>
    <v-app 
        id="inspire"
        elevation="2"
        class="pa-4">
        <v-navigation-drawer
            v-model="drawer"
            app>
            <v-list dense nav
            >
                <v-list-item
                v-for="item in items"
                :key="item.title"
                :href="item.url"
                class="text-uppercase font-weight-bold pointer"
                >
                    {{ item.title }}
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
        <v-app-bar
            app
            class="bcg">
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-img
                :lazy-src="srcLeftPartLogo"
                max-height="50"
                max-width="150"
                :src="srcLeftPartLogo"
                :alt="altLeftPartLogo"
                ></v-img>
            <v-img
                class="ms-n5"    
                :lazy-src="srcLogo"
                max-height="50"
                max-width="50"
                :src="srcLogo"
                :alt="altLogo"
                ></v-img>
            <v-toolbar-title
                style="
                    position: absolute;
                    left: 50%;
                    transform: translate(-50%, 0);"
                class="text-h4 white--text font-weight-bold mx-auto">{{ headerTitle }}</v-toolbar-title>
        </v-app-bar>
        <v-main>
            <Nuxt />
        </v-main>
        <v-footer padless class="bcg d-flex flex-column">
            <v-row justify="center" no-gutters>
                <v-btn
                    v-for="item in items"
                    :key="item.title"
                    :href="item.url"
                    color="white"
                    text
                    rounded
                    class="my-4"
                    style="
                        letter-spacing: 2px;
                        font-size: 20px;
                        font-weight: 700;"
                >
                    {{ item.title }}
                </v-btn>
            </v-row>
            <v-row
                    no-gutters style="
                    color: white;
                    letter-spacing: 2px;
                    font-weight: 700;
                    padding-bottom: 1rem;">
                Copyright © {{ new Date().getFullYear() }} — Laresolution
            </v-row>
        </v-footer>
    </v-app>
</template>

<script>
export default {
    data () {
      return {
        headerTitle: 'Internship League',
        srcLogo: './img/logo-plain512-150x150.webp',
        altLogo: 'logoLeftPartLogo',
        srcLeftPartLogo: './img/financial-technology-40.png',
        altLeftPartLogo: 'Left Part Logo',
        drawer: null,
        items: [
          { title: 'Home', url: '/' },
          { title: 'Join Us', url: '/#regform' },
          { title: 'Hire Us', url: '/hire' },
          { title: 'Members', url: '/members' },
          { title: 'Contact', url: '/contact' }
        ],
        right: null,
      }
    }
}
</script>
<style scoped type="scss">
.bcg{
    background-repeat: no-repeat;
    background-position: center top;
    background-size: cover;
    background-image: linear-gradient(180deg,rgba(9,9,21,0) 0%,#090915 100%), url('/img/bcground-home.jpg')!important;
}

</style>