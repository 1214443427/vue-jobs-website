<script setup lang="ts">
import type { Job } from '@/type'
import { MapMarker } from '@primeicons/vue'
import { computed, ref } from 'vue'

//   {
//     "id": 1,
//     "title": "Senior Vue Developer",
//     "type": "Full-Time",
//     "description": "We are seeking a talented Front-End Developer to join our team in Boston, MA. The ideal candidate will have strong skills in HTML, CSS, and JavaScript, with experience working with modern JavaScript frameworks such as Vue or Angular.",
//     "location": "Boston, MA",
//     "salary": "$70K - $80K",
//     "company": {
//       "name": "NewTek Solutions",
//       "description": "NewTek Solutions is a leading technology company specializing in web development and digital solutions. We pride ourselves on delivering high-quality products and services to our clients while fostering a collaborative and innovative work environment.",
//       "contactEmail": "contact@teksolutions.com",
//       "contactPhone": "555-555-5555"
//     }
//   },

const props = defineProps<{ job: Job }>()

const showFullDescription = ref(false)

const toggleDescription = () => {
  showFullDescription.value = !showFullDescription.value
}

const truncatedDescription = computed(() => {
  let description = props.job.description
  if (!showFullDescription.value) {
    description = description.substring(0, 90) + '...'
  }
  return description
})
</script>

<template>
  <div class="bg-white rounded-xl shadow-md relative">
    <div class="p-4">
      <div class="mb-6">
        <div class="text-gray-600 my-2">{{ job.type }}</div>
        <h3 class="text-xl font-bold">{{ job.title }}</h3>
      </div>

      <div class="mb-5">
        <p>{{ truncatedDescription }}</p>
        <button @click="toggleDescription" class="text-gray-400 hover:text-black cursor-pointer">
          {{ showFullDescription ? 'hide' : 'show more' }}
        </button>
      </div>
      <h3 class="text-green-500 mb-2">{{ job.salary }} / Year</h3>

      <div class="border border-gray-100 mb-5"></div>

      <div class="flex flex-col lg:flex-row justify-between mb-4">
        <div class="text-orange-700 mb-3 flex">
          <MapMarker class="w-5 h-5 text-orange-500" />
          {{ job.location }}
        </div>
        <RouterLink
          :to="`/jobs/${job.id}`"
          class="h-[36px] bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-center text-sm"
        >
          Read More
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
