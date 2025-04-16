import { defineStore } from 'pinia'
// import axios from 'axios'
import api from '@/api/axiosConfig'
import type { Student } from '@/interfaces/students'

export const useStudentsStore = defineStore('students', {
  state: () => ({
    studentsList: [] as Student[],
    student: {} as Student,
    loading: false,
    error: null as string | null,
  }),
  getters: {
    getStudents: (state) => state.studentsList,
    getStudent: (state) => state.student,
  },
  actions: {
    async fetchStudents() {
      this.loading = true
      this.error = null
      try {
        const response = await api.get<Student[]>('/students')
        this.studentsList = response.data
      } catch (error) {
        console.error('Error fetching students:', error)
      } finally {
        this.loading = false
      }
    },
  },
})
