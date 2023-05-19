<template>
    <v-container fluid class="pt-16"
        style="
            background-repeat: no-repeat;
            background-position: center top;
            background-size: cover;
            height: 100%;
            background-image: linear-gradient(180deg,rgba(9,9,21,0) 0%,#090915 100%), url(./img/bcground-home.jpg)!important;">

        <p class="text-center titre display-1">
            {{ title }}
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
        </div><br>
        <br>
        <v-divider :thickness="13" class="border-opacity-100" color="black"></v-divider>
        <p class="text-left titre1">
            {{ schedule }}
        </p>
        <div><v-form v-show="!show">
                <form class="bg-white text-dark">
                    <v-text-field v-model="name" :error-messages="nameErrors" :counter="10" label="Name" required
                        @input="$v.name.$touch()" @blur="$v.name.$touch()">
                    </v-text-field>
                    <v-text-field v-model="email" :error-messages="emailErrors" label="E-mail" required
                        @input="$v.email.$touch()" @blur="$v.email.$touch()"></v-text-field>
                    <v-select v-model="select" :items="items" :error-messages="selectErrors" label="Item" required
                        @change="$v.select.$touch()" @blur="$v.select.$touch()"></v-select>
                    <v-checkbox v-model="checkbox" :error-messages="checkboxErrors" label="Do you agree?" required
                        @change="$v.checkbox.$touch()" @blur="$v.checkbox.$touch()"></v-checkbox>

                    <v-btn class="mr-4" @click="submit">
                        submit
                    </v-btn>
                    <v-btn @click="clear">
                        clear
                    </v-btn>
                </form>
            </v-form>
        </div>
    </v-container>
</template>

<script>
// import RegForm from '~/components/RegForm.vue';
export default {
    name: 'ContactPage',
    // components:{RegForm},
    data() {
        return {
            headerTitle: 'Internship League',
            srcBanner: 'http://laresolution.ca/internshipleague/wp-content/uploads/2023/04/13762396_5330999-scaled.jpg',
            title: 'CONTACT US !',
            textBtnJoinUs: 'Join now',
            schedule: 'Write to us and schedule a Call-back'
        }
    }
}
</script>

<style scoped>
.titre {
    color: yellow;
    text-decoration: underline;

}
.titre1 {
    color: yellow;
    text-decoration: underline;
    

}
</style>