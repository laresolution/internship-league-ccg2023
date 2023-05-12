<template>
    <v-group v-model="picked">
        <v-radio label="Radio 1" value="1"></v-radio>
        <v-radio label="Radio 2" value="2"></v-radio>
        <v-radio label="Radio 3" value="3"></v-radio>
    </v-group>
</template>
<script>
    export default{
        data(){
            return{
                picke: '1'
            }
        }
    }
</script>