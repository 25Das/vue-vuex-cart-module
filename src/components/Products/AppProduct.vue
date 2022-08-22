<template>
  <div class="flex justify-between space-x-10">
    <span>{{ product.name }} - R$ {{ product.price }}</span>

    <div class="flex space-x-1">
      <div class="rounded border border-gray-600 pl-2">
        x
        <input
          v-model="quantity"
          type="number"
          class="w-9 bg-white/0 outline-none"
          min="1"
          max="100"
        />
      </div>

      <button
        v-if="!isInCart(product.id)"
        class="rounded bg-gray-700 px-2 font-medium text-white"
        @click="addProduct()"
      >
        +
      </button>

      <button
        v-if="isInCart(product.id)"
        class="rounded bg-gray-700 px-2.5 font-medium text-white"
        @click="removeProduct(product)"
      >
        -
      </button>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      product: {
        type: Object,
        required: true,
      },
    },
    data() {
      return {
        quantity: 1,
      };
    },
    methods: {
      addProduct() {
        const product = { ...this.product, quantity: this.quantity };
        this.$store.commit('addProduct', product);
      },
      removeProduct(product) {
        this.quantity -= 1;
        const removedProduct = { ...product, quantity: this.quantity };
        this.$store.commit('removeProduct', removedProduct);

        if (this.quantity === 0) {
          this.quantity = 1;
        }
      },
      isInCart(id) {
        return this.$store.state.cart.find((product) => product.id === id);
      },
    },
  };
</script>
