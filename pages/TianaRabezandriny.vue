<template>
    <div>
        <TRform @newMember ="affiche">

        </TRform>
        <v-card class="mx-auto backColor" max-width="344" outlined>
            <v-list-item three-line>
                <v-list-item-content>
                    <div class="text-overline mb-4">
                        {{fullName}}
                    </div>
                    <v-list-item-title class="text-h5 mb-1">
                        {{profession}}
                    </v-list-item-title>
                    <v-list-item-subtitle>{{likes}}</v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-avatar tile size="80" color="couleur"></v-list-item-avatar>
            </v-list-item>

            <!-- <v-card-actions>
        <v-btn
          outlined
          rounded
          text
        >
          Button
        </v-btn>
      </v-card-actions>-->
        </v-card> 
    </div>
</template>

<script>
import TRform from '~/components/TRform.vue';
export default {
    name: 'TianaRabezandriny',
    components: { TRform },
    data() {
        return {
           
            fullName: '',
            profession: '',
            likes: '',
            couleur:''

        }
    },
    methods: {
        affiche(données) {
            this.fullName = données.fullName;
            this.profession = données.profession;
            this.likes = données.likes;
            this.couleur=données.color;
            console.log(données);

        }
    },
    computed: {
        classBindingObject () {
            return {
                pink: this.couleur === "Pink",
                blue: this.couleur === "Blue"
                
            }
        }
    }

}
</script>

<style scoped>
.backColor{
    background-color: red;
}
.blue {
   background-color: blue; 
}

.pink {
   background-color: pink; 
}</style>