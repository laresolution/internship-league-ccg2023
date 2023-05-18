<template>
    <div>
        
        <AddButton @click="showAddForm"></AddButton>
            <v-card v-if="formShown">
                <v-card-title>Add new member</v-card-title>
                <v-card-text>                    
                    <AddMember @created="memberCreated" @cancel="hideForm"></AddMember>
                </v-card-text>
            </v-card>
            <MemberStyle></MemberStyle>
    </div>
    </template>

    <script>
import AddButton from '~/components/buttons/AddButton.vue';
import AddMember from '~/components/AddMember.vue';
import MemberStyle from '~/components/MemberStyle.vue';
    export default{
    name: "Member",
    components: { AddButton, AddMember, MemberStyle }
}
</script>