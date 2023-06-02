<template>
  <div> 
       <ul>
          <li v-for="product in products" :key="product.id" >
              <router-link :to="`/products/${product.id}`">
                  {{product.name}}
              </router-link>
          </li>
      </ul>  


  <v-btn   
          elevation="2" 
          style="background-color: #FFBB01; color:rgb(224, 43, 32); font-size:20px; text-shadow: 0.08em 0.08em 0.08em rgba(0,0,0,0.4); letter-spacing:4px; font-weight:700; padding: 24px 20px;" @click="affiche"> 
          {{ display }}
  </v-btn> 
  <div v-if="seen">
    <AddProduct @created="productCreated" /> 
     
  </div>
</div>
   
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import AddProduct from '~/components/AddProduct.vue'
 
export default {
  name: "Products",
  components: { AddProduct },
  data() {
  return {
    seen: false, 
    display: 'Join Now' 
  }
},
  computed: {
      ...mapGetters('products', [
          'products',
          'currentProduct'
      ]),
      regularComputedProperty () {
          return true
      }
  },
  methods: {
      ...mapActions('products', [
          'loadProducts',
          'addProduct'
      ]),
      affiche() {
    this.seen = true
  },
  async productCreated(product) {
    this.seen = false
    await this.addProduct(product)
    alert('product added')   
    alert(product.name+'\n'+product.price+'\n'+product.description
 
     
    ) 
     
  }, 
  },
  beforeRouteEnter(to, from, next) {
      next(vm => {
          vm.loadProducts()
      })
  }
}
</script>

<style scoped>
</style>