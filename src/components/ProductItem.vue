<template>
  <div class="tw-grid lg:tw-grid-cols-4  tw-gap-4 tw-my-10 ">

    <q-card class="my-card tw-mb-5" v-for=" product in state.products" :key="product.id">
      <router-link to="/">
        <img :src="product.image">

        <q-card-section class="tw-text-black">
          <div class="text-h6">{{ product.title }}</div>
          <div>
            <span>
              quantity :
            </span>
            <span>
              {{ product.quantity }}
            </span>
          </div>

        </q-card-section>

        <q-card-section class="q-pt-none tw-text-black">
          {{ product.description }}
        </q-card-section>
      </router-link>
    </q-card>

  </div>
</template>

<style></style>

<script setup>
import { onMounted } from 'vue';
import { GetProducts } from "../services/products/service";
import useProductsHandler from "../composables/products/useProductsHandler"
const {
  state,
} = useProductsHandler();

const fetchData = async () => {
  try {
    const { data } = await GetProducts();
    console.log(data.data)
    state.products = data.data
  } catch (error) {
    console.log(error);
  }
};

onMounted(async () => {
  fetchData();
});
</script>
