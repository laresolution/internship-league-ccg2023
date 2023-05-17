<template>
    <v-card
        elevation="0"
        class="pa-8"
        light
        style="overflow-y:auto;height:96vh;">
        <div id="regform" class="registration">
            <v-row>
                <v-col>
                    <h1>YOU HAVE CHOSEN THE RIGHT PATH TO YOUR SUCCESS!</h1>
                </v-col>
                <v-col>
                    <v-form>
                        <form action="/action_page.php" id="form1">
                            <label for="firstName">First name:</label>
                            <input type="text" name="firstName" v-model="firstName">
                            <label for="lasttName">Last name:</label>
                            <input type="text" name="lastName" v-model="lastName">
                            <label for="email">E-mail Address:</label>
                            <input type="email" name="email" v-model="email">
                            <label for="phoneNumber">Phone Number:</label>
                            <input type="tel" name="phoneNumber" v-model="phoneNumber">
                            <div class="row btn">
                                <input type="submit" value="Register" class="column btn-reg">
                                <a href="https://laresolution.ca/internshipleague/login/" class="column btn-login">Login</a>
                            </div>
                        </form>
                    </v-form>
                </v-col>
            </v-row>
        </div>
    </v-card>
</template>
<script>
export default {
    name: 'RegForm',
    data() {
        return {
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: ''

        }
    }
}
</script>