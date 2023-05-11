<template>
    <v-container>
        <v-card>
            <h1 
                :style="{
                    color: inputValue.length < 5 ?
                        'darkred' :
                         'green'
                }">
                    {{ title }}
            </h1>
            <div class="form-control">
                <input
                    v-model="inputValue"
                    type="text"
                    :placeholder="myPlaceholder"
                    class="my-3"
                    @keydown.enter="addNewToDo"
                    
                />
            </div>
            <v-btn
                color="primary"
                elevation="2"
                rounded
                class="my-3"
                @click="addNewToDo">
                Ajouter d'affaire
            </v-btn>
            <hr class="my-3" />
        </v-card>
        <v-card
            v-if="notes.length !== 0"
            class="py-5">
            <ul class="list">
                <li 
                    v-for="(item, idx) in notes" 
                    :key="item"
                    class="list-item my-2">
                    ({{ idx + 1 }})
                     {{toUpperCase(item)}}
                     <v-btn
                        color="red accent-4"
                        elevation="2"
                        rounded
                        class="my-3"
                        @click.stop="removeToDo(idx)"
                    >Delete</v-btn>
                </li>
                <hr />
                <li>Nombre total de tâches : {{ notes.length }}</li>
            </ul>
        </v-card>
        <v-card
            v-else
            class="text-center">
            Votre liste de tâches est vide. Ajouter nouveau
        </v-card>
    </v-container>
</template>

<script>
export default {
    name: 'ToDoList',
    data () {
        return {
            title:'ToDo List',
            myPlaceholder:'Saisir d\'affaire',
            inputValue:'',
            notes:['ToDo1','ToDo2','ToDo3','ToDo4']
        }
    },
    methods: {
        addNewToDo() {
            if (this.inputValue) {
                this.notes.push(this.inputValue);
                this.inputValue = ''
            }
        },
        removeToDo(idx) {
            this.notes.splice(idx,1);
        },
        toUpperCase(item) {
            return item.toUpperCase();
        }
    }
}
</script>

<style scoped>
.form-control input {
    background-color: aqua;
}
</style>