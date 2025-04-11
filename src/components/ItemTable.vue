<template>
  <div class="p-6 bg-[#181818] min-h-screen">
    <h1 class="text-3xl font-bold text-center text-[hsla(160,100%,37%,1)] mb-6">Item Management</h1>
    <div class="flex justify-end">
      <button
        @click="addItem"
        class="bg-[hsla(160,100%,37%,1)] hover:bg-[hsla(160,100%,47%,1)] text-white font-semibold py-2 px-4 rounded shadow-md transition duration-300"
      >
        Add Item
      </button>
    </div>
    <div class="overflow-x-auto">
      <table class="min-w-full bg-[#282828] rounded-lg shadow-md">
        <thead>
          <tr
            class="bg-[hsla(160,100%,27%,1)] text-[hsla(160,100%,37%,1)] uppercase text-sm leading-normal"
          >
            <th class="py-3 px-6 text-left">Name</th>
            <th class="py-3 px-6 text-left">Description</th>
            <th class="py-3 px-6 text-left">Price</th>
            <th class="py-3 px-6 text-center">Actions</th>
          </tr>
        </thead>
        <tbody class="text-[hsla(160,100%,37%,1)] text-sm">
          <tr
            v-for="item in items"
            :key="item.id"
            class="border-b border-[hsla(160,100%,27%,1)] hover:bg-[hsla(160,100%,17%,1)]"
          >
            <td class="py-3 px-6 text-left">{{ item.name }}</td>
            <td class="py-3 px-6 text-left">{{ item.description }}</td>
            <td class="py-3 px-6 text-left">{{ item.price }}</td>
            <td class="py-3 px-6 text-center">
              <button
                @click="editItem(item.id)"
                class="bg-[hsla(160,100%,47%,1)] hover:bg-[hsla(160,100%,57%,1)] text-white font-semibold py-1 px-3 rounded shadow-md transition duration-300 mr-2"
              >
                Edit
              </button>
              <button
                @click="deleteItem(item.id)"
                class="bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-3 rounded shadow-md transition duration-300"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="flex justify-start mt-4">
        <button
          @click="$router.push('/')"
          class="bg-[hsla(160,100%,37%,1)] hover:bg-[hsla(160,100%,47%,1)] text-white font-semibold py-2 px-4 rounded shadow-md transition duration-300"
        >
          Back to Home
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

console.log(import.meta.env.VITE_MODE)

const apiUrl =
  import.meta.env.VITE_MODE == 'PROD'
    ? import.meta.env.VITE_API_URL_PROD
    : import.meta.env.VITE_API_URL_DEV

console.log('API URL:', apiUrl)

export default {
  data() {
    return {
      items: [],
      apiUrl: apiUrl,
    }
  },
  mounted() {
    this.fetchItems()
  },
  methods: {
    async fetchItems() {
      try {
        const response = await axios.get(this.apiUrl)
        this.items = response.data
      } catch (error) {
        console.error('Error fetching items:', error)
      }
    },
    addItem() {
      // Lógica para agregar un nuevo item
    },
    editItem(id) {
      // Lógica para editar un item
    },
    deleteItem(id) {
      // Lógica para eliminar un item
    },
  },
}
</script>

<style scoped>
/* Puedes agregar estilos adicionales aquí si es necesario */
</style>
