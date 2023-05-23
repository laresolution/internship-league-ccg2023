<template>
    <v-form>
        <v-container>
            <v-row>
                <v-col>
                    <v-text-field v-model="newMember.name" label="Name" ></v-text-field>
                    <v-text-field v-model="newMember.imgSrc" label="Image URL"></v-text-field>
                    <v-text-field v-model="newMember.title" label="Title"></v-text-field>
                    <v-textarea v-model="newMember.quote" label="Quote"></v-textarea>
                    <v-textarea v-model="newMember.strengths" label="Strengths"></v-textarea>
                    <v-textarea v-model="newMember.likes" label="Likes"></v-textarea>
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
        imgSrc: '',
        name: '',
        title: '',
        quote: '',
        strengths: '',
        likes: ''
    }
}
export default {
    name: "AddMember",
    components: { CancelButton, SaveButton },
    data() {
        return {
            newMember: generateNewMember()
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
        }
    }
}
</script>