<template>
    <v-container
        class="pa-0"
        fluid>
        <v-row no-gutters>
            <v-card
                class="mx-auto pa-8"
                max-width="80%"
                outlined>
                <v-card-text>
                    <p class="ms-4 title text-center font-weight-bold">
                        {{ invitationText }}
                    </p>
                </v-card-text>
            </v-card>
        </v-row>
        <v-row no-gutters  class="px-16 py-8">
            <v-img
                id="banner"
                :alt="altBanner"
                src="./img/img-banner.jpg">
            </v-img>
        </v-row>
        <v-row no-gutters justify="center" style="height: 5rem; background-color: black;">
            <v-btn 
                id="regform"
                elevation="2"
                to="#regform"
                color="amber accent-3"
                x-large
                class="title red--text text-center font-weight-bold"
                >
                {{ textBtnJoinUs }}
            </v-btn>
             


        <v-btn 
            v-bind="attrs"
            v-on="on"

            elevation="2" 
            style="background-color: #FFBB01; color:rgb(224, 43, 32); font-size:20px; text-shadow: 0.08em 0.08em 0.08em rgba(0,0,0,0.4); letter-spacing:4px; font-weight:700; padding: 24px 20px;">
             
            <a href="/members" class="no-underline" >{{ textBtnJoinUs }}</a>
            
          </v-btn>
          
        </v-row>
        <v-row no-gutters>
            <v-img
                id="separateur"
                alt="separateur"
                src="./img/bcground-home-2.jpg"
                height="350px"
                background-position="center"
                background-repeat="no-repeat"
                background-size="cover">
            </v-img>
        </v-row>
    </v-container>
</template>

<script>

 
export default {
    name: 'Home', 
    data() {
        return {
            headerTitle: 'Internship League',
            altBanner: 'Banner Join Us',
            invitationText: 'Live this collaborative experience by joining the internship league! Join like minded individuals who are as excited as you are to begin practicing their craft. Acquire the experience needed to close the junior gap and get hired by showing your work.',
            textBtnJoinUs: 'Join now',
            currentMember: null // Initialize currentMember 
        } 
    },
    methods: {  }
}
</script>

<style scoped>
.no-underline {
  text-decoration: none;
  color: red;
}

</style>