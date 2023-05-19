<template>
    <div>
         
        <AddButton @click="addRandomMember"></AddButton>
        <ul>
            <li v-for="member in members" :key="member.id" >
                <router-link :to="`/members/${member.id}`">
                    {{member.name}}
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import AddButton from '~/components/buttons/AddButton.vue';

export default {
    name: "Members",
    components: { AddButton },
    computed: {
        ...mapGetters('members', [
            'members',
            'currentMember'
        ]),
        regularComputedProperty () {
            return true
        }
    },
    methods: {
        ...mapActions('members', [
            'loadMembers',
            'addMember'
        ]),
        addRandomMember() {
            const id = Math.ceil(Math.random() * 100000)
            this.addMember({
                id,
                name: `New Member (${id})`,
                
            })
        }
    },
    beforeRouteEnter(to, from, next) {
        next(vm => {
            vm.loadMembers()
        })
    }
}
</script>

<style scoped>
</style>