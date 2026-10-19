import type { Job } from '@/type'
import { defineStore } from 'pinia'

export const useJobStore = defineStore('job', {
  state: (): { selectedJob: Job | null } => ({
    selectedJob: null,
  }),
  actions: {
    setSelectedJob(job: Job) {
      this.selectedJob = job
    },
  },
})
