<template>
    <v-container fluid class="pt-16 backG">
        <p class="text-center titre display-1">
            {{ title }}
        </p>
        <h3 class="text-center citation" style="color: rgb(23,84,78)">
            ( Let the experience starts from here ...)
        </h3>
        <br>
        <div class="row">
            <div class="col">
                <v-card class="mx-auto" max-width="344">
                    <v-img src="./img/joinus.jpg" height="200px" cover></v-img>
                    <v-card-title>
                        <h3 style="color: rgb(111,233,146);">Join Us</h3>
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
                        <h3 style="color: rgb(111,233,146);">Opening Hours</h3>
                    </v-card-title>
                    <v-card-subtitle>
                        <h4> Monday to Friday</h4>
                        <h4> 10:00am – 03:00pm</h4>
                    </v-card-subtitle>
                </v-card>
            </div>
        </div>
        <br>
        <v-btn block color="black" depressed elevation="22" plain rounded text @click="affiche">
            {{ schedule }}
        </v-btn>
        <br>
        <div v-if="seen">
            <ContactForm @created="callbackCreated" />
        </div>
    </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import ContactForm from '~/components/ContactForm.vue';
// import RegForm from '~/components/RegForm.vue';
export default {
    name: 'Contact',
    components: { ContactForm },
    data() {
        return {
            headerTitle: 'Internship League',
            srcBanner: 'http://laresolution.ca/internshipleague/wp-content/uploads/2023/04/13762396_5330999-scaled.jpg',
            title: 'CONTACT US !',
            seen: false,
            schedule: 'For more details - click here to schedule a Call-back '
        }
    },
    computed: {
        ...mapGetters('callbacks', [
            'currentCallback'
        ])
    },
    methods: {
        ...mapActions('callbacks', [
            'addCallback'
        ]),
        affiche() {
            this.seen = true
        },
        async callbackCreated(callback) {
            this.seen = false
            await this.addCallback(callback)
            alert('callback done')
        }
    },
}
</script>

<style scoped>
.titre {
    color: darkslategrey;
    text-decoration: underline;

}

.titre1 {
    color: grey;
    text-decoration: underline;
    margin-top: 10px;
}

.backG {
    background-color: lavender;
    height: 100%;
}

.citation {
    color: darkslategrey;
    letter-spacing: 2px;
    font-style: italic;
    font-weight: normal;
}
</style>