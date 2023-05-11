<template>
    <v-container>
        <h1>Salut !</h1>
        <ToDoList />
        <h1 :style="{color: 'yellow', textAlign: 'center'}">Second list</h1>
        <ToDoList />
        
    </v-container>
</template>

<script>
import ToDoList from '~/components/ToDoList.vue'
export default {
    name: 'Vitaly',
    components: {ToDoList},
    data () {
        return {
        }
    },
    methods: {
    }
}
</script>

<style scoped>
</style>