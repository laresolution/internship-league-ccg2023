<template>
    <v-container> 
       
        <router-link to="../products">Back to list</router-link>
        <ProductList :value="givenProduct"></ProductList>  
          
    </v-container> 
</template>

<script>
import { mapGetters } from 'vuex'
import ProductList from '~/components/ProductList.vue';
 
export default {
    
    data() {
        return {};
    },
    components: {ProductList },
    computed: {
        ...mapGetters('products',[
            'products'
        ]),
        givenProductId() {
            return this.$route.params?.id;
        },
        givenProduct () {
            return this.products[this.givenProductId] || {}
        }
    },
    methods: {}
}
</script>

<style scoped>
</style>