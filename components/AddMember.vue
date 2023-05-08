<template>
    <v-form>
        <v-container>
            <v-row>
                <v-col>
                    <v-text-field label="Name" v-model="newMember.name"></v-text-field>
                    <v-text-field label="Image URL" v-model="newMember.imgSrc"></v-text-field>
                    <v-text-field label="Title" v-model="newMember.title"></v-text-field>
                    <v-textarea label="Quote" v-model="newMember.quote"></v-textarea>
                    <v-textarea label="Strengths" v-model="newMember.strengths"></v-textarea>
                    <v-textarea label="Likes" v-model="newMember.likes"></v-textarea>
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