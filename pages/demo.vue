<template>
            <div>
                <router-link to="MemberForm">Member Form</router-link> 
                {{ currentMember.id }}  
                <AddButton @click="addRandomMember"></AddButton>
            
                <AddDialogVue ></AddDialogVue>
                
                <ul>
                    <li v-for="member in members" :key="member.id">
                        {{member.name}}   
                        {{member.email}}
                        {{member.phone}}   
                        {{member.studentNumber}}
                        {{member.programNumber}}   
                        {{member.institution}}
                        {{member.supervisorName}}   
                        {{member.startDate}}
                        {{member.endDate}} 
                    </li>
                </ul>
            </div>
        </template>
        
        <script>
        import { mapGetters, mapActions } from 'vuex'
        import AddButton from '~/components/buttons/AddButton.vue';
         
        import AddDialogVue from '~/components/AddDialog.vue';
        export default {
            name: "MemberForm",
            components: { AddButton,  AddDialogVue},
            layout: "newlayout2",
            data() {
                return {
                    isFormShown: false,
                    items: [
                        {
                            name: "Empty Member"
                        }
                    ]
                };
            },
            computed: {
                ...mapGetters('members', [
                    'members',
                    'currentMember'
                ]),
                regularComputedProperty () {
                    return true
                }
            },
            methods: {
                ...mapActions('members', [
                    'addMember'
                ]),
                addRandomMember() {
                    const id = Math.ceil(Math.random() * 100000)
                     
                    this.addMember({
                        id,
                        name: `name(${id})`, 
                        email: 'philip@gmail.com',
                        phone: `phonet${id}`,
                        studentNumber: `student${id}`,
                        programNumber: `program${id}`,
                        institution: `student${id}`,
                        supervisorName: `institution${id}`,
                        startDate: `startDate${id}`,
                        endDate: `endDate${id}`,
                    })
                }
            }
        }
        </script>
        
        <style scoped>
        </style> 