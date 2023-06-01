<template>
    <v-form>
        <v-container>
            <v-row>
                <v-col>
                    
                    <h1>{{ newMember.name }}</h1> 
                    <h1>{{ newMember.email }}</h1>
                    <h1>{{ newMember.phone }}</h1>

                    <h1>{{ newMember.studentNumber }}</h1>
                    <h1>{{ newMember.programNumber }}</h1> 

                    <h1>{{ newMember.institution }}</h1>
                    <h1>{{ newMember.supervisorName }}</h1>
 
                    <h1>{{ newMember.startDate}}</h1>
                    <h1>{{ newMember.endDate }}</h1>

                    <v-text-field  v-model="newMember.name" label="Name" :rules="nameRules" :maxlength="60" required></v-text-field>
                    <v-text-field  v-model="newMember.email" label="Email" :rules="emailRules" required></v-text-field>
                    <v-text-field  v-model="newMember.phone" label="Phone" :rules="phoneRules" required></v-text-field>
                    <v-text-field  v-model="newMember.studentNumber" label="Student number" :maxlength="20" required></v-text-field>
                    <v-text-field  v-model="newMember.programNumber" label="Program number" :maxlength="20" required></v-text-field>
                    <v-text-field  v-model="newMember.institution" label="Institution" :maxlength="100"></v-text-field>
                    <v-text-field  v-model="newMember.supervisorName" label="Supervisor name" :maxlength="60"></v-text-field>
                      
                    <v-row justify="space-around"> 
                        <div>Internship start
                        <v-date-picker
                        v-model="newMember.startDate" :min="minDate " :max="newMember.endDate || maxDate " required
                        color="green lighten-1"
                        ></v-date-picker></div>

                        <div>Internship end 
                        <v-date-picker
                        v-model="newMember.endDate"
                        color="green lighten-1"
                        header-color="primary"  :min="newMember.startDate || minDate" :max="maxDate"
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
import CancelButton from '../components/buttons/CancelButton.vue'
import SaveButton from '../components/buttons/SaveButton.vue'

const generateNewMember = () => {
    return {
        id:'',
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
            minDate: this.getMinDate(), 
            newMember: generateNewMember(),

            nameRules: [
                v => !!v || 'Name is required',
                v => (v && v.length <= 50) || 'Name must be less than 10 characters',
            ],
            phoneRules: [
                v => !!v || 'Phone number is required',
                v => (v && v.length >= 10) || 'Phone number needs to be at least 10 digits.',
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
            // this.newMember = generateNewMember(); -- to reset 
            console.log(this.newMember); 
            return this.newMember; // Return the member information    
        },
        clear() {
            console.log(this.newMember);  
            this.$emit("cancel")
            this.newMember = generateNewMember();
            console.log("***");
            console.log(this.newMember);  
        },
        getMaxDate() {
            const date = new Date();
            date.setFullYear(date.getFullYear() + 2);
            return date.toISOString().substr(0, 10);
        },
        getMinDate() {
            const date = new Date(); 
            // date.setFullYear(date.toISOString().split('T')[0]);
            return date.toISOString().substr(0, 10);
        },
    } 
}

</script>