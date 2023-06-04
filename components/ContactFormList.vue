<template>
    <v-container>
        <v-row> 
            <v-col v-show="!isEditing">
                <div class="text-body-1" label="ID">{{contactform.id}} </div>   
                 
                <div class="text-body-1">{{contactform.name}} </div>  
                <div class="text-body-1">{{contactform.email}} </div>
                <div class="text-body-1">{{contactform.phoneNumber}}  </div>   
                 
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
            <v-spacer></v-spacer> 
            <v-col v-show="isEditing"> 
                <div class="text-body-1" label="ID">{{contactform.id}} </div>   
                
                <v-text-field v-model="valueModel.name">{{contactform.name}}</v-text-field>
                <v-text-field v-model="valueModel.email">{{contactform.price}}</v-text-field> 
                <v-text-field v-model="valueModel.phoneNumber">{{contactform.description}}</v-text-field>
                
                
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
    name: 'ContactFormList',
    mixins: [vModelObjectMixin],
    data() {
        return {
            isEditing: false,
            valueModel: {} // Define the valueModel object
        }
    },
    computed: {
        contactform() {  
            return this.value || {};
        }
    },
    methods: {
        startEdit() {
            this.isEditing = true;
        },
        save() {
            this.isEditing = false;
            this.$emit('saveData',this.valueModel) 
        },
        cancel () {
            this.isEditing = false;
        }
    }
}
</script>

<style scoped>
</style>