<template>
    <div class="container mx-auto mt-4">
        <h1 class="text-2xl font-bold mb-4">Preguntas por Club</h1>
        <div v-if="preguntasPorClub.length > 0" class="bg-white shadow-md rounded-lg p-4">
            <Temporizador />
            <!-- <ul class="list-disc pl-5">
                <li v-for="(pregunta, index) in clubesAleatorios" :key="index" class="mb-2">
                    {{ pregunta }}
                </li>
            </ul> -->
        </div>
        <!-- <div v-else class="bg-white shadow-md rounded-lg p-4">
            <p>No hay preguntas registradas para el club.</p>
        </div> -->
    </div>
</template>
<script setup lang="ts">
import type { IPreguntasPorClub } from '~/types/clubes'
import { usePreguntasPorClubStore } from '@/stores/usePreguntasPorClubStore'

const preguntasPorClubStore = usePreguntasPorClubStore()

const preguntasPorClub = preguntasPorClubStore.getAllPreguntasPorClub
const clubesAleatorios: string[] = preguntasPorClub.map((club: IPreguntasPorClub) => club.club)
/*
vamos a imprimir primero el orden el que van a participar los clubes
luego hay que agregar un boton para iniciar el juego y que se imprima la pregunta con sus posibles respuestas (crear un nuevo componente para eso)
 */
</script>