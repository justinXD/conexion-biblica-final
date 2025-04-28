<template>
    <div class="p-4 bg-white rounded-2xl shadow-md">
      <h2 class="text-xl font-semibold mb-4">Registrar Club</h2>
  
      <form @submit.prevent="registrarClubes">
        <div class="mb-4">
          <label for="club" class="block text-sm font-medium text-gray-700 mb-1">
            Nombre del club
          </label>
          <input
            id="club"
            v-model="nuevoClub"
            type="text"
            placeholder="Ej. Club León"
            class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div class="mb-4">
          <label for="club" class="block text-sm font-medium text-gray-700 mb-1">
            Puntaje del club
          </label>
          <input
            id="club"
            v-model.number="nuevoPuntaje"
            type="text"
            placeholder="ej: 250"
            class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div class="grid grid-cols-2 gap-4">
          <button
            type="submit"
            :disabled="clubes.length >= 5"
            class="bg-green-1 text-gray-950 px-4 py-2 rounded-lg disabled:opacity-50 cursor-pointer"
          >
            Registrar
          </button>
          <NuxtLink
            to="/juego"
            @click="shuffle"
            :class="['bg-yellow-gold text-gray-950 px-4 py-2 rounded-lg cursor-pointer', { 'disabled:opacity-50 pointer-events-none': isDisabled }]"
            :tabindex="isDisabled ? -1 : 0"
          >
            Iniciar juego
          </NuxtLink>
        </div>
      </form>
  
      <div class="mt-6">
        <h3 class="text-lg font-medium mb-2">Clubes registrados ({{ clubes.length }}/5)</h3>
        <ul class="list-disc ml-5">
          <li v-for="club in clubes" :key="club.club" class="text-gray-800">
            {{ club.club }} - {{ club.puntaje }} pts
          </li>
        </ul>
      </div>
    </div>
  </template>
  
<script setup lang="ts">
    import { useClubesStore } from '@/stores/useClubesStore'
    import { usePreguntasPorClubStore } from '@/stores/usePreguntasPorClubStore';
    import type { IClub } from '~/types/clubes'
    import { ref, watch, onMounted } from 'vue';
    const { $swal } = useNuxtApp();


    const nuevoClub = useState<string>('nuevoClub', () => '')
    const nuevoPuntaje = useState<number>('nuevoPuntaje', () => 0)
    const isDisabled = ref<boolean>(true)

    const clubesStore = useClubesStore()
    const preguntasPorClubStore = usePreguntasPorClubStore()
    const { registrarClub, clubes, mezclarClubesYAsignarPreguntas } = clubesStore

    onMounted(() => {
      // Verificar si ya hay clubes registrados al cargar el componente
      if (clubes.length >= 5) {
        isDisabled.value = false
      }
    })
    function registrarClubes() {
      // Validar que el club no esté vacío y que el puntaje sea un número positivo
      if (nuevoClub.value.trim() !== '' && nuevoPuntaje.value >= 0) {
        // Crear el objeto del club a registrar
      const clubARegistrar: IClub = {
          club: nuevoClub.value,
          puntaje: nuevoPuntaje.value
      }
        // Verificar si el club ya existe
        console.log(clubARegistrar)
        registrarClub(clubARegistrar)
          nuevoClub.value = ''
          nuevoPuntaje.value = 0
      }
      else {
        $swal.fire({
          title: 'Error',
          text: 'Por favor, completa todos los campos correctamente.',
          icon: 'error',
          showCancelButton: false,
          confirmButtonText: 'Aceptar'
        })
      }
    }
    watch(clubes, (newValue: IClub[]) => {
        if (newValue.length >= 5) {
          mostrarAlerta()
          isDisabled.value = false
        }
    })
    function mostrarAlerta() {
        $swal.fire({
            title: 'Tope de clubes alcanzado',
            text: 'Ya se han registrado los 5 clubes permitidos.',
            icon: 'warning',
            showCancelButton: false,
            confirmButtonText: 'Aceptar'
        })
    }
    function shuffle() {
      mezclarClubesYAsignarPreguntas()
      console.log('Clubes mezclados y preguntas asignadas:', preguntasPorClubStore.getAllPreguntasPorClub)
    }
</script>
  