<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div
    style="
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
      text-align: center;
    "
  >
    <h1 style="font-size: 3rem; color: #4caf50; margin-bottom: 1rem">
      Bienvenido al Sistema de Información ADSO 2025
    </h1>
    <RouterLink
      to="/items"
      style="
        padding: 1rem 2rem;
        font-size: 1.2rem;
        color: white;
        background-color: #4caf50;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        text-decoration: none;
      "
    >
      Mostrar Datos
    </RouterLink>
  </div>
  <RouterView />
</template>
