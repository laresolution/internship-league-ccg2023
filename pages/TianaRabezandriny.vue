<template>
    <div>
        <TRform @newMember ="affiche">

        </TRform>
        <v-card class="mx-auto" max-width="344" outlined>
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
    components: { TRform },
    data() {
        return {
            salutation: 'HELLO',
            fullName: '',
            profession: '',
            likes: ''

        }
    },
    methods: {
        affiche(données) {
            this.fullName = données.fullName;
            this.profession = données.profession;
            this.likes = données.likes;
            console.log(données);

        }
    }

}
</script>

<style scoped></style>