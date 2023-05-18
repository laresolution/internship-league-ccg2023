<template>
    
    <AddDialog ></AddDialog>
     
</template>

<script>
import AddDialog from '../components/AddDialog.vue'
 
 
export default {
    name: "TestAddMember3",
    components: { AddDialog },
    data() {
        return {  
            // members: [], // Array to store new members
 
        };
    },
    methods: { 
/*         enregistrerMembre() { //alert('enregistreMembre')
              // Get the member information from the child component
            const currentMember = this.$refs.addMember.saveMember();
 
              // Save the member information or perform any other desired action
            console.log(currentMember); // Example: Log the member information to the console
               
        }, */
        test(){
            alert('hello tiamo')
           
        }
    } 
}

</script>