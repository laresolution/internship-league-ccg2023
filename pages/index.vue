<template>
  <v-container class="pa-0" fluid>
    <v-row no-gutters>
      <v-card class="mx-auto pa-8" max-width="80%" outlined>
        <v-card-text>
          <p class="ms-4 title text-center font-weight-bold">
            {{ invitationText }}
          </p>
        </v-card-text>
      </v-card>
    </v-row>
    <v-row no-gutters class="px-16 py-8">
      <v-img id="banner" :alt="altBanner" src="./img/img-banner.jpg"> </v-img>
    </v-row>
    <v-row
      no-gutters
      justify="center"
      style="min-height: 5rem; background-color: black"
    >
      <v-btn
        id="regform"
        v-if="!formShown"
        elevation="2"
        @click="showAddForm"
        color="amber accent-3"
        x-large
        class="title red--text text-center font-weight-bold"
      >
        {{ textBtnJoinUs }}
      </v-btn>
      <v-card v-if="formShown">
        <v-card-title>Add new member</v-card-title>
        <v-card-text>
          <AddMember @created="memberCreated" @cancel="hideForm"></AddMember>
        </v-card-text>
      </v-card>
    </v-row>
    <v-row no-gutters>
      <v-img
        id="separateur"
        alt="separateur"
        src="./img/bcground-home-2.jpg"
        height="350px"
        background-position="center"
        background-repeat="no-repeat"
        background-size="cover"
      >
      </v-img>
    </v-row>
  </v-container>
</template>

<script>
import { v4 as uuidv4 } from 'uuid'
import AddMember from '~/components/AddMember.vue'
export default {
  name: 'Home',
  components: { AddMember },
  data() {
    return {
        formShown: false,
      headerTitle: 'Internship League',
      altBanner: 'Banner Join Us',
      invitationText:
        'Live this collaborative experience by joining the internship league! Join like minded individuals who are as excited as you are to begin practicing their craft. Acquire the experience needed to close the junior gap and get hired by showing your work.',
      textBtnJoinUs: 'Join now',
      members: []
    }
  },
  methods: {
    showAddForm() {
      this.formShown = true
    },
    memberCreated(newMember) {
      const newId = uuidv4()
      newMember.id = newId
      this.members.push({
        id: newId,
        data: newMember,
      })
      this.hideForm()
    },
    hideForm() {
      this.formShown = false
    },
  },
}
</script>

<style scoped></style>
