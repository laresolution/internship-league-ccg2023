<template>
    <div>
        {{ currentUser.id }}
        <AddButton @click="addRandomUser"></AddButton>
        <ul>
            <li v-for="user in users" :key="user.id" >
                <router-link :to="`/users/${user.id}`">
                    {{user.name}}
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex'; 
import AddButton from '~/components/buttons/AddButton.vue';


export default {
    name: "Users",
    components: { AddButton },
    computed: {
        ...mapGetters('users', [
            'users',
            'currentUser'
        ]),
        regularComputedProperty () {
            return true
        }
    },
    methods: {
        ...mapActions('users', [
            'loadUsers',
            'addUser'
        ]),
        addRandomUser() {
            const id = Math.ceil(Math.random() * 100000)
            this.addUser({
                id,
                name: `New User (${id})`,
                favoriteColor: 'Green'
            })
        }
    },
    beforeRouteEnter(to, from, next) {
        next(vm => {
            vm.loadUsers()
        })
    }
}
</script>

<style scoped>
</style>