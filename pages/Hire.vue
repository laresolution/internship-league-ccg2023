<template>
    <v-container
        class="pa-0"
        fluid
        style="
            background-repeat: no-repeat;
            background-position: center top;
            background-size: cover;
            background-image: linear-gradient(180deg,rgba(9,9,21,0) 0%,#090915 100%), url(./img/bcground-home.jpg)!important;">
        <span
            style="
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
                <v-card-text
                    class="ms-4 text-h2 text-center"
                    style="
                        color: #FFFFFF;
                        font-weight: 500;">
                    {{ pageTitle }}
                </v-card-text>
                <v-card-text>
                    <v-row
                        class="pa-8 mx-0"
                    >
                        <div
                            class="ms-4 title" align="center"
                            style="
                                color: #FFFFFF;
                                font-weight: 500;">
                                {{ invitationText }}
                        </div>
                    </v-row>
                    <v-row no-gutters justify="center">
                        <v-btn 
                            elevation="2"
                            href="/members"
                            style="background-color: #FFBB01; color:rgb(224, 43, 32); font-size:20px; text-shadow: 0.08em 0.08em 0.08em rgba(0,0,0,0.4); letter-spacing:4px; font-weight:700; padding: 24px 20px;">
                            {{ textBtnRedirectToMembers }}
                        </v-btn>
                    </v-row>
                </v-card-text>
            </v-card>
        </v-row>
        <v-row no-gutters  class="px-16 py-8">
            <v-img
            id="banner"
            :alt="altBanner"
            src="./img/hire-our-interns.jpg">
            </v-img>
        </v-row>
        <v-row no-gutters justify="center" style="height: 5rem; background-color: black;">
            <AddCustomer @created="customerCreated"/>
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
        <v-row>
            <v-list>
                <v-list-item v-for="customer in customers" :key="customer.id" v-model="customer.data">
                    {{ customer }}
                </v-list-item>
            </v-list>
        </v-row>
    </v-container>
</template>

<script>
import AddCustomer from '../components/AddCustomer.vue'
import { generateUUID } from '~/utils';
export default {
    name: 'Hire',
    components: { AddCustomer },
    data() {
        return {
            customers:[],
            pageTitle: 'Hire Our Interns',
            altBanner: 'Banner Hire Our Interns',
            invitationText: 'Be confident in the person you wish to collaborate with to have the required skills, resources and support to contribute to the success of your enterprise. Use this button to browse our collaborators portfolio!',
            textBtnRedirectToMembers: 'Discover your potential hire!'
        }
    },
    methods: {
        customerCreated(newCustomer) {
            const newId = generateUUID(5)
            newCustomer.id = newId
            this.customers.push({
                id: newId,
                data: newCustomer
            })
        }
    }
}
</script>

<style scoped>
</style>