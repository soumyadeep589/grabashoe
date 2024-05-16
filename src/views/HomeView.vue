<template>
  <div class="container-fluid">
    <div class="found-sort-container d-flex justify-content-between">
      <div>
        <p>Found: 265 Products</p>
      </div>
      <div>
        <p class="mb-0">Sort By: Popularity<span><i class="bi bi-caret-down-fill"></i></span></p>
      </div>
    </div>
    <div class="products-container">
      <Product v-for="product in productList" :product="product" :key="product.id" />
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Product from '../components/Product.vue';
import { fetchProductsByCategory } from "../services/api";
import type { ProductType } from "../services/interfaces"

const productList = ref<ProductType[]>([])
const loading = ref(false);
const error = ref("");

const fetchProduct = async () => {
  loading.value = true;
  try {
    productList.value = await fetchProductsByCategory('mens-shoes');
  } catch (err) {
    error.value = 'Error fetching products: ';
  } finally {
    loading.value = false;
  }
};

onMounted(fetchProduct);

</script>

<style scoped></style>
