<template>
    <div class="row justify-center q-mt-md">
        <q-pagination v-model="state.page" color="grey-8" max="3" size="sm" @change="handlePageChange" />
    </div>
</template>

<script setup >
import { onMounted } from 'vue';

import useProductsHandler from "../composables/products/useProductsHandler";
const {
    state,
    getpagination
} = useProductsHandler();

onMounted(async () => {
    getpagination()
});
</script>