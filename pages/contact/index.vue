<template>
  <v-container fluid class="pt-16 backG"> 
    <div v-if="formshown"> 
      <ContactFormList v-for="contactform in contactforms" :key="contactform.id" :value="contactform" v-show="false" /> 
    </div>
    <ul>
        <li v-for="contactform in contactforms" :key="contactform.id">
          <div>
          <router-link :to="`/contactforms/${contactform.id}`">
            {{ contactform.name }} 
            <v-btn
            class="mx-2" color="info"  >  
            <v-icon dark>mdi-information</v-icon> 
            </v-btn>
          </router-link><br/>  
          </div> 
        </li>
      </ul>  
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
      <AddContactForm @created="contactformCreated" /> 
    </div>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'  

import AddContactForm from '~/components/AddContactForm.vue'
import ContactFormList from '~/components/ContactFormList.vue'
    
export default {
  name: 'contactforms',
  components: { AddContactForm, ContactFormList   },
  data() {
    return { 
      formshown: false ,
      display: 'Contact US', 
    }
  },
  computed: {
    ...mapGetters('contactforms', ['contactforms','currentContactForm']),
    regularComputedProperty () {
            return true
        },
    givenContactFormId() {
        return this.$route.params?.id;
    },    
    givenContactForm () {
        return this.contactforms[this.givenContactFormId] || {}
    }    
  },
  methods: {
    ...mapActions('contactforms', ['loadContactForms','addContactForm']),
    affiche() {
      this.formshown = true
    },
    contactformCreated(contactform) { 
      this.formshown = false
      this.addContactForm(contactform)  
      console.log(contactform); 
      const id = contactform.id;  
      console.log(contactform); 
      this.$router.push("/contact/"+id);
    }, 
  },
  beforeRouteEnter(to, from, next) {
        next(vm => {
            vm.loadContactForms()
        })
    } 
}
</script>





 
