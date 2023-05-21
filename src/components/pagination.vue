<template>
    <div class="row justify-center q-mt-md">
        <q-pagination v-model="state.page" color="grey-8" max="state.numberOfPages" size="sm" @change="handlePageChange"/>
    </div>
</template>

<script setup >

import useProductsHandler from "../composables/products/useProductsHandler";
const {
    state,
    handlePageChange
} = useProductsHandler();

</script>