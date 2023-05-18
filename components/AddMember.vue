<template>
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
</template>

<script>
import CancelButton from './buttons/CancelButton.vue'
import SaveButton from './buttons/SaveButton.vue'

const generateNewMember = () => {
    return {
        name: '',
        email: '',
        phone: '',
        studentNumber: '',
        programNumber: '',
        institution: '',
        supervisorName: '',
        startDate:'',
        endDate:''
    }
}
export default {
    name: "AddMember",
    components: { CancelButton, SaveButton },
    data() {
        return { 
            maxDate: this.getMaxDate(),
            pickerStart: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
            pickerEnd: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
            newMember: generateNewMember(),

            nameRules: [
                v => !!v || 'Name is required',
                v => (v && v.length <= 10) || 'Name must be less than 10 characters',
            ],
            phoneRules: [
                v => !!v || 'Phone number is required',
                v => (v && v.length >= 9) || 'Phone number needs to be at least 9 digits.',
                v => /^\d+$/.test(v) || 'Phone number must contain only numbers.',
            ],
      
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            ],
        };
    },
    methods: {
        saveMember() {
            this.$emit("created", this.newMember);
            this.newMember = generateNewMember(); 
        },
        clear() {
            this.$emit("cancel")
            this.newMember = generateNewMember();
        },
        getMaxDate() {
            const date = new Date();
            date.setFullYear(date.getFullYear() + 2);
            return date.toISOString().substr(0, 10);
        },
    }
}
</script>