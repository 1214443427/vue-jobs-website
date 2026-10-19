<script setup lang="ts">
import Form from '@/components/Form.vue'
import router from '@/router'
import { useJobStore } from '@/stores/job'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const jobId = route.params.id
const jobStore = useJobStore()
const job = ref(jobStore.selectedJob)

onMounted(async () => {
  if (job.value != null) {
    return
  }
  try {
    const response = await fetch(`/api/jobs/${jobId}`)
    console.log(response)
    const data = await response.json()
    job.value = data
  } catch (error) {
    console.log(error)
  }
})

async function handleSubmit() {
  if (job.value === null) {
    return
  }
  try {
    const response = await fetch(`/api/jobs/${jobId}`, {
      method: 'PUT',
      body: JSON.stringify(job.value),
    })
    router.push(`/jobs/${jobId}`)
  } catch (error) {
    console.log(error)
  }
}
</script>

<template>
  <section class="bg-green-50">
    <div class="container m-auto max-w-2xl py-24">
      <Form v-if="job" :type="`Edit`" :form="job" :handle-submit="handleSubmit" />
    </div>
  </section>
</template>

<style scoped></style>
