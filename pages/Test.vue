<template>
    <MemberSection2></MemberSection2>
  </template>
  
  <script>
  import MemberSection2 from '~/components/MemberSection2.vue';
  
  export default {
    name: "Test",
    components: { MemberSection2 },
    data() {
      return {
        Member: null // Initialize currentMember 
      };
    },
    methods: {
       
    }
  }
  </script>
  