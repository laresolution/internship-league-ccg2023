<template>
    <v-form>
        <v-container>
            <v-row>
                <v-col>
                    <v-text-field label="Name" v-model="newMember.name" :rules="nameRules" :maxlength="60" required></v-text-field>
                    <v-text-field label="Email" v-model="newMember.email" :rules="emailRules" required></v-text-field>
                    <v-text-field label="Student number" v-model="newMember.studentNumber" :maxlength="20" required></v-text-field>
                    <v-text-field label="Program number" v-model="newMember.programNumber" :maxlength="20" required></v-text-field>
                    <v-text-field label="Institution" v-model="newMember.institution" :maxlength="100"></v-text-field>
                    <v-text-field label="Supervisor name" v-model="newMember.supervisorName" :maxlength="60"></v-text-field>
                     Internship start 
                    <v-row justify="space-around">
                        <v-date-picker
                        v-model="picker" :min="new Date().toISOString().split('T')[0]" required
                        color="green lighten-1"
                        ></v-date-picker>
                        <v-date-picker
                        v-model="picker2"
                        color="green lighten-1"
                        header-color="primary" :max="maxDate"
                        ></v-date-picker>
                    </v-row>
                    
                    <SaveButton @click="saveMember"></SaveButton>
                    <CancelButton @click="clear"></CancelButton>
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
        studentNumber: '',
        programNumber: '',
        institution: '',
        supervisorName: '',
       
    }
}
export default {
    name: "AddMember",
    components: { CancelButton, SaveButton },
    data() {
        return {
            picker: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
            picker2: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
            maxDate: this.getMaxDate(),
            newMember: generateNewMember(),

            nameRules: [
                v => !!v || 'Name is required',
                v => (v && v.length <= 10) || 'Name must be less than 10 characters',
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