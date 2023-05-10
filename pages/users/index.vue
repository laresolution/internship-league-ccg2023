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
import { mapGetters, mapActions } from 'vuex'
import AddButton from '~/components/buttons/AddButton.vue';

export default {
    name: "Users",
    components: { AddButton },
    data() {
        return {
            isFormShown: false,
            items: [
                {
                    name: "Empty example"
                }
            ]
        };
    },
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
    }
}
</script>

<style scoped>
</style>