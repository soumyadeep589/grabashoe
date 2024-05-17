<template>
    <div class="product-container">
        <img class="image" :src="product?.images[0]" :alt="product?.title" />
        <div class="name-container d-flex justify-content-between align-items-center">
            <div>
                <p class="mb-0">{{ product?.title }}</p>
                <h4 class="my-0">${{ product?.price }}</h4>
            </div>
            <div>
                <i class="bi bi-emoji-heart-eyes"></i>
            </div>
        </div>
        <div class="rating-container d-flex justify-content-between align-items-center">
            <span>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
            </span>
            <div>
                <p class="my-0">124 ratings</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { ProductType } from "../services/interfaces"


interface Props {
    product: ProductType
}
const props = defineProps<Props>()
</script>

<style scoped>

.product-container {
    display: inline-block;
    width: var(--product-card-size-large);
    margin: 4.5vw;
}

.image {
    height: var(--product-card-size-large);
    width: 22vw;
}

@media (max-width: 991px) {
    .product-container {
        display: inline-block;
        width: 40vw;
        margin: 2.5vw;
        font-size: 12px;
    }

    .image {
        height: 40vw;
        width: 40vw;
    }
}
</style>