<script setup>
import { onMounted, ref } from 'vue'
import { getProduct } from '../API/APIProduct'

const products = ref([])
const loading = ref(true)

onMounted(async () => {
  try {
    products.value = await getProduct()
    console.log(product.value)
  } catch (e) {
    console.error(e)
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <div v-for="item in products" :key="item.id"> 
    <img :src="item.image"/>
    <h3>{{ item.title }}</h3>
    <p>{{ item.description }}</p>
    <p>{{ item.category }}</p>
    <h4>{{ item.rating.rate }} / 5 ★</h4>
    <h4>${{ item.price }}</h4>
    <br><br>
  </div>
</template>

<style>

</style>
