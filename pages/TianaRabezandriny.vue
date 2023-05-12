<template>
    <div>
        <TRform v-on:newMember="affiche($event)">

        </TRform>
        <v-card class="mx-auto" max-width="344" outlined>
            <v-list-item three-line>
                <v-list-item-content>
                    <div class="text-overline mb-4">
                        OVERLINE
                    </div>
                    <v-list-item-title class="text-h5 mb-1">
                        {{ salutation }}
                    </v-list-item-title>
                    <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-avatar tile size="80" color="blue"></v-list-item-avatar>
            </v-list-item>

            <!-- <v-card-actions>
        <v-btn
          outlined
          rounded
          text
        >
          Button
        </v-btn>
      </v-card-actions> -->
        </v-card>
    </div>
</template>

<script>
import TRform from '~/components/TRform.vue';
export default {
    name: 'TianaRabezandriny',
    components:{TRform},
    data() {
        return { salutation: 'HELLO',
        fullName:'',
      profession:'',
      likes:''
     
    },
    methods: {
        affiche:function(données){
            this.fullName= données.fullName;

        } 
    }

}}
</script>

<style scoped></style>