<template>
    <AddDialog @member-saved="handleMemberSaved"></AddDialog>
  </template>
  
  <script>
  import AddDialog from '../components/AddDialog.vue'
  
  export default {
    name: "TestAddMember3",
    components: { AddDialog },
    data() {
      return {
        currentMember: null // Initialize currentMember 
      };
    },
    methods: {
      handleMemberSaved(member) { 
        // Access the saved member information here
        this.currentMember = member;
        console.log('Member info by emit:'); 
        console.log(this.currentMember);
      }
    }
  }
  </script>
  