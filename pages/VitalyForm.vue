<template>
    <div>
        <OpenFormVitaly @click="showForm"></OpenFormVitaly>
        <YourNewFormComponent @created="addItem" @cancel="hideForm" />
        <ul>
            <li v-for="item in items" :key="item.name">
                {{item.name}}
            </li>
        </ul>
    </div>
</template>

<script>
import OpenFormVitaly from '~/components/buttons/OpenFormVitaly.vue'
export default {
    name: 'VitalyForm',
    components: {OpenFormVitaly},
    data () {
        return {
            isFormShown: false,
            items: [
                {
                    name: 'VitalyForm'
                }
            ]
        }
    },
    methods: {
        showAddForm() {
            this.formShown = true
        },
        memberCreated(newMember) {
            const newId = Math.ceil(Math.random() * 50000)
            newMember.id = newId
            this.members.push({
                id: newId,
                data: newMember
            })
            this.hideForm()
        },
        hideForm () {
            this.formShown = false
        }
    }
}
</script>

<style scoped>
</style>