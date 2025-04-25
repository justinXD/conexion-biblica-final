<template>
    <main>
        <div class="container mx-auto mt-4">
            <h1 class="text-2xl font-bold mb-4">Preguntas por Club</h1>
            <div v-if="preguntasPorClub.length > 0" class="bg-white shadow-md rounded-lg p-4">
                <div>
                    <h2 class="text-xl font-semibold mb-4">Club: {{ nombreClub }}</h2>
                    <p class="text-lg font-medium mb-2">Pregunta:</p>
                    <p class="text-gray-800 mb-4">{{ preguntas.pregunta }}</p>
                    <p class="text-lg font-medium mb-2">Respuestas:</p>
                    <ul class="list-disc pl-5">
                        <li v-for="(opcion, index) in preguntas.opciones" :key="index" class="mb-2">
                            {{ opcion }}
                        </li>
                    </ul>
                </div>
                <!-- <ul class="list-disc pl-5">
                    <li v-for="(pregunta, index) in preguntas" :key="index" class="mb-2">
                        {{ pregunta }}
                    </li>
                </ul> -->
            </div>
        <!-- <div v-else class="bg-white shadow-md rounded-lg p-4">
            <p>No hay preguntas registradas para el club.</p>
        </div> -->
        </div>
    </main>
</template>
<script setup lang="ts">
import type { IPreguntasPorClub, IPregunta } from '~/types/clubes'
import { usePreguntasPorClubStore } from '@/stores/usePreguntasPorClubStore'
import { useContadorStore } from '@/stores/useContadorStore'
import { useContadorClubesStore } from '@/stores/useContadorClubesStore'

const preguntasPorClubStore = usePreguntasPorClubStore()
const contadorStore = useContadorStore()
const contadorClubesStore = useContadorClubesStore()
const preguntasPorClub = preguntasPorClubStore.getAllPreguntasPorClub
const nombreClub: string = preguntasPorClub.map((club: IPreguntasPorClub) => club.club)[contadorStore.getContador]
const preguntas: IPregunta = preguntasPorClub.map((club: IPreguntasPorClub) => club.preguntas).flat()[contadorClubesStore.getContador]
</script>