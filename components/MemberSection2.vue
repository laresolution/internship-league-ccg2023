<template>
    <v-container>
        
  <v-card
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
      Number 10
    </v-card-subtitle>

    <v-card-text>
      <div>Whitehaven Beach</div>

      <div>Whitsunday Island, Whitsunday Islands</div>
    </v-card-text>

    <v-card-actions>
      <v-btn color="orange">
        Share
      </v-btn>

      <v-btn color="orange">
        Explore
      </v-btn>
    </v-card-actions>
  </v-card>

        <v-card 
            v-show="!isEditing"
            class="mx-auto"
            max-width="400"

           
>
            <v-card-title></v-card-title>
            <v-card-subtitle class="pt-4">{{member.institution}}</v-card-subtitle>

            <v-card-text><div class="text-body-1">{{member.numero}} </div></v-card-text>

            <div class="text-body-1">{{member.id}} </div>   
                
                 
                <div class="text-body-1">{{member.email}} </div>
                <div class="text-body-1">{{member.phone}}  </div>   
                <div class="text-body-1">{{member.studentNumber}} </div>
                <div class="text-body-1">{{member.programNumber}} </div>
               
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

        </v-card>
        <v-row> 
            <v-col v-show="!isEditing">
                <div class="text-body-1" label="ID">{{member.id}} </div>   
                <div class="text-body-1">{{member.numero}} </div> 
                <div class="text-body-1">{{member.name}} </div>  
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