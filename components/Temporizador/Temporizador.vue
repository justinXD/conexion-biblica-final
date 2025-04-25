<template>
    <div>
      <p class="text-xl font-bold">⏳ Tiempo restante: {{ tiempoRestante }} segundos</p>
      <button 
        @click="agregarTiempo" 
        class="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Agregar 15 segundos
      </button>
      <div>
        <GridPregunta />
      </div>
      
    </div>
  </template>
  
  <script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
// import { GridPregunta } from '@/components/GridPregunta/GridPregunta.vue'
  
  const tiempoInicial = 45
  const tiempoRestante = ref<number>(tiempoInicial)
  let intervalo: ReturnType<typeof setInterval> | null = null
  
  // Simula un retraso antes de iniciar el temporizador (por ejemplo, 2 segundos)
  onMounted(() => {
    setTimeout(() => {
      iniciarTemporizador()
    }, 2000)
  })
  
  function iniciarTemporizador() {
    if (intervalo) return // evitar múltiples intervalos
  
    intervalo = setInterval(() => {
      if (tiempoRestante.value > 0) {
        tiempoRestante.value--
      } else {
        detenerTemporizador()
      }
    }, 1000)
  }
  
  function agregarTiempo() {
    tiempoRestante.value += 15
  }
  
  function detenerTemporizador() {
    if (intervalo) {
      clearInterval(intervalo)
      intervalo = null
    }
  }
  </script>
  