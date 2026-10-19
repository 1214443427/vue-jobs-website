<script setup lang="ts">
import Form from '@/components/Form.vue'
import router from '@/router'
import { ref } from 'vue'
import { useToast } from 'vue-toastification'

const form = ref({
  type: 'Full-Time',
  title: '',
  description: '',
  salary: '',
  location: '',
  company: {
    name: '',
    description: '',
    contactEmail: '',
    contactPhone: '',
  },
})

const toast = useToast()

const handleSubmit = async () => {
  const newJob = {
    ...form.value,
  }
  try {
    const response = await fetch('/api/jobs/', {
      method: 'POST',
      body: JSON.stringify(newJob),
    })
    const data = await response.json()
    toast.success('Job created successfully.', {
      timeout: 2000,
    })
    router.push(`/jobs/${data.id}`)
  } catch (error) {
    console.log(error)
    toast.error('Job creation failed!')
  }
}
</script>

<template>
  <section class="bg-green-50">
    <div class="container m-auto max-w-2xl py-24">
      <Form :handle-submit="handleSubmit" :form="form" type="Add" />
    </div>
  </section>
</template>

<style scoped></style>
