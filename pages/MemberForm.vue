<template>
    <div>
        <router-link to="demo">demo</router-link> 
        <AddButton @click="addMember"></AddButton> 
        <AddDialogVue ></AddDialogVue>
<!--             <template>
                <v-form>
                    <v-container>
                        <v-row>
                            <v-col>
                        <v-text-field label="Name" v-model="newMember.name" :rules="nameRules" :maxlength="60" required></v-text-field>
                        <v-text-field label="Email" v-model="newMember.email" :rules="emailRules" required></v-text-field>
                        <v-text-field label="Phone" v-model="newMember.phone" :rules="phoneRules" required></v-text-field>
                        <v-text-field label="Student number" v-model="newMember.studentNumber" :maxlength="20" required></v-text-field>
                        <v-text-field label="Program number" v-model="newMember.programNumber" :maxlength="20" required></v-text-field>
                        <v-text-field label="Institution" v-model="newMember.institution" :maxlength="100"></v-text-field>
                        <v-text-field label="Supervisor name" v-model="newMember.supervisorName" :maxlength="60"></v-text-field>
                        
                        <v-row justify="space-around"> 
                            <div>Internship start
                            <v-date-picker
                            v-model="pickerStart" :min="new Date().toISOString().split('T')[0]" required
                            color="green lighten-1"
                            ></v-date-picker></div>

                            <div>Internship end 
                            <v-date-picker
                            v-model="pickerEnd"
                            color="green lighten-1"
                            header-color="primary" :max="maxDate"
                            ></v-date-picker></div>
                            <div>
                            <SaveButton @click="saveMember"></SaveButton>
                            <CancelButton @click="clear">Cancel</CancelButton></div>
                        </v-row> 
                        
                    </v-col>
                </v-row>
            </v-container>
        </v-form>
            </template> -->
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
        addMember() {
            const id = Math.ceil(Math.random() * 100000)
            this.addMember({
                id,
                name: '', 
                email: '',
                phone: '',
                studentNumber: '',
                programNumber: '',
                institution: '',
                supervisorName: '',
                startDate:'',
                endDate:'', 
            })
        }
    }
}
</script>

<style scoped>
</style>