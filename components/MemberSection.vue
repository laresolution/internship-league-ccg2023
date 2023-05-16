<template>
    <v-container>
        <v-row>
            <v-spacer></v-spacer>
            <v-col>
                <v-img :src="member.imgSrc" max-height="240" max-width="240" />
            </v-col>
            <v-col v-show="!isEditing">
                <div class="text-h2">{{valueModel.name}}</div>
                <div class="text-h3">{{member.title}}</div>
                <div class="text-body-2">{{member.quote}}</div>
                <div class="text-subtitle-2">Strengths</div>
                <div class="text-body-1">{{member.strengths}}</div>
                <v-spacer></v-spacer>
                <div class="text-subtitle-2">Likes</div>
                <div class="text-body-1">{{member.likes}}</div>
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
            <v-col v-show="isEditing" class="info">
                <v-text-field v-model="valueModel.name" class="text-h5"></v-text-field>
                <v-text-field v-model="valueModel.title" class="text-h5">{{member.title}}</v-text-field>
                <v-text-field v-model="valueModel.quote" class="text-body-2">{{member.quote}}</v-text-field>
                <div class="text-subtitle-2">Strengths</div>
                <v-text-field v-model="member.strengths" class="text-body-1">{{member.strengths}}</v-text-field>
                
                <v-spacer></v-spacer>
                <div class="text-subtitle-2">Likes</div>
                <v-text-field v-model="member.likes" class="text-body-1">{{member.likes}}</v-text-field>
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
    name: 'MemberSection',
    mixins: [vModelObjectMixin],
    data() {
        return {
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

<style scoped>
</style>