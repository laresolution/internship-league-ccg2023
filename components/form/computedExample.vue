<template>
    <div v-if="editing" class="add-item-form">
        <input @keyup.enter="saveItem" type="text" v-model="newItem" placeholder="Add an item">
        <p class="counter">{{charachterCount}}/200</p>
        <label>
            <input type="checkbox" v-model="newItemHighPriority">
            High Priority
        </label> 
        <button @click="saveItem" class="btn btn-primarity" >Save Item</button>       
    </div>
</template>

<script>
export default {
    data(){
            return{
                header: 'Shopping List App',
                editing: false,
                newItem: '',
                newItemHighPriority: false,
                items:[
                    {id: 1, label:'10 party hats', purchased: true, highPriority: false}
                ]
            }
        },
        computed:{
            return :this.newItem.length
        },
        methods:{
            saveItem(){
                this.item.push({
                    id:this.items.length + 1,
                    label: this.newItem,
                    highPriority: this.newItemHighPriority = false
                })
                this.newItem = ""
                this.newItemHighPriority = false
            }
        }
}
  
   // const shopintListApp = Vue.creatApp(){}
</script>