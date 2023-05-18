<template>
    <AddMember></AddMember>
</template>

<script>
import AddMember from '../components/AddMember.vue'
 
 
export default {
    name: "TestAddMember2",
    components: { AddMember },
    data() {
        return {  
            // members: [], // Array to store new members
 
        };
    },
    methods: {
/*         saveMember() {
            // Push the new member object to the array
        // this.members.push(this.newMember); 
        console.log(this.newMember);
        console.log('*** Save ***');  
        console.log(this.members); 
        },
        clear() {
            console.log(this.newMember); 
            console.log('*** Cancel ***'); 
            console.log(this.members);
        }   */
    } 
}

</script>