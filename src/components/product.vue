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

if (item.category=== "men's clothing"){
  
}
</script>

<template>
  <div :class="wrapper">

    <div v-for="item in products" :key="item.id" class="wrapper"> 
      <img :src="item.image"/>
      <div>
        <h1>{{ item.title }}</h1>
        <p>{{ item.description }}</p>
        <p>{{ item.category }}</p>
        <h4>{{ item.rating.rate }} / 5 ★</h4>
        <h3>${{ item.price }}</h3>
        <button>add to Chart</button>

      </div>
      <br><br>
    </div>
  </div>
</template>

<style>
  .wrapper {
    display: flex;
    gap: 5;
  }
  .mens_clothing {
    background-color:#002772 ;
  }
  .womens_clothing {
    background-color:#FDE2FF ;
  }
</style>
