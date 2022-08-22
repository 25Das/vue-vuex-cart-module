<template>
  <div class="flex flex-col items-center">
    <div v-if="$store.state.products.length > 0" class="mb-5 flex flex-col">
      <span
        class="mx-auto mb-2 w-fit rounded bg-purple-500 px-2 font-medium text-white"
        >Produtos</span
      >
      <AppProducts />
    </div>

    <div v-if="$store.state.cart.length > 0" class="mb-5 flex flex-col">
      <span
        class="mx-auto mb-2 w-fit rounded bg-purple-500 px-2 font-medium text-white"
        >Carrinho</span
      >
      <div
        v-for="product in $store.state.cart"
        :key="product.id"
        class="mb-2 flex justify-between space-x-10 bg-green-200 p-2"
      >
        <div class="flex space-x-5 font-medium">
          <span><strong>Item:</strong> {{ product.name }}</span>
          <span><strong>Unitário:</strong> R$ {{ product.price }}</span>
          <span><strong>Qtd.</strong> x {{ product.quantity }}</span>
          <span>
            <strong>Total:</strong> R$ {{ product.price * product.quantity }}
          </span>
        </div>
      </div>
    </div>

    <div>
      <span>
        <strong>Total do carrinho:</strong> R$
        {{ total }}
      </span>
    </div>
  </div>
</template>

<script>
  import AppProducts from './components/Products/AppProducts.vue';

  export default {
    components: {
      AppProducts,
    },
    computed: {
      total() {
        return this.$store.state.cart.reduce((total, product) => {
          return total + product.price * product.quantity;
        }, 0);
      },
    },
  };
</script>
