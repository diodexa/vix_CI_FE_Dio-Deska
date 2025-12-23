<template>
    <div v-if="loading">Loading...</div>

    <div v-else-if="products">
        <img :src="products.image" :alt="products.title" />
        <h1>{{ products.title }}halo</h1>
        <p>{{ products.description }}</p>
        <p>{{ products.rating.rate }} star</p>
        <p>{{ products.category }}</p>
        <p>${{ products.price }}</p>
    </div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue';
import { getProduct } from '../API/APIProduct';
import { useRoute } from 'vue-router';


    const route =useRoute()

    const products = ref(null)
    const loading = ref(true)


    async function fetchProduct(id) {
        loading.value = true
        try {
            const data = await getProduct(id)
            products.value = data[id-1]
            console.log('API RESULT:', data)
        }
        catch (e) {
            console.error(e)
        }
        finally {
            loading.value = false
        }
    }

    onMounted(()=>{
        fetchProduct(Number(route.params.id))
    })

    watch(() => 
    route.params.id,(newId) => {
             if (newId) fetchProduct(Number(newId))
        }
    )

    
</script>

<style  scoped>
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .wrapper {
        display: flex;
        flex-direction: row;
    }
    .card {
        width: 80%;
        border: 2px solid teal;
        border-radius: 5px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        overflow: hidden;
        text-align: center;
        background-color: white;
        padding: 1rem;
        position: relative;
        transition: 1s;
    }

    .containerImage {
        height: 250px;              
        display: flex;
        align-items: center;       
        justify-content: center;   
        overflow: hidden;
    }

    .containerImage img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
    }

    .bgWomen{
        background-color: #FDE2FF;
    }
    .bgMen{
        background-color: #D6E6FF;
    }
    

</style>