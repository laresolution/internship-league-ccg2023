<template>
  <v-container fluid class="pt-16 backG"> 
    <v-btn   
            elevation="2" 
            style="background-color: #FFBB01; color:rgb(224, 43, 32); font-size:20px; text-shadow: 0.08em 0.08em 0.08em rgba(0,0,0,0.4); letter-spacing:4px; font-weight:700; padding: 24px 20px;" 
            @click="affiche"> 
            {{ display }}
    </v-btn>
    <br />
    <div v-if="seen">
      <AddProduct @created="productCreated" />
    </div>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import AddProduct from '~/components/AddProduct.vue'
 
export default {
  name: 'products',
  components: { AddProduct },
  data() {
    return { 
      seen: false,
      display: 'Join Now'
    }
  },
  computed: {
    ...mapGetters('products', ['currentProduct']),
  },
  methods: {
    ...mapActions('products', ['addProduct']),
    affiche() {
      this.seen = true
    },
    async productCreated(product) {
      this.seen = false
      await this.addProduct(product)
      alert('product done')
    },
  },
}
</script>




 
