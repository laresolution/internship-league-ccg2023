<template>
  <div>
    <v-text-field v-model="newUser.fullName" label="Your first and last name" :rules="rules"
      hide-details="auto"></v-text-field>
    <v-text-field v-model="newUser.profession" label="Your profession"></v-text-field>
    <v-text-field v-model="newUser.likes" label="Your likes"></v-text-field>
    <h3>Your Gender :</h3>
    <!-- <v-container fluid> -->
    <!-- ---------------------------------------------------------------- -->
    <!-- <p>{{ radios || 'null' }}</p> -->
  
        <v-radio-group v-model="newUser.color">
           
            <v-radio label="Homme" value="Blue"></v-radio>
            <v-radio label="Femme" value="Pink"></v-radio>
            
        </v-radio-group>
        
   
    <!-- <v-radio-group
      v-model="color"
      mandatory
    >
      <v-radio
        label="Homme"
        value="homme"
      ></v-radio>
      <v-radio
        label="Femme"
        value="femme"
      ></v-radio>
    </v-radio-group>
  </v-container> -->
   <!-- ---------------------------------------------------------------- -->
    <v-btn class="mx-2" fab color="primary" @click="clicked">
      <v-icon dark>
        mdi-plus
      </v-icon>
    </v-btn>
  </div>
</template>

<script>
const generateNewMember = () => {
  return {
    fullName: '',
    profession: '',
    likes: '',
    color:''
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
  },
  computed: {
        classBindingObject () {
            return {
                pink: this.color === "Pink",
                blue: this.color === "Blue",
                black: true
            }
        }
    }
}
</script>

<style scoped>
.blue {
   background-color: blue; 
}

.pink {
   background-color: pink; 
}</style>