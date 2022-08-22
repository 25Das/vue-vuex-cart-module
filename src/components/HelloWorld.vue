<script setup>
  import { useStore } from 'vuex';

  const store = useStore();
</script>

<template>
  <div class="my-2 flex flex-col items-center justify-center">
    <h1 class="text-2xl">
      {{ store.state.user.firstName }} {{ store.state.user.lastName }}
    </h1>
    <h1 class="text-2xl">{{ store.state.user.email }}</h1>
  </div>
</template>
