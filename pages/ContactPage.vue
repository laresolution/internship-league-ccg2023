<template>
    <v-container fluid class="pt-16"
        style="
            background-repeat: no-repeat;
            background-position: center top;
            background-size: cover;
            height: 100%;
            background-image: linear-gradient(180deg,rgba(9,9,21,0) 0%,#090915 100%), url(./img/bcground-home.jpg)!important;">

        <p class="text-center titre display-1">
           {{title}}
        </p>

        <div class="row">
            <div class="col">
                <v-card class="mx-auto" max-width="344">
                    <v-img src="./img/joinus.jpg" height="200px" cover></v-img>

                    <v-card-title>
                        <h3 style="color: red;">Join Us</h3>
                    </v-card-title>

                    <v-card-subtitle>
                        <h4> internshipleague@laresolution.ca</h4>
                        <h4> 514-971-2196</h4>
                    </v-card-subtitle>




                </v-card>
            </div>
            <div class="col">
                <v-card class="mx-auto" max-width="344">
                    <v-img src="./img/opening-web-616x308px.jpg" height="200px" cover></v-img>

                    <v-card-title>
                        <h3 style="color: red;">Opening Hours</h3>
                    </v-card-title>


                    <v-card-subtitle>
                        <h4> Monday to Friday</h4>
                        <h4> 10:00am – 03:00pm</h4>
                    </v-card-subtitle>




                </v-card>
            </div>
        </div>
    </v-container>
</template>

<script>
export default {
    name: 'ContactPage',
    data() {
        return {
            headerTitle: 'Internship League',
            srcBanner: 'http://laresolution.ca/internshipleague/wp-content/uploads/2023/04/13762396_5330999-scaled.jpg',
            title: 'CONTACT US !',
            textBtnJoinUs: 'Join now'
        }
    }
}
</script>

<style scoped>
.titre {
    color: yellow;
    text-decoration: underline;

}
</style>