<template>
    <v-container fluid class="pt-16">

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
        </div>
        <br>
        <!-- <v-divider :thickness="13" class="border-opacity-100" color="orange"></v-divider> -->

        <v-btn block color="black" depressed elevation="22" plain rounded text @click="affiche">{{ schedule }}</v-btn><br>
        <!-- <p class="text-left titre1">
            {{ schedule }}
        </p> -->
        <!-- <v-divider :thickness="13" class="border-opacity-100" color="orange"></v-divider> -->

        <div v-if="seen">
            <v-divider :thickness="13" class="border-opacity-100" color="orange"></v-divider>
            <v-form>
                
                <form class="bg-white text-dark">
                    <v-text-field v-model="name" :error-messages="nameErrors" :counter="10" label="Name" required
                        >
                    </v-text-field>
                    <v-text-field v-model="email" :error-messages="emailErrors" label="E-mail" required
                        ></v-text-field>
                    <v-select v-model="select" :items="items" :error-messages="selectErrors" label="Item" required
                        ></v-select>
                    <v-checkbox v-model="checkbox" :error-messages="checkboxErrors" label="Do you agree?" required
                        ></v-checkbox>

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
    name: 'Contact',
    // components:{RegForm},
    data() {
        return {
            headerTitle: 'Internship League',
            srcBanner: 'http://laresolution.ca/internshipleague/wp-content/uploads/2023/04/13762396_5330999-scaled.jpg',
            title: 'CONTACT US !',
            textBtnJoinUs: 'Join now',
            seen: false,
            schedule: 'Write to us and schedule a Call-back '
        }
    },
    methods: {
        affiche() {
            this.seen = true
        }
    }
}
</script>

<style scoped>
.titre {
    color: orange;
    text-decoration: underline;

}

.titre1 {
    color: grey;
    text-decoration: underline;
    margin-top: 10px;


}
</style>