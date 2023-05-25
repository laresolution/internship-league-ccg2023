<template>
    <div>
      {{ currentUser.id }}
      <AddButton @click="addRandomUser"></AddButton>
      <ul>
        <li v-for="user in users" :key="user.id">
          <div>
          <router-link :to="`/users/${user.id}`">
            {{ user.name }}
          </router-link>
          <EditButton @click=updateUser(user)></EditButton> 
          <CancelButton @click="deleteUser"></CancelButton> 
          </div> 
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { mapGetters, mapActions } from 'vuex';
  import AddButton from '~/components/buttons/AddButton.vue';
  import EditButton from '~/components/buttons/EditButton.vue';
  import CancelButton from '~/components/buttons/CancelButton.vue';
  export default {
    name: 'Users',
    components: { AddButton, EditButton, CancelButton },
    computed: {
      ...mapGetters('users', ['users', 'currentUser']),
      regularComputedProperty() {
        return true;
      },
    },
    methods: {
      ...mapActions('users', ['loadUsers', 'addUser', 'updateUser', 'deleteUser']),
      addRandomUser() {
        const id = Math.ceil(Math.random() * 100000);
        this.addUser({
          id,
          name: `New User (${id})`,
          favoriteColor: 'Green',
        });
      },
      updateUser(user) {
        const updatedUser = {
          ...user,
          name: 'Updated Name',
        };
        this.updateUser(updatedUser); 
      },
      deleteUser() {
        this.deleteUser(this.currentUser.id);
      },
    },
    beforeRouteEnter(to, from, next) {
      next(vm => {
        vm.loadUsers();
      });
    },
  };
  </script>
  
  <style scoped>
  </style>
  