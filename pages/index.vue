<template>
    <v-container
        class="pa-0"
        fluid
        style="
            background-repeat: no-repeat;
            background-position: center top;
            background-size: cover;
            background-image: linear-gradient(180deg,rgba(9,9,21,0) 0%,#090915 100%), url(./img/bcground-home.jpg)!important;">
        <span
            style="
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            background-image: url(./img/bcg-pattern.svg);
            background-size: 8px auto;
            background-position: 0 0;
            background-repeat: repeat;
        "></span>
        <v-row no-gutters >
            <v-card
                class="mx-auto"
                max-width="80%"
                outlined
                style="
                border: none;
                background-color:transparent" >
                <v-card-text>
                    <v-row
                        class="pa-8 mx-0"
                    >
                        <div
                            class="ms-4 title" align="center"
                            style="
                                color: #FFFFFF;
                                font-weight: 500;">
                                {{ invitationText }}
                        </div>
                    </v-row>
                </v-card-text>
            </v-card>
        </v-row>
<!--         <v-row no-gutters  class="px-16 py-8" v-show="false">
            <v-img
                id="banner"
                :alt="altBanner"
                src="./img/img-banner.jpg">
            </v-img>
        </v-row> -->
        <v-row no-gutters justify="center" style="height: 5rem; background-color: black;"> 
          <v-btn   
            elevation="2" 
            style="background-color: #FFBB01; color:rgb(224, 43, 32); font-size:20px; text-shadow: 0.08em 0.08em 0.08em rgba(0,0,0,0.4); letter-spacing:4px; font-weight:700; padding: 24px 20px;" 
            @click="affiche"> 
            {{ display }}
          </v-btn>
     
            <br />
            <div v-if="formshown">
            <AddMember @created="memberCreated" /> 
            </div>
        </v-row>
        <v-row no-gutters >
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

import { v4 as uuidv4 } from 'uuid';
import { mapGetters, mapActions } from 'vuex'; 
 
import AddMember from '~/components/AddMember.vue'; 
export default {
    name: 'Home',
    components: {AddMember }, 
    data() {
        return {
            headerTitle: 'Internship League',
            altBanner: 'Banner Join Us',
            invitationText: 'Live this collaborative experience by joining the internship league! Join like minded individuals who are as excited as you are to begin practicing their craft. Acquire the experience needed to close the junior gap and get hired by showing your work.',
            textBtnJoinUs: 'Join now',
             
            formshown: false,
            display: "ADD MEMBER" 
        } 
    },
    computed: {
        ...mapGetters('members', [
            'members',
            'currentMember'
        ]), 
        regularComputedProperty () { 
            return true
        },
         
    }, 
    methods: {
        ...mapActions('members', [ 'loadMembers','addMember' ]),  
        affiche() {
          this.formshown = true
        },
        memberCreated(member) {
        this.formshown = false;  
        const id = member.id;   
        this.addMember(member);
        this.$router.push("/members/"+id);  
      }, 

        handleMemberSaved(member) { 
         
         const numero = uuidv4();  
         this.addMember({ 
                 numero, 
                 name: member.name, 
                 email: member.email,
                 phone: member.phone,
                 studentNumber: member.studentNumber,
                 programNumber: member.programNumber,
                 institution: member.institution,
                 supervisorName: member.supervisorName,
                 startDate:member.startDate,
                 endDate:member.endDate,
         })  
       }, 
      },
      beforeRouteEnter(to, from, next) {
        next(vm => { 
         vm.loadMembers() ;  
        })
    }  
}
</script>

<style scoped>
.no-underline {
  text-decoration: none;
  color: red;
}

</style>
<!-- <template>
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

<style scoped></style> -->