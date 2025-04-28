<template>
    <main>
        <div class="container mx-auto mt-4">
            <h1 class="text-2xl font-bold mb-4">Preguntas por Club</h1>
            <div v-if="preguntasPorClub.length > 0" class="bg-white shadow-md rounded-lg p-4">
                <div class="P-4">
                    <h2 class="text-xl font-semibold mb-4">{{ nombreClub }} - {{ calificacion }} puntos</h2>
                    <p class="text-lg font-medium mb-2">Pregunta:</p>
                    <p class="text-gray-800 mb-4">{{ preguntas.pregunta }}</p>
                    <p class="text-lg font-medium mb-2">Respuestas:</p>
                    <div class="grid grid-cols-2 gap-4 mb-4">
                        <div v-for="(opcion, index) in preguntas.opciones" :key="index" class="mb-2">
                            <div class="cursor-pointer border-2 rounded-lg p-4 transition-all duration-300 select-none"
                                :class="{
                                    'border-gray-300': opcionSeleccionada !== index,
                                    'border-green-500': opcionSeleccionada === index && opcion.isCorrecta,
                                    'border-red-500': opcionSeleccionada === index && !opcion.isCorrecta,
                                    'opacity-50 pointer-events-none': opcionSeleccionada !== null && opcionSeleccionada !== index
                                }"
                                @click="seleccionarOpcion(index, opcion)">
                                {{ index + 1 }}. {{ opcion.opcion }}
                            </div>
                        </div>
                    </div>
                    <section class="grid justify-items-end mb-4 cursor-pointer">
                        <button @click="siguientePregunta" 
                                :disabled="!habilitarBoton" 
                                :class="['bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300', { 'opacity-50 cursor-not-allowed': !habilitarBoton }]">
                            Siguiente pregunta
                        </button>
                    </section>
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
import { ref, watch, computed, onMounted } from 'vue'
import type { IPreguntasPorClub, IPregunta, IOpcionRespuesta } from '~/types/clubes'
import { usePreguntasPorClubStore } from '@/stores/usePreguntasPorClubStore'
import { useContadorStore } from '@/stores/useContadorStore'
import { useClubesStore } from '@/stores/useClubesStore'
import { useContadorClubesStore } from '@/stores/useContadorClubesStore'

const preguntasPorClubStore = usePreguntasPorClubStore()
const contadorStore = useContadorStore()
const contadorClubesStore = useContadorClubesStore()
const clubesStore = useClubesStore()
// const { modificarPuntaje, restarPuntaje, getPuntosPorClub } = clubesStore

const opcionSeleccionada = ref<number | null>(null)
const habilitarBoton = ref<boolean>(false)
let calificacion = ref<number | undefined>(0)


const preguntasPorClub = preguntasPorClubStore.getAllPreguntasPorClub
const nombreClub = computed(() => preguntasPorClub.map((club: IPreguntasPorClub) => club.club)[contadorStore.getContador])
const preguntas = computed(() => {
  const pregunta = preguntasPorClub
    .map((club: IPreguntasPorClub) => club.preguntas)
    .flat()[contadorClubesStore.getContador];
  return pregunta as IPregunta;
});

function seleccionarOpcion(index: number, respuesta: IOpcionRespuesta) {
  // Solo permite seleccionar una vez
  if (opcionSeleccionada.value === null) {
    opcionSeleccionada.value = index
    }
  console.log('Respuesta seleccionada:', respuesta.opcion)
  console.log('Respuesta correcta:', respuesta.isCorrecta)
    if (respuesta.isCorrecta) {
    console.log('calificacion anterior', calificacion.value)
    clubesStore.modificarPuntaje(nombreClub.value)
    calificacion.value = clubesStore.getPuntosPorClub(nombreClub.value)
    console.log('calificacion nueva', calificacion.value)
    console.log('Respuesta correcta')
  } else {
    clubesStore.restarPuntaje(nombreClub.value)
      calificacion.value = clubesStore.getPuntosPorClub(nombreClub.value)
      console.log('Respuesta incorrecta')
  }
    habilitarBoton.value = true
}
watch(nombreClub, (newNombreClub: string) => {
  // Reiniciar la opción seleccionada al cambiar de club
  calificacion.value = clubesStore.getPuntosPorClub(newNombreClub)
})
onMounted(() => {
  // Reiniciar la opción seleccionada al cargar el componente
  opcionSeleccionada.value = null
  calificacion.value = clubesStore.getPuntosPorClub(nombreClub.value)
})
function siguientePregunta() {
  // Aquí puedes implementar la lógica para cargar la siguiente pregunta
  // Por ejemplo, incrementar el contador y cargar la nueva pregunta
    //   contadorStore.incrementarContador()
    let contador = contadorClubesStore.getContador
  if (contador < 4) {
      contadorStore.incrementarContador()
      contadorClubesStore.reiniciarContador()
  } else {
    contadorClubesStore.incrementarContador()
    habilitarBoton.value = false
    opcionSeleccionada.value = null
    calificacion.value = clubesStore.getPuntosPorClub(nombreClub.value)
  }
  
}
</script>