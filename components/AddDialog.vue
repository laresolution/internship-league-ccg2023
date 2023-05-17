<template>
    <div class="text-center">
      <v-dialog
        v-model="dialog"
        width="500"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="red lighten-2"
            dark
            v-bind="attrs"
            v-on="on"
          >
            JOIN NOW
          </v-btn>
        </template>
  
        <v-card>
          <v-card-title class="text-h5 grey lighten-2">
            Add new member
          </v-card-title>
          <AddMember></AddMember>
 
  
          <v-divider></v-divider>
  
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              text 
              @click="redirect"
            >
             Confirm 
            </v-btn>
            <v-btn
              color="primary"
              text 
              @click="cancel"
            >
            Cancel 
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </template>
  <script>
import AddMember from './AddMember.vue';

  export default {
    data() {
        return {
            dialog: false,
        };
    },
    methods: {
        redirect() {
            this.$router.push("/members");
        },
        cancel() {
            this.$router.push("/");
        },
    },
    components: { AddMember }
}
</script>