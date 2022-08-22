import { createStore } from 'vuex';

export default createStore({
  state: {
    user: {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@doe.com',
    },
    products: [
      {
        id: 1,
        name: 'Bola',
        price: 100,
        quantity: 1,
      },
      {
        id: 2,
        name: 'Chuteira',
        price: 200,
        quantity: 1,
      },
      {
        id: 3,
        name: 'Meião',
        price: 50,
        quantity: 1,
      },
    ],
    cart: [],
  },
  mutations: {
    storeUser(state, data) {
      state.user = data;
    },
    addProduct(state, data) {
      state.cart.push(data);
    },
    removeProduct(state, removedProduct) {
      state.cart = state.cart
        .map((product) => {
          if (product.id === removedProduct.id) {
            product.quantity = removedProduct.quantity;
          }
          return product;
        })
        .filter((product) => product.quantity > 0);
    },
  },
  getters: {
    total(state) {
      return state.cart.reduce(
        (total, product) => (total += product.price * product.quantity),
        0,
      );
    },
  },
  actions: {
    storeUser({ commit }, data) {
      return new Promise((resolve) => {
        setTimeout(() => {
          commit('storeUser', data);
          resolve();
        }, 3000);
      });
    },
  },
});
