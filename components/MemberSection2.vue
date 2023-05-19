<template>
    <v-container>
        <v-row>
            <v-spacer></v-spacer> 
            <v-col v-show="!isEditing">
                <v-text-field v-model="valueModel.name" label="Name"></v-text-field>
  
                <div class="text-body-1">{{member.id}} </div>
                <div class="text-body-1">{{member.email}} </div>
                <div class="text-body-1">{{member.phone}}  </div>   
                <div class="text-body-1">{{member.studentNumber}} </div>
                <div class="text-body-1">{{member.programNumber}} </div>
                <div class="text-body-1">{{member.institution}} </div>
                <div class="text-body-1">{{member.supervisorName}} </div>
                <div class="text-body-1">{{member.startDate}} </div>
                <div class="text-body-1">{{member.endDate}} </div>
                <v-btn
                    class="mx-2"
                    fab
                    color="primary"
                    @click="startEdit"
                >
                    <v-icon dark>
                        mdi-pencil
                    </v-icon>
                </v-btn>
            </v-col>
            <v-col v-show="isEditing">
                <v-text-field v-model="valueModel.name" label="Name"></v-text-field>
                <div class="text-body-1">{{member.name}} </div> 
                <div class="text-body-1">{{member.email}} </div> 
                <div class="text-body-1">{{member.phone}}  </div>   
                <div class="text-body-1">{{member.studentNumber}} </div>
                <div class="text-body-1">{{member.programNumber}} </div>
                <div class="text-body-1">{{member.institution}} </div>
                <div class="text-body-1">{{member.supervisorName}} </div>
                <div class="text-body-1">{{member.startDate}} </div>
                <div class="text-body-1">{{member.endDate}} </div>
                <input >
                <v-btn
                    class="mx-2"
                    fab
                    color="success"
                    @click="save"
                >
                    <v-icon dark>
                        mdi-content-save
                    </v-icon>
                </v-btn>
            </v-col>
            <v-spacer></v-spacer>
        </v-row>
    </v-container>
</template>

<script>
import vModelObjectMixin from '~/mixins/vModelObjectMixin';

export default {
    name: 'MemberSection2',
    mixins: [vModelObjectMixin],
    data() {
        return {
            isEditing: false
        }
    },
    computed: {
        member() {
            console.log("the form data:")
            console.log(this.value);
            return this.value || {};
        }
    },
    methods: {
        startEdit() {
            this.isEditing = true;
        },
        save () {
            this.isEditing = false;
            this.emitValue()
        },
        cancel () {
            this.isEditing = false;
        }
    }
}
</script>

<style scoped>
</style>