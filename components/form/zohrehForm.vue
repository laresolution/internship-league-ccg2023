<template>
    <v-container>
        <v-row>
            <v-col>
                <h1>Signup</h1>
                <v-form ref="signUpForm" v-model="formValidity">
                    <v-text-field label="Email" type="email" v-model="email"
                    :rules="emailRules" required></v-text-field>
                    <v-autocomplete lable="Which browser do you use?"
                    :items="browsers"
                    ></v-autocomplete>
                    <v-file-input lable="Attach your picture"></v-file-input>
                    <v-text-fielf v-model="birthday" lable="birthday" readonly></v-text-fielf>
                    <v-date-picker v-model="birthday"></v-date-picker>
                    <v-checkbox lable="Agree to terms & Conditions" v-model="agreeToTerms"
                    :rules="agagreeToTermsRules" required></v-checkbox>
                    <v-btn type="submit" color="primary" :disabled="!formValidity" class="mr-4">Submit</v-btn>
                    <v-boton class="mr-4" color="success" @click="validateForm">Validate Form</v-boton>
                    <v-btn color="warning" @click="resetValidation" class="mr-4">Reset Validation</v-btn>
                    <v-btn color="error" @click="resetForm">Reset</v-btn>
                </v-form>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'zohrehForm',
    data: () => ({
        agreeToTerms: false,
        agagreeToTermsRules: [
            value => !!value || 'You must agree to terms and conditons to signup.'
        ],
        birthday:'',
        browsers: ['Chrome', 'Firefox', 'Safari', 'Edge', 'Brave'],
        email: '',
        emailRules: [
            value => !!value || 'Email is required.',
            value => value.indexOf('@') !== 0 || 'Email should have a username',
            value => value.includes('@') || 'Email must include @ symbol.',
            value => value.indexOf('.')-value.indexOf('@')>1 || 'Email should contain a valid domain.',
            value => value.indexOf('.') <= value.length - 3 || 'Email should contain a valid damain extension.'
        ],
        formValidity: false
    }),
    methods: {
        resetForm(){
            this.$refs.signUpForm.resetForm()
        },
        resetValidation() {
            this.$refs.signUpForm.resetValidation()
        },
        validateForm(){
            this.$refs.signUpForm.validate()
        }
    }
}
</script>

<style scoped>
</style>