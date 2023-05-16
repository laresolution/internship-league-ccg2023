<template>
    <v-container fluid class="pt-16"
        style="
            background-repeat: no-repeat;
            background-position: center top;
            background-size: cover;
            background-image: linear-gradient(180deg,rgba(9,9,21,0) 0%,#090915 100%), url(./img/bcground-home.jpg)!important;">
        <span style="
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            background-image: url(./img/bcg-pattern.svg);
            background-size: 8px auto;
            background-position: 0 0;
            background-repeat: repeat;
        "></span>
        <v-row no-gutters>
            <v-card
                class="mx-auto"
                max-width="80%"
                outlined
                style="
                border: none;
                background-color:transparent" >
                <v-card-text>
                    <v-row
                        class="pa-8 mx-0"
                    >
                        <div class="ms-4 title" align="center"
                        style="
                            color: #FFFFFF;
                            font-weight: 500;">
                            {{ invitationText }}
                        </div>
                    </v-row>
                </v-card-text>
            </v-card>
        </v-row>
        <v-row no-gutters  class="px-16 py-8">
            <v-img :alt="altBanner" id="banner" src="./img/img-banner.jpg"></v-img>
        </v-row>
        <v-row no-gutters justify="center" style="height: 5rem; background-color: black;">
            <v-btn 
                elevation="2"
                href="#regform"
                style="background-color: #FFBB01; color:rgb(224, 43, 32); font-size:20px; text-shadow: 0.08em 0.08em 0.08em rgba(0,0,0,0.4); letter-spacing:4px; font-weight:700; padding: 24px 20px;">
                {{ textBtnJoinUs }}
            </v-btn>
        </v-row>
        <v-row no-gutters>
            <v-img
                alt="separateur"
                id="separateur"
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
            srcBanner: 'http://laresolution.ca/internshipleague/wp-content/uploads/2023/04/13762396_5330999-scaled.jpg',
            altBanner: 'Banner Join Us',
            invitationText: 'Live this collaborative experience by joining the internship league! Join like minded individuals who are as excited as you are to begin practicing their craft. Acquire the experience needed to close the junior gap and get hired by showing your work.',
            textBtnJoinUs: 'Join now'
        }
    }
}
</script>

<style scoped></style>