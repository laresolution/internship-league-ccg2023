<template>
    <div :style="{ backgroundColor: color }">
        <v-radio-group v-model="color">
            <v-radio label="Red" value="Red"></v-radio>
            <v-radio label="Green" value="Green"></v-radio>
            <v-radio label="Blue" value="Blue"></v-radio>
            <v-radio label="White" value="White"></v-radio>
            <v-radio label="Black" value="Black"></v-radio>
            <v-radio label="FFBB00" value="#FFBB00"></v-radio>
            <v-radio label="ABCDEF" value="#ABCDEF"></v-radio>
            <v-radio label="123456" value="#123456"></v-radio>
        </v-radio-group>
        <div class="square" :class="classBindingObject"></div>
    </div>
</template>

<script>
export default {
    name: 'Hire',
    data () {
        return {
            color: "Red"
        }
    },
    computed: {
        classBindingObject () {
            return {
                green: this.color === "Green",
                red: this.color === "Red",
                blue: this.color === "Blue"
                
            }
        }
    }
}
</script>

<style scoped>
.square {
    height: 250px;
    width: 250px;
}
.green {
   background-color: green; 
}

.blue {
   background-color: blue; 
}

.red {
   background-color: red; 
}
</style>