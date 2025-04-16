<template>
  <div class="container mx-auto py-8">
    <h1 class="text-2xl font-bold mb-4">Lista de Asistentes</h1>

    <div v-if="studentsStore.loading" class="text-center text-gray-500">
      Cargando estudiantes...
    </div>
    <div v-else-if="studentsStore.error" class="text-red-500 mb-4">
      {{ studentsStore.error }}
    </div>
    <div v-else-if="studentsStore.studentsList.length > 0">
      <table class="min-w-full bg-white shadow-md rounded-lg">
        <thead class="bg-gray-100">
          <tr>
            <th class="py-2 px-4 text-left font-semibold text-gray-700">ID</th>
            <th class="py-2 px-4 text-left font-semibold text-gray-700">Nombre</th>
            <th class="py-2 px-4 text-left font-semibold text-gray-700">Apellido</th>
            <th class="py-2 px-4 text-left font-semibold text-gray-700">Email</th>
            <th class="py-2 px-4 text-left font-semibold text-gray-700">Ficha</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="student in studentsStore.studentsList" :key="student.id">
            <td class="py-2 px-4 border-b text-emerald-900">{{ student.id }}</td>
            <td class="py-2 px-4 border-b text-emerald-900">{{ student.name }}</td>
            <td class="py-2 px-4 border-b text-emerald-900">{{ student.last_name }}</td>
            <td class="py-2 px-4 border-b text-emerald-900">{{ student.email }}</td>
            <td class="py-2 px-4 border-b text-emerald-900">{{ student.student_record }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else class="text-center text-gray-500">
      No hay estudiantes registrados para este evento.
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useStudentsStore } from '@/stores/students'

const studentsStore = useStudentsStore()

onMounted(() => {
  studentsStore.fetchStudents()
})
</script>

<style scoped>
/* Estilos específicos del componente si es necesario */
</style>
