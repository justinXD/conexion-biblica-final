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
        <button
          type="submit"
          :disabled="clubes.length >= 5 || !nuevoClub"
          class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50 cursor-pointer"
        >
          Registrar
        </button>
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
    import type { IClub } from '~/types/clubes'


    const nuevoClub = useState<string>('nuevoClub', () => '')
    const nuevoPuntaje = useState<number>('nuevoPuntaje', () => 0)

    const clubesStore = useClubesStore()
    const { registrarClub, clubes } = clubesStore

    function registrarClubes() {
    if (clubes.length >= 5) {
        alert('Ya se han registrado los 5 clubes permitidos.')
        return
    }

    if (nuevoClub.value.trim() !== '') {
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
    }
</script>
  