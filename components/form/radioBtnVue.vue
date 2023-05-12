<template>  
    <div>
        <v-divider></v-divider>

  <div>Picked: {{ picked }}</div>
  
  <input type="radio" id="one" value="One" v-model="picked">
  <label for="one">One</label>

  <input type="radio" id="Two" v-model="picked">
  <label for="two">Two</label>

  <v-divider></v-divider>

    </div>
  

</template>

<script>
    export default{
        name: 'radioBtnVue',
        data(){
            return{
                picked: 'One'
            }
        }
    }
</script>