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
                                {{ index + 1 }}.- {{ opcion.opcion }}
                            </div>
                        </div>
                    </div>
                    <section class="grid justify-items-end mb-4 cursor-pointer">
                        <button @click="siguientePregunta" 
                                :disabled="!habilitarBoton" 
                                :class="['bg-blue-500 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-blue-600 transition duration-300', { 'opacity-50 cursor-not-allowed': !habilitarBoton }]">
                            Siguiente pregunta
                        </button>
                    </section>
                </div>
            </div>
        </div>
    </main>
</template>
<script setup lang="ts">
import { ref, watch, computed, onMounted, defineEmits,defineProps } from 'vue'
import type { IPreguntasPorClub, IPregunta, IOpcionRespuesta } from '~/types/clubes'
import { usePreguntasPorClubStore } from '@/stores/usePreguntasPorClubStore'
import { usePreguntaNumeroStore } from '@/stores/usePreguntaNumeroStore'
import { useClubesStore } from '@/stores/useClubesStore'
import { useClubNumeroStore } from '@/stores/useClubNumeroStore'

const preguntasPorClubStore = usePreguntasPorClubStore()
const contadorStore = usePreguntaNumeroStore()
const contadorClubesStore = useClubNumeroStore()
const clubesStore = useClubesStore()
const emit = defineEmits(['pausarTemporizador', 'reiniciarTemporizador', 'reiniciarPreguntas'])
const props = defineProps<{ filtrarPreguntas: boolean }>()
// const { modificarPuntaje, restarPuntaje, getPuntosPorClub } = clubesStore

const opcionSeleccionada = ref<number | null>(null)
const habilitarBoton = ref<boolean>(false)
let calificacion = ref<number | undefined>(0)


const preguntasPorClub = preguntasPorClubStore.getAllPreguntasPorClub
const nombreClub = computed(() => preguntasPorClub.map((club: IPreguntasPorClub) => club.club)[contadorStore.getContador])
let preguntas = computed(() => {
  if(!props.filtrarPreguntas) {
    const pregunta = preguntasPorClub
    .map((club: IPreguntasPorClub) => club.preguntas)[contadorClubesStore.getContador][contadorStore.getContador];
  return pregunta as IPregunta;
  } else {
    const pregunta = preguntasPorClub
    .map((club: IPreguntasPorClub) => club.preguntas)[contadorClubesStore.getContador][contadorStore.getContador];
    const opcionesCorrectas = pregunta.opciones.filter(opcion => opcion.isCorrecta);
    const opcionesIncorrectas = pregunta.opciones.filter(opcion => !opcion.isCorrecta);
    const opcionIncorrecta = opcionesIncorrectas[Math.floor(Math.random() * opcionesIncorrectas.length)];

    // Crear un nuevo array con una opción correcta y una incorrecta
    const opcionesFiltradas = [opcionesCorrectas[0], opcionIncorrecta];
    return {
      pregunta: pregunta.pregunta,
      opciones: opcionesFiltradas
    };
  }
  
});

function seleccionarOpcion(index: number, respuesta: IOpcionRespuesta) {
  // Solo permite seleccionar una vez
  console.log("entre a seleccionar opcion")
  if (opcionSeleccionada.value === null) {
    opcionSeleccionada.value = index
    }
  console.log('Respuesta seleccionada:', respuesta.opcion)
  console.log('Respuesta correcta:', respuesta.isCorrecta)
  // debugger
  emit('pausarTemporizador')
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
const filtrarPreguntas5050 = computed(() => props.filtrarPreguntas);
onMounted(() => {
  // Reiniciar la opción seleccionada al cargar el componente
  opcionSeleccionada.value = null
  calificacion.value = clubesStore.getPuntosPorClub(nombreClub.value)
  console.log("todo el store de preguntas por club", preguntasPorClub)
  console.log("conjunto de preguntas", preguntas)
})
function siguientePregunta() {
    let contador = contadorClubesStore.getContador
  if (contador == 4) {
      contadorStore.incrementarContador()
      contadorClubesStore.reiniciarContador()
      opcionSeleccionada.value = null
      if(filtrarPreguntas5050.value){
        emit('reiniciarPreguntas')
      }
  } else {
    contadorClubesStore.incrementarContador()
    habilitarBoton.value = false
    opcionSeleccionada.value = null
    calificacion.value = clubesStore.getPuntosPorClub(nombreClub.value)
    if(filtrarPreguntas5050.value){
        emit('reiniciarPreguntas')
      }
  }
  emit('reiniciarTemporizador')
  console.log('Siguiente pregunta')
}
</script>