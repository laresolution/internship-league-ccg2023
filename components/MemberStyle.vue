<template>
    <v-sheet
      border="lg opacity-12"
      class="text-body-2 mx-auto"
      max-width="550"
    >
      <v-container fluid>
        <v-row>
          <v-col cols="3">
            <v-img src="https://laresolution.ca/internshipleague/wp-content/uploads/2023/04/vitaly.jpg" class="rounded-circle" cover></v-img>
          </v-col>
  
          <v-col v-show="!isEditing" cols="9">
            
                <div class="text-h2">{{valueModel.name}} </div>
                <div class="text-h3"> {{member.title}}</div>
                <div class="text-body-2">{{member.quote}} </div>
                <div class="text-subtitle-2">Strengths</div>
                <div class="text-body-1"> {{member.strengths}}</div>
                <v-spacer></v-spacer>
                <div class="text-subtitle-2">Likes</div>
                <div class="text-body-1"> {{member.likes}} </div>
           
          </v-col>
        </v-row>

        <v-row>
        <v-col cols="6">          
            <svg-icon type="mdi" :path="path" size="55" style="color: primary;"></svg-icon>         
        </v-col>
        <!-- <v-col cols="4">
            <v-btn><svg-icon type="mdi" :path="path" size="55" style="color: primary;"></svg-icon> </v-btn>          
                    
        </v-col> -->
        <v-col cols="6">
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
      </v-row>

      <v-col v-show="isEditing">
                <v-text-field v-model="valueModel.name" label="Name"></v-text-field>
                <div class="text-h3">{{member.title}} </div>
                <div class="text-body-2">{{member.quote}} </div>
                <div class="text-subtitle-2">Strengths</div>
                <div class="text-body-1"> {{member.strengths}} </div>
                <v-spacer></v-spacer>
                <div class="text-subtitle-2">Likes</div>
                <div class="text-body-1"> {{member.likes}}</div>
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
      </v-container>
    </v-sheet>
  </template>

  <script>
  import SvgIcon from '@jamescoyle/vue-icon';
  import { mdiLinkedin } from '@mdi/js';
  import vModelObjectMixin from '~/mixins/vModelObjectMixin';
  export default {
  name: "MemberStyle",
  mixins: [vModelObjectMixin],
  components: {
    SvgIcon
  },
  data() {
    return {
       path: mdiLinkedin,
       isEditing: false
    }
  },
  computed: {
        member () {
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