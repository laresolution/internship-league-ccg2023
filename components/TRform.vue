<template>
     <div>
    <v-text-field v-model="fullName"
      label="Your first and last name"
      :rules="rules"
      hide-details="auto"
    ></v-text-field>
    <v-text-field v-model="profession" label="Your profession"></v-text-field>
    <v-text-field v-model="likes" label="Your likes"></v-text-field>
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
  export default {
    name: 'TRform',
    data: () => ({
        
      rules: [
        value => !!value || 'Required.',
        value => (value && value.length >= 3) || 'Min 3 characters',
      ],
      fullName:'',
      profession:'',
      likes:''
    }),
    methods: {
        clicked() {
            this.$emit('newMember', this.fullName,this.profession,this.likes);
        }
    }
  }
</script>

<style scoped></style>