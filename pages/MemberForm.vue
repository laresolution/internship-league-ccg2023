<template>
    <div>
        <!-- <router-link to="Contact">Contact</router-link> -->
        {{ currentMember.id }}  
        <AddButton @click="addRandomMember"></AddButton>
        <ul>
            <li v-for="member in members" :key="member.id">
                {{member.name}}
            </li>
        </ul>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import AddButton from '~/components/buttons/AddButton.vue';

export default {
    name: "MemberForm",
    components: { AddButton },
    layout: "newlayout",
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
            'addMember'
        ]),
        addRandomMember() {
            const id = Math.ceil(Math.random() * 100000)
            this.addMember({
                id,
                name: `New Member (${id})`,
                favoriteColor: 'Green'
            })
        }
    }
}
</script>

<style scoped>
</style>