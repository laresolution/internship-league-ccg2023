<template>
    <div>
        <router-link to="demo">demo</router-link>
        {{ currentMember.id }} 
        <AddDialog></AddDialog>
        <ul>
            <li v-for="member in members" :key="member.id">
                {{member.name}}
            </li>
        </ul>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import AddDialog from '~/components/AddDialog.vue'; 

export default {
    name: "MemberForm",
    components: {  AddDialog },
    layout: "newlayout2",
    data() {
        return {
            isFormShown: false,
            items: [
                {
                    name: "Empty Member"
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