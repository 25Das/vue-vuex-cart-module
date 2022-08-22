<template>
  <div>
    <AppProduct
      v-for="product in $store.state.products"
      :key="product.id"
      class="mb-2 bg-orange-200 p-2"
      :product="product"
    />
  </div>
</template>

<script>
  import AppProduct from './AppProduct.vue';
  export default {
    components: { AppProduct },
  };
</script>
