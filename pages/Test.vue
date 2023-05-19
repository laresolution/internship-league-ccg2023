<template>
    <v-container>
      <MemberSection2 v-for="member in members" :key="member.id" v-model="member.data"></MemberSection2>
  </v-container>
</template>
  
  <script>
  import MemberSection2 from '~/components/MemberSection2.vue';
  
  export default {
    name: "Test",
    components: { MemberSection2 },
    data() {
        return {
            formShown: false,
            members: 
            [{
                id: 1,
                data: {
                    id: 1,
                    name: 'Philip', 
                    email: 'philip@laresolution.ca',
                    phone: '4382223678',
                    studentNumber: '6189853',
                    programNumber: '9709',
                    institution: 'G.Godin',
                    supervisorName: 'Alexandre Vinet',
                    startDate:'2023-05-19',
                    endDate:'2023-05-26',
                }
            },
            { 
                id: 2,
                data: {
                    id: 2,
                    name: 'Philip', 
                    email: 'philip@laresolution.ca',
                    phone: '4382223678',
                    studentNumber: '6189853',
                    programNumber: '9709',
                    institution: 'G.Godin',
                    supervisorName: 'Alexandre Vinet',
                    startDate:'2023-05-19',
                    endDate:'2023-05-26',
                }
            },
            { 
                id: 3,
                data: {
                    id: 3,
                    name: 'Philip', 
                    email: 'philip@laresolution.ca',
                    phone: '4382223678',
                    studentNumber: '6189853',
                    programNumber: '9709',
                    institution: 'G.Godin',
                    supervisorName: 'Alexandre Vinet',
                    startDate:'2023-05-19',
                    endDate:'2023-05-26',
                }
            }]
        }
    },
    methods: {
       
    }
  }
  </script>
  