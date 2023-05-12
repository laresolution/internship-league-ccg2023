<template>
     <div>
    <v-text-field v-model="newUser.fullName"
      label="Your first and last name"
      :rules="rules"
      hide-details="auto"
    ></v-text-field>
    <v-text-field v-model="newUser.profession" label="Your profession"></v-text-field>
    <v-text-field v-model="newUser.likes" label="Your likes"></v-text-field>
    <v-btn
        class="mx-2"
        fab
        color="primary"
        @click="clicked"
    >
        <v-icon dark>
            mdi-plus
        </v-icon>
    </v-btn>
  </div>
</template>

<script>
const generateNewMember = ()=>{
  return {
    fullName:'',
      profession:'',
      likes:''
  }
}
  export default {
    name: 'TRform',
    data: () => ({
        
      rules: [
        value => !!value || 'Required.',
        value => (value && value.length >= 3) || 'Min 3 characters',
      ],
     newUser: generateNewMember()      
    }),
    methods: {
        clicked() {
            this.$emit('newMember', this.newUser);
            console.log(this.newUser);
        }
    }
  }
</script>

<style scoped></style>