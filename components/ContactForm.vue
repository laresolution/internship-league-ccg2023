<template>
    <div>
        <v-divider :thickness="13" class="border-opacity-100" color="blue"></v-divider>
            <v-form>

                <form>
                    <v-text-field v-model="name"  label="First and last name" required>
                    </v-text-field>
                    <v-text-field v-model="email" label="E-mail" required></v-text-field>
                    <v-text-field v-model="phoneNumber"  label="Phone Number" required></v-text-field>
                    <v-select v-model="select" :items="items" label="Availability" required>
                        <v-option v-for="item in items" :key="item">{{ item }}</v-option>
                    </v-select>
                    <v-checkbox v-model="checkbox" label="Are you ready?" required></v-checkbox>

                    <v-btn class="mr-4 success" @click="submit">
                        submit
                    </v-btn>
                    <v-btn @click="clear">
                        clear
                    </v-btn>
                </form>
            </v-form>
    </div>
</template>

<script>
export default {
    name: 'ContactForm',
    data: () => ({
      name: '',
      email: '',
      phoneNumber:'',
      select: null,
      items: [
      'Morning between 10:00am to 12:00pm',
        'Afternoon between 13:00pm to 15:00pm',
      ],
      checkbox: false,
    }),
    methods: {
      submit () {
        // this.$v.$touch()
        
        alert(this.name+" ,your request was sent ! we will call you in the "+ this.select+" ,as soon as possible, during the week.");
        // alert(this.name.substring(0, this.name.indexOf(' '))+" ,your request was sent ! we will call you in the "+ this.select+" ,as soon as possible, during the week.");
        this.clear();
      },
      clear () {
        // this.$v.$reset()
        this.name = ''
        this.email = ''
        this.phoneNumber=''
        this.select = null
        this.checkbox = false
      },
    },
}
</script>

<style scoped></style>