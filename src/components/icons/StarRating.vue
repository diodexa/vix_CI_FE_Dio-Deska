<script setup>
    import { computed } from 'vue'

    const props = defineProps({
        rating: {
            type: Number,
            required: true
        },
        
    })

    const stars = computed(() => {
        const full = Math.floor(props.rating)
        const half = props.rating - full >= 0.5
        const empty = 5 - full - (half ? 1 : 0)

        return {
            full,
            half,
            empty
        }
    })
</script>

<template>

    <div class="stars">
        <i v-for="n in stars.full" :key="'f'+n" class="fa-solid fa-star"></i>
        <i v-if="stars.half" class="fa-solid fa-star-half-stroke"></i>
        <i v-for="n in stars.empty" :key="'e'+n" class="fa-regular fa-star"></i>
    </div>
</template>

<style scoped>
    .stars {
        color: #f5b50a;
        font-size: 1rem;
    }
</style>
