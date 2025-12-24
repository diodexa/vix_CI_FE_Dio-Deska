<template>
    <div v-if="loading">Loading...</div>

    <div v-else-if="products" class="container">
        <div class="wrapper card space-between">

            <div class="containerImage">
                <img :src="products.image" :alt="products.title" />
            </div>

            <div class="flex-col">

                <div>
                    <h3>{{ products.title }}</h3>
    
                    <div class="wrapper space-between border-bottom">
                        <span>{{ products.category }}</span>
                        
                        <div class="wrapper">
                            <span>{{ products.rating.rate }}/5</span>
                            <StarRating :rating="products.rating.rate"/>
                        </div>
                    </div>
                </div>

                <p class="description">{{ products.description }}</p>
                
                <div class="bottom">
                    <h3 class="price">${{ products.price }}</h3>
                    
                    <div class="buttons">
                        <button> Buy Now!</button>
                        <button> Next Product</button>
                    </div>
                </div>

            </div>

        </div>
    </div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue';
import { getProduct } from '../API/APIProduct';
import { useRoute } from 'vue-router';
import StarRating from '../components/icons/StarRating.vue';


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
        --defaultBG:#dcdcdc;
        --antiDefaultColor:#ffff;
        --defaultColor:#1E1E1E;

        --menBG:#D6E6FF;
        --menColor:#002772;
        
        --womenBG:#FDE2FF;
        --womenColor:#720060;    

        height: 100vh; 
        display: flex;
        justify-content: center;
        align-items: center;
        background: linear-gradient(
            to bottom, var(--defaultBG) 0%, var(--defaultBG) 60%, white 60%, white 100%
        )
    }
    .flex-col{
        display: flex;
        flex-direction: column;
    }
    .wrapper {
        display: flex;
        flex-direction: row;
        gap: 5px;
    }

    .card {
        width: 80%;
        min-height: 70vh;
        border: 1px solid var(--defaultColor);
        border-radius: 5px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        overflow: hidden;
        background-color: white;
        padding: 1rem;
        position: relative;
        
    }


    .containerImage {
        min-width: 20dvw;   
        display: flex;
        margin: 5rem;
        align-items: center;       
        justify-content: center;   
        overflow: hidden;
        aspect-ratio: 1 / 1;
        max-height: 60vh;
        height: auto;
    }

    .containerImage img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
    }

    .card h3{
        color: var(--defaultColor);
    }

    .space-between {
        justify-content: space-between;
    }

    .border-bottom{
        border-bottom: 1px solid black;
        padding-bottom: 1rem;
    }

    .description {
        font-size:1vw;
        margin-bottom: 10rem;
    }

    .price {
        border-top: 1px solid black;
        padding-top: 1rem;
        font-size: 2rem;
        margin-bottom: 1rem;
    }

    .buttons button {
        width: 45%;
        margin: 0 4% 5% 0;
        padding: 0.5rem;
        color: var(--defaultColor);
        border: 1px solid var(--defaultColor);
        background: transparent;
    }

    .buttons button:nth-child(1){
        background: var(--defaultColor);
        color: var(--antiDefaultColor);
    }

    .bottom{
        margin-top: auto;
    }

 


    

</style>