<template>
    <div class="container mx-auto mt-4">
        <h1 class="text-2xl font-bold mb-4">Preguntas por Club</h1>
        <div v-if="preguntasPorClub.length > 0" class="bg-white shadow-md rounded-lg p-4">
            <Temporizador />
        </div>
    </div>
</template>
<script setup lang="ts">
import type { IPreguntasPorClub } from '~/types/clubes'
import { usePreguntasPorClubStore } from '@/stores/usePreguntasPorClubStore'

const preguntasPorClubStore = usePreguntasPorClubStore()

const preguntasPorClub = preguntasPorClubStore.getAllPreguntasPorClub
const clubesAleatorios: string[] = preguntasPorClub.map((club: IPreguntasPorClub) => club.club)
</script>