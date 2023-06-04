<template>
    <v-container>  
        <router-link to="../contactforms">Back to list</router-link>
        <ContactFormList :value="givenContactForm" @saveData="enregistrement"></ContactFormList>  
        <DeleteButton @click="remove(givenContactForm)" ></DeleteButton>   
    </v-container> 
</template>

<script>
import { mapGetters } from 'vuex';
import { doc, deleteDoc, updateDoc } from "firebase/firestore"; 
import { db } from '~/store/firebase.js';

import ContactFormList from '~/components/ContactFormList.vue';
import DeleteButton from '~/components/buttons/DeleteButton.vue'; 
export default {
    
    data() {
        return {};
    },
    components: {ContactFormList, DeleteButton },
    computed: {
        ...mapGetters('contactforms',[
            'contactforms'
        ]),
        givenContactFormId() {
            return this.$route.params?.id;
        },
        givenContactForm () {
            return this.contactforms[this.givenContactFormId] || {}
        }
    },
 methods: {
    async enregistrement(contactform) {  
            // ... update contactform code
            const contactformId = contactform.id; 
            try {
                await updateDoc(doc(db, "contactforms", contactformId), contactform);
                
      // Add more fields to update as needed
                // update operation successful 
                alert("Update operation successful"); 
            } catch (error) {
                // Handle the error if the update operation fails
                console.error("Error updating contactform:", error);
            }
            this.$router.push("/contactforms/");
          },

    async remove(givenContactForm) {
        const contactformId = givenContactForm.id;
    
        try {
        await deleteDoc(doc(db, "contactforms", contactformId));
        // Delete operation successful 
        alert("Delete operation successful");
        this.$router.push("/contactforms/");
        } catch (error) {
        // Handle the error if the delete operation fails
        console.error("Error deleting contactform:", error);
        }
    }
}

}
</script>

 