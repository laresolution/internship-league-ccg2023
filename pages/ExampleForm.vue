<template>
    <div>
        <AddButton @click="showForm"></AddButton>
        <YourNewFormComponent @created="addItem" @cancel="hideForm" />
        <ul>
            <li v-for="item in items" :key="item.name">
                {{item.name}}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'ExampleForm',
    data () {
        return {
            isFormShown: false,
            items: [
                {
                    name: 'Empty example'
                }
            ]
        }
    },
    methods: {
        showForm () {

        },
        addItem () {

        },
        hideForm () {

        }
    }
}
</script>

<style scoped>
</style>