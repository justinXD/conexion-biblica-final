// stores/usePreguntasStore.ts
import { defineStore } from 'pinia'
import type { IPregunta } from '~/types/clubes'

export const usePreguntasStore = defineStore('preguntas', {
  state: () => ({ preguntas: [{
    pregunta: '¿Qué señal dio el ángel a Zacarías por no creer su mensaje? ',
    opciones: [
      { opcion: 'Quedó ciego', isCorrecta: false },
      { opcion: 'Quedó mudo', isCorrecta: true },
      { opcion: 'Quedó paralítico', isCorrecta: false },
      { opcion: 'No recibió ninguna señal', isCorrecta: false }
    ]
  },
  {
    pregunta: '¿Quién era el emperador cuando nació Jesús?',
    opciones: [
      { opcion: 'César Augusto', isCorrecta: true },
      { opcion: 'Herodes el Grande', isCorrecta: false },
      { opcion: 'Tiberio', isCorrecta: false },
      { opcion: 'Poncio Pilato', isCorrecta: false }
    ]
  },
  {
    pregunta: '¿Qué sucedió cuando Jesús fue bautizado?',
    opciones: [
      { opcion: 'Hubo un terremoto', isCorrecta: false },
      { opcion: 'Se abrió el cielo y el Espíritu Santo descendió como paloma', isCorrecta: true },
      { opcion: 'Pablo Neruda', isCorrecta: false },
      { opcion: 'Cayó fuego del cielo', isCorrecta: false }
    ]
  },
  {
    pregunta: '¿En qué ciudad predicó Jesús por primera vez después del desierto?',
    opciones: [
      { opcion: 'Nazaret', isCorrecta: true },
      { opcion: 'Jerusalén', isCorrecta: false },
      { opcion: 'Cafarnaúm', isCorrecta: false },
      { opcion: 'Belén', isCorrecta: false }
    ]
  },
  {
    pregunta: '¿Quién ordenó el censo que obligó a José y María a viajar a Belén?',
    opciones: [
      { opcion: 'Herodes el Grande', isCorrecta: false },
      { opcion: 'César Augusto', isCorrecta: true },
      { opcion: 'Poncio Pilato', isCorrecta: false },
      { opcion: 'Tiberio', isCorrecta: false }
    ]
  },
  {
    pregunta: '¿De qué linaje descendía José, lo que justificaba su viaje a Belén?',
    opciones: [
      { opcion: 'De la tribu de Leví', isCorrecta: true },
      { opcion: 'De la casa de David', isCorrecta: false },
      { opcion: 'De la familia de Aarón', isCorrecta: false },
      { opcion: 'De la tribu de Benjamín', isCorrecta: false }
    ]
  },
  {
    pregunta: '¿Qué ofrenda presentaron José y María en el templo por Jesús?',
    opciones: [
      { opcion: 'Un cordero y una paloma', isCorrecta: false },
      { opcion: 'Dos tórtolas', isCorrecta: true },
      { opcion: 'Incienso y mirra', isCorrecta: false },
      { opcion: 'Oro y plata', isCorrecta: false }
    ]
  },
  {
    pregunta: '¿Qué le había sido revelado a Simeón antes de ver a Jesús?',
    opciones: [
      { opcion: 'Que moriría antes de la llegada del Mesías', isCorrecta: false },
      { opcion: 'Que no moriría sin antes ver al Cristo del Señor', isCorrecta: true },
      { opcion: 'Que Jesús sería un poderoso rey en la Tierra', isCorrecta: false },
      { opcion: 'Que debía anunciar la venida del Mesías a todo el pueblo', isCorrecta: false }
    ]
  },
  {
    pregunta: '¿Quién era la profetisa que también reconoció a Jesús en el templo y hablaba de Él a todos los que esperaban la redención de Jerusalén?',
    opciones: [
      { opcion: 'Marta', isCorrecta: false },
      { opcion: 'Ana', isCorrecta: true },
      { opcion: 'Elisabet', isCorrecta: false },
      { opcion: 'Débora', isCorrecta: false }
    ]
  },
  {
    pregunta: '¿Qué profecía de Isaías fue cumplida cuando Jesús leyó en la sinagoga de Nazaret?',
    opciones: [
      { opcion: 'El Mesías será un rey poderoso', isCorrecta: false },
      { opcion: 'El Espíritu del Señor está sobre mí, por cuanto me ha ungido para dar buenas nuevas a los pobres', isCorrecta: true },
      { opcion: 'El Salvador nacerá en Belén', isCorrecta: false },
      { opcion: 'Los ciegos verán y los sordos oirán', isCorrecta: false }
    ]
  },
  {
    pregunta: '¿Cuál es el primer lugar donde se menciona el "evangelio" en el libro de Lucas?',
    opciones: [
      { opcion: 'En la predicación de Juan el Bautista', isCorrecta: false },
      { opcion: 'En el mensaje de Jesús en la sinagoga de Nazaret', isCorrecta: true },
      { opcion: 'En la región de Gadarea', isCorrecta: false },
      { opcion: 'En el bautismo de Jesús', isCorrecta: false }
    ]
  },
  {
    pregunta: 'Según Lucas 4:14, ¿cómo comenzó Jesús su ministerio después de haber vencido las tentaciones en el desierto? ',
    opciones: [
      { opcion: 'Se fue a Jerusalén', isCorrecta: false },
      { opcion: 'Volvió en el poder del Espíritu', isCorrecta: true },
      { opcion: 'Se quedó en Nazaret', isCorrecta: false },
      { opcion: 'Comenzó a predicar en Roma', isCorrecta: false }
    ]
  },
  {
    pregunta: 'En Lucas 1:35, cuando el ángel Gabriel le habla a María, menciona que el Hijo que ella tendrá será llamado de una manera especial. ¿Cómo lo llama el ángel?',
    opciones: [
      { opcion: 'Hijo del Hombre', isCorrecta: false },
      { opcion: 'Rey de los Judíos', isCorrecta: false },
      { opcion: 'Hijo de Dios', isCorrecta: true },
      { opcion: 'El Mesías prometido', isCorrecta: false }
    ]
  },
  {
    pregunta: '¿Cuál es la tercera tentación que registra Lucas?',
    opciones: [
      { opcion: 'Convertir las piedras en pan', isCorrecta: false },
      { opcion: 'Arrojarse del templo', isCorrecta: true },
      { opcion: 'Adorar a satanas', isCorrecta: false },
      { opcion: 'Hacer un Milagro', isCorrecta: false }
    ]
  },
  {
    pregunta: '¿Que le dijo un leproso a Jesús en Lucas cap. 4?',
    opciones: [
      { opcion: 'Quiero ser sanado Señor', isCorrecta: false },
      { opcion: 'Señor, si quieres puedes limpiarme', isCorrecta: true },
      { opcion: 'Limpiame, Señor', isCorrecta: false },
      { opcion: 'Ayudame, Señor', isCorrecta: false }
    ]
  },
  {
    pregunta: '¿En qué ciudad Jesús resucitó al hijo de una viuda segun Lucas cap. 7?',
    opciones: [
      { opcion: 'Nazaret', isCorrecta: false },
      { opcion: 'capernaum', isCorrecta: false },
      { opcion: 'Naín', isCorrecta: true },
      { opcion: 'judá', isCorrecta: false }
    ]
  },
  {
    pregunta: '¿En casa de quien comió Jesús cuando fue ungido con aceite?',
    opciones: [
      { opcion: 'Pedro', isCorrecta: false },
      { opcion: 'Mateo', isCorrecta: false },
      { opcion: 'Simon', isCorrecta: true },
      { opcion: 'Marta', isCorrecta: false }
    ]
  },
  {
    pregunta: '¿Por qué jesús escogio a pescadores para ser sus discipulos?',
    opciones: [
      { opcion: 'Por ser humildes', isCorrecta: false },
      { opcion: 'Por ser enseñables', isCorrecta: false },
      { opcion: 'Por ser vigorosos', isCorrecta: false },
      { opcion: 'Por ser humildes y susceptibles de ser enseñados', isCorrecta: true }
    ]
  },
  {
    pregunta: '¿Con queadjetivo describio Dios al rico insensato?',
    opciones: [
      { opcion: 'Tonto', isCorrecta: false },
      { opcion: 'Necio', isCorrecta: true },
      { opcion: 'Habil', isCorrecta: false },
      { opcion: 'Estupido', isCorrecta: false }
    ]
  },
  {
    pregunta: '¿Desde hace cuantos años una mujer tenia un espiritu de enfermedas al momento de ser sanada por jesus en una sinagoga?',
    opciones: [
      { opcion: '12 años', isCorrecta: false },
      { opcion: '15 años', isCorrecta: false },
      { opcion: '18 años', isCorrecta: true },
      { opcion: '20 años', isCorrecta: false }
    ]
  },
  {
    pregunta: '¿Cuantas parabolas se cuentan en lucas cap 15?',
    opciones: [
      { opcion: '2', isCorrecta: false },
      { opcion: '3', isCorrecta: true },
      { opcion: '4', isCorrecta: false },
      { opcion: '5', isCorrecta: false }
    ]
  },
  {
    pregunta: '¿Cuántos hermanos tenia el rico en la parabola del rico y Lazaro?',
    opciones: [
      { opcion: '5', isCorrecta: true },
      { opcion: '6', isCorrecta: false },
      { opcion: '4', isCorrecta: false },
      { opcion: '2', isCorrecta: false }
    ]
  },
  {
    pregunta: '¿Que señal iba a dar Judas para señalar a Jesus?',
    opciones: [
      { opcion: 'Lo iba a abrazar', isCorrecta: false },
      { opcion: 'Le daria la mano', isCorrecta: true },
      { opcion: 'Lo señalaria con el dedo', isCorrecta: false },
      { opcion: 'Lo iba a besar', isCorrecta: false }
    ]
  },
  {
    pregunta: '¿Ante quien se presento primero Jesus despues de su arresto?',
    opciones: [
      { opcion: 'Poncio pilato', isCorrecta: false },
      { opcion: 'Ancianos, sacerdotes y escribas', isCorrecta: true },
      { opcion: 'Herodes', isCorrecta: false },
      { opcion: 'Los ancianos', isCorrecta: false }
    ]
  },
  {
    pregunta: '¿A que hora murio Jesús?',
    opciones: [
      { opcion: 'Hora sexta', isCorrecta: true },
      { opcion: 'Hora novena', isCorrecta: false },
      { opcion: 'Hora doceaba', isCorrecta: false },
      { opcion: 'Hora undecima', isCorrecta: false }
    ]
    }] as IPregunta[]
  }),
  getters: {
    getAllPreguntas(state): IPregunta[] {
      return state.preguntas
    }
  }
})
