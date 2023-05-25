<template>
    <v-container>
        
  <v-card
    v-show="!isEditing"
    class="mx-auto"
    max-width="400"
  >
    <v-img
      class="align-end text-white"
      height="200"
      src=""
      cover
    >
      <v-card-title>{{member.name}}</v-card-title>
    </v-img>

    <v-card-subtitle class="pt-4">
        Institution: {{member.institution}}
    </v-card-subtitle>
    <v-spacer></v-spacer> 
    <v-card-text>
      <div class="text-body-1">Membership Number: {{member.numero}}</div>
      <!-- <div class="text-body-1">{{member.id}} </div> -->
                <div class="text-body-1">Email: {{member.email}} </div>
                <div class="text-body-1">Phone: {{member.phone}}  </div>   
                <div class="text-body-1">Stdent Number: {{member.studentNumber}} </div>
                <div class="text-body-1">Program Number:{{member.programNumber}} </div>
                <div class="text-body-1">Supervisor: {{member.supervisorName}} </div>
                <div class="text-body-1">Start Date: {{member.startDate}} </div>
                <div class="text-body-1">End Date: {{member.endDate}} </div>
    </v-card-text>

    <v-card-actions>
      <v-btn color="orange">
        Share
      </v-btn>

      <v-btn color="orange">
        Explore
      </v-btn>

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
    </v-card-actions>    
  </v-card>
  <v-spacer></v-spacer> 
  <v-spacer></v-spacer> 
        <v-row> 
            <v-spacer></v-spacer> 
            <v-col v-show="isEditing"> 
                <div class="text-body-1" label="ID">{{member.id}} </div>   
                <div class="text-body-1">{{member.numero}} </div> 
                <v-text-field v-model="valueModel.name">{{member.name}}</v-text-field>
                <v-text-field v-model="valueModel.email">{{member.email}}</v-text-field> 
                <v-text-field v-model="valueModel.phone">{{member.phone}}</v-text-field>
                <v-text-field v-model="valueModel.studentNumber">{{member.studentNumber}}</v-text-field>
                <v-text-field v-model="valueModel.programNumber">{{member.programNumber}}</v-text-field> 
                <v-text-field v-model="valueModel.institution">{{member.institution}}</v-text-field> 
                <v-text-field v-model="valueModel.supervisorName">{{member.supervisorName}}</v-text-field>
                <v-text-field v-model="valueModel.startDate">{{member.startDate}}</v-text-field> 
                <v-text-field v-model="valueModel.endDate">{{member.endDate}}</v-text-field> 
  
                
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
            isEditing: false,
            valueModel: {} // Define the valueModel object
        }
    },
    computed: {
        member() {  
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