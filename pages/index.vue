<template>
    <v-container
        class="pa-0"
        fluid>
        <v-row no-gutters>
            <v-card
                class="mx-auto pa-8"
                max-width="80%"
                outlined>
                <v-card-text>
                    <p class="ms-4 title text-center font-weight-bold">
                        {{ invitationText }}
                    </p>
                </v-card-text>
            </v-card>
        </v-row>
        <v-row no-gutters  class="px-16 py-8">
            <v-img
                id="banner"
                :alt="altBanner"
                src="./img/img-banner.jpg">
            </v-img>
        </v-row>
        <v-row no-gutters justify="center" style="height: 5rem; background-color: black;">
            <div style="display: flex; justify-content: center;">    
    <v-btn   
            elevation="2" 
            style="background-color: #FFBB01; color:rgb(224, 43, 32); font-size:20px; text-shadow: 0.08em 0.08em 0.08em rgba(0,0,0,0.4); letter-spacing:4px; font-weight:700; padding: 24px 20px;" 
            @click="affiche"> 
            {{ display }}
    </v-btn>
    </div> 
    <br />
    <div v-if="formshown">
      <AddMember @created="memberCreated" /> 
    </div>
        </v-row>
        <v-row no-gutters>
            <v-img
                id="separateur"
                alt="separateur"
                src="./img/bcground-home-2.jpg"
                height="350px"
                background-position="center"
                background-repeat="no-repeat"
                background-size="cover">
            </v-img>
        </v-row>
    </v-container>
</template>

<script>
import AddMember from '~/components/AddMember.vue';
export default {
    name: 'Home',
    components: {  AddMember,   },
    data() {
        return {
            headerTitle: 'Internship League',
            altBanner: 'Banner Join Us',
            invitationText: 'Live this collaborative experience by joining the internship league! Join like minded individuals who are as excited as you are to begin practicing their craft. Acquire the experience needed to close the junior gap and get hired by showing your work.',
            
            formshown: false,
            display: "ADD MEMBER"  
        }
    },
    methods: {
        /* ...mapActions('members', [ 'loadMembers','addMember' ]),   */
        affiche() {
          this.formshown = true
        },
        memberCreated(member) {
        this.formshown = false;  
        const id = member.id;   
        this.addMember(member);
        this.$router.push("/members/"+id);  
      }, 
    }
}
</script>

<style scoped></style>