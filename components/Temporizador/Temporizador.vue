<template>
    <div>
      <p class="text-xl font-bold">⏳ Tiempo restante: {{ tiempoRestante }} segundos</p>
      <button 
        @click="eliminarComodinPreguntaEquipo"
        :disabled="!habilitarBotonPreguntaEquipo"
        :class="['mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition', { 'opacity-50 cursor-not-allowed': !habilitarBotonPreguntaEquipo }]"
      >
        preguntale a tu equipo
      </button>
      <button
        @click="eliminarPreguntas"
        :disabled="!habilitarBoton5050"
        :class="['mt-4 ml-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition', { 'opacity-50 cursor-not-allowed': !habilitarBoton5050 }]"
        >
        50/50
      </button>
      <div>
        <GridPregunta @pausar-temporizador="detenerTemporizador"
                      @reiniciar-temporizador="reiniciarTemporizador"
                      @reiniciar-preguntas="reiniciarPreguntas"
                      :filtrar-preguntas="!hablitarpreguntas"/>
      </div>
      
    </div>
  </template>
  
  <script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { usePreguntaNumeroStore } from '@/stores/usePreguntaNumeroStore'
  
  const tiempoInicial = 45
  const tiempoRestante = ref<number>(tiempoInicial)
  const habilitarBotonPreguntaEquipo = ref<boolean>(true)
  const habilitarBoton5050 = ref<boolean>(true)
  const hablitarpreguntas = ref<boolean>(true)
  let intervalo: ReturnType<typeof setInterval> | null = null
  const contadorStore = usePreguntaNumeroStore()
  const contador = ref<number>(0)
  // Simula un retraso antes de iniciar el temporizador (por ejemplo, 2 segundos)
  onMounted(() => {
    setTimeout(() => {
      iniciarTemporizador()
    }, 5000)
  })
  watch(contador, (nuevoContador) => {
    console.log('Contador actualizado:', nuevoContador)
    if (nuevoContador === 5) {
      habilitarBotonPreguntaEquipo.value = true
      habilitarBoton5050.value = true
      hablitarpreguntas.value = true
      contador.value = 0 // Reinicia el contador después de 5 preguntas
    }
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
  function eliminarComodinPreguntaEquipo() {
    habilitarBotonPreguntaEquipo.value = false
    agregarTiempo()
  }
  function detenerTemporizador() {
    if (intervalo) {
      clearInterval(intervalo)
      intervalo = null
    }
  }
  function reiniciarTemporizador() {
    tiempoRestante.value = tiempoInicial
    contador.value++
    setTimeout(() => {
      iniciarTemporizador()
    }, 5000)
  }
  function eliminarPreguntas(){
    // Lógica para eliminar preguntas incorrectas
    habilitarBoton5050.value = false
    hablitarpreguntas.value = false
    agregarTiempo()
  }
  function reiniciarPreguntas() {
    hablitarpreguntas.value = true
  }
  </script>
  