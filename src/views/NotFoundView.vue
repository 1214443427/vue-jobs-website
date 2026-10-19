<script setup lang="ts">
import { ExclamationTriangle } from '@primeicons/vue'
</script>

<template>
  <section class="text-center flex flex-col justify-center items-center h-96">
    <ExclamationTriangle class="text-yellow-400 mb-4 w-10 h-10" />
    <h1 class="text-6xl font-bold mb-4">404 Not Found</h1>
    <p class="text-xl mb-5">This page does not exist</p>
    <RouterLink to="/" class="text-white bg-green-700 hover:bg-green-900 rounded-md px-3 py-2 mt-4"
      >Go Back</RouterLink
    >
  </section>
</template>

<style scoped></style>
