<script setup lang="ts">
import { onMounted, ref } from 'vue'
import JobListingCard from './JobListingCard.vue'
import type { Job } from '@/type.ts'
import { PulseLoader } from 'vue-spinner'
import 'vue-spinner/style.css'

defineProps({
  limit: {
    type: Number,
    required: false,
  },
  showButton: {
    type: Boolean,
    default: false,
  },
})

const jobs = ref<Job[]>([])
const isLoading = ref<boolean>(true)
onMounted(async () => {
  try {
    const response = await fetch('/api/jobs')
    jobs.value = await response.json()
  } catch (error) {
    console.log(error)
  } finally {
    isLoading.value = false
  }
})
</script>

<template>
  <section class="bg-blue-50 px-4 py-10">
    <div class="container-xl lg:container m-auto items-center">
      <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">Browse Jobs</h2>
      <div v-if="isLoading === true" class="justify-center flex text-gray-500 py-6 w-full">
        <PulseLoader />
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6" v-if="isLoading === false">
        <JobListingCard v-for="job in jobs.slice(0, limit || jobs.length)" :key="job.id" :job />
      </div>
    </div>
  </section>

  <section v-if="showButton" class="m-auto max-w-lg my-10 px-6">
    <RouterLink
      to="/jobs"
      class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
      >View All Jobs</RouterLink
    >
  </section>
</template>

<style scoped></style>
