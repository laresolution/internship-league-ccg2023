<template>
  <div>
    <v-divider
      :thickness="13"
      class="border-opacity-100"
      color="blue"
    ></v-divider>
    <v-form> 
        <v-text-field
          v-model="newProduct.name"
          label="Product name"
          required
        >
        </v-text-field>
        <v-text-field
          v-model="newProduct.price"
          label="Product price"
          required
        ></v-text-field>
        <v-text-field
          v-model="newProduct.description"
          label="Product Description" 
        ></v-text-field>
          
        <v-btn class="mr-4 success" @click="submit"> Add product </v-btn>
        <v-btn @click="clear"> clear </v-btn>
     
    </v-form>
  </div>
</template>

<script>
const generateNewProduct = () => {
  return {
    name: '',
    price: '',
    description: '', 
  }
}
export default {
  name: 'AddProduct',
  data: () => {
    return { 
      newProduct: generateNewProduct(),
    }
  },
  methods: {
    submit() {
      this.$emit('created', this.newProduct)
      this.newProduct = generateNewProduct()
    },
    clear() {
      this.newProduct = generateNewProduct()
    },
  },
}
</script>

<style scoped></style>
