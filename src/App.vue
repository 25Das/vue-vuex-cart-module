<template>
  <div class="flex flex-col items-center">
    <div>
      <span>
        <strong>Total do carrinho:</strong> R$
        {{ $store.getters.total }}
      </span>
    </div>

    <div v-if="$store.state.products.length > 0" class="mt-2 flex flex-col">
      <span
        class="mx-auto mb-2 w-fit rounded bg-purple-500 px-2 font-medium text-white"
        >Produtos</span
      >
      <AppProducts />
    </div>

    <div v-if="$store.state.cart.length > 0" class="mt-2 flex flex-col">
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

    <div class="flex flex-col items-center justify-center">
      <span
        >{{ $store.state.user.firstName }}
        {{ $store.state.user.lastName }}</span
      >
      <button
        class="rounded bg-gray-500 px-2 text-sm text-white"
        @click="updateUser()"
      >
        Atualizar Perfil
      </button>
    </div>
  </div>
</template>

<script>
  import AppProducts from './components/Products/AppProducts.vue';

  export default {
    components: {
      AppProducts,
    },
    methods: {
      updateUser() {
        const newUser = {
          firstName: 'Jane',
          lastName: 'Doe',
          email: 'jane@doe.com',
        };

        this.$store.dispatch('storeUser', newUser);
      },
    },
  };
</script>
