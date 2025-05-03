// stores/usePreguntasStore.ts
import { defineStore } from 'pinia'
import type { IPregunta } from '~/types/clubes'

export const usePreguntasStore = defineStore('preguntas', {
  state: () => ({ preguntas: [{
    pregunta: '¿Cuál es el océano más grande del mundo?',
    opciones: [
      { opcion: 'Atlántico', isCorrecta: false },
      { opcion: 'Índico', isCorrecta: false },
      { opcion: 'Ártico', isCorrecta: false },
      { opcion: 'Pacífico', isCorrecta: true }
    ]
  },
  {
    pregunta: '¿Qué planeta es conocido como el planeta rojo?',
    opciones: [
      { opcion: 'Júpiter', isCorrecta: false },
      { opcion: 'Marte', isCorrecta: true },
      { opcion: 'Saturno', isCorrecta: false },
      { opcion: 'Venus', isCorrecta: false }
    ]
  },
  {
    pregunta: '¿Quién escribió "Cien años de soledad"?',
    opciones: [
      { opcion: 'Mario Vargas Llosa', isCorrecta: false },
      { opcion: 'Gabriel García Márquez', isCorrecta: true },
      { opcion: 'Pablo Neruda', isCorrecta: false },
      { opcion: 'Jorge Luis Borges', isCorrecta: false }
    ]
  },
  {
    pregunta: '¿Cuál es la capital de Canadá?',
    opciones: [
      { opcion: 'Toronto', isCorrecta: false },
      { opcion: 'Ottawa', isCorrecta: true },
      { opcion: 'Vancouver', isCorrecta: false },
      { opcion: 'Montreal', isCorrecta: false }
    ]
  },
  {
    pregunta: '¿Cuál es el elemento químico con símbolo O?',
    opciones: [
      { opcion: 'Oro', isCorrecta: false },
      { opcion: 'Oxígeno', isCorrecta: true },
      { opcion: 'Osmio', isCorrecta: false },
      { opcion: 'Oganesón', isCorrecta: false }
    ]
  },
  {
    pregunta: '¿En qué continente se encuentra Egipto?',
    opciones: [
      { opcion: 'Asia', isCorrecta: false },
      { opcion: 'África', isCorrecta: true },
      { opcion: 'Europa', isCorrecta: false },
      { opcion: 'Oceanía', isCorrecta: false }
    ]
  },
  {
    pregunta: '¿Quién pintó la Mona Lisa?',
    opciones: [
      { opcion: 'Vincent van Gogh', isCorrecta: false },
      { opcion: 'Pablo Picasso', isCorrecta: false },
      { opcion: 'Leonardo da Vinci', isCorrecta: true },
      { opcion: 'Claude Monet', isCorrecta: false }
    ]
  },
  {
    pregunta: '¿Cuál es la fórmula química del agua?',
    opciones: [
      { opcion: 'CO2', isCorrecta: false },
      { opcion: 'H2O', isCorrecta: true },
      { opcion: 'NaCl', isCorrecta: false },
      { opcion: 'CH4', isCorrecta: false }
    ]
  },
  {
    pregunta: '¿Qué instrumento mide la presión atmosférica?',
    opciones: [
      { opcion: 'Termómetro', isCorrecta: false },
      { opcion: 'Barómetro', isCorrecta: true },
      { opcion: 'Altímetro', isCorrecta: false },
      { opcion: 'Anemómetro', isCorrecta: false }
    ]
  },
  {
    pregunta: '¿Cuál es el río más largo del mundo?',
    opciones: [
      { opcion: 'Amazonas', isCorrecta: true },
      { opcion: 'Nilo', isCorrecta: false },
      { opcion: 'Yangtsé', isCorrecta: false },
      { opcion: 'Misisipi', isCorrecta: false }
    ]
  },
  {
    pregunta: '¿En qué país nació el ajedrez?',
    opciones: [
      { opcion: 'India', isCorrecta: true },
      { opcion: 'China', isCorrecta: false },
      { opcion: 'Grecia', isCorrecta: false },
      { opcion: 'Persia', isCorrecta: false }
    ]
  },
  {
    pregunta: '¿Qué gas es necesario para la respiración humana?',
    opciones: [
      { opcion: 'Hidrógeno', isCorrecta: false },
      { opcion: 'Nitrógeno', isCorrecta: false },
      { opcion: 'Oxígeno', isCorrecta: true },
      { opcion: 'Dióxido de carbono', isCorrecta: false }
    ]
  },
  {
    pregunta: '¿Quién fue el primer hombre en pisar la Luna?',
    opciones: [
      { opcion: 'Buzz Aldrin', isCorrecta: false },
      { opcion: 'Neil Armstrong', isCorrecta: true },
      { opcion: 'Yuri Gagarin', isCorrecta: false },
      { opcion: 'Michael Collins', isCorrecta: false }
    ]
  },
  {
    pregunta: '¿Qué animal es el más grande del mundo?',
    opciones: [
      { opcion: 'Elefante africano', isCorrecta: false },
      { opcion: 'Ballena azul', isCorrecta: true },
      { opcion: 'Tiburón blanco', isCorrecta: false },
      { opcion: 'Jirafa', isCorrecta: false }
    ]
  },
  {
    pregunta: '¿Cuál es la capital de Japón?',
    opciones: [
      { opcion: 'Kioto', isCorrecta: false },
      { opcion: 'Tokio', isCorrecta: true },
      { opcion: 'Osaka', isCorrecta: false },
      { opcion: 'Nagoya', isCorrecta: false }
    ]
  },
  {
    pregunta: '¿Qué órgano del cuerpo humano bombea la sangre?',
    opciones: [
      { opcion: 'Pulmones', isCorrecta: false },
      { opcion: 'Cerebro', isCorrecta: false },
      { opcion: 'Corazón', isCorrecta: true },
      { opcion: 'Hígado', isCorrecta: false }
    ]
  },
  {
    pregunta: '¿Cuál es el país con más población del mundo?',
    opciones: [
      { opcion: 'India', isCorrecta: false },
      { opcion: 'Estados Unidos', isCorrecta: false },
      { opcion: 'China', isCorrecta: true },
      { opcion: 'Brasil', isCorrecta: false }
    ]
  },
  {
    pregunta: '¿Qué tipo de animal es una rana?',
    opciones: [
      { opcion: 'Reptil', isCorrecta: false },
      { opcion: 'Anfibio', isCorrecta: true },
      { opcion: 'Ave', isCorrecta: false },
      { opcion: 'Mamífero', isCorrecta: false }
    ]
  },
  {
    pregunta: '¿Cuál es el metal más ligero?',
    opciones: [
      { opcion: 'Aluminio', isCorrecta: false },
      { opcion: 'Litio', isCorrecta: true },
      { opcion: 'Plomo', isCorrecta: false },
      { opcion: 'Titanio', isCorrecta: false }
    ]
  },
  {
    pregunta: '¿En qué año terminó la Segunda Guerra Mundial?',
    opciones: [
      { opcion: '1944', isCorrecta: false },
      { opcion: '1945', isCorrecta: true },
      { opcion: '1939', isCorrecta: false },
      { opcion: '1946', isCorrecta: false }
    ]
  },
  {
    pregunta: '¿Qué día se celebra la Navidad?',
    opciones: [
      { opcion: '24 de diciembre', isCorrecta: false },
      { opcion: '25 de diciembre', isCorrecta: true },
      { opcion: '31 de diciembre', isCorrecta: false },
      { opcion: '1 de enero', isCorrecta: false }
    ]
  },
  {
    pregunta: '¿Qué número representa la letra "X" en números romanos?',
    opciones: [
      { opcion: '5', isCorrecta: false },
      { opcion: '10', isCorrecta: true },
      { opcion: '50', isCorrecta: false },
      { opcion: '100', isCorrecta: false }
    ]
  },
  {
    pregunta: '¿Qué científico formuló la teoría de la relatividad?',
    opciones: [
      { opcion: 'Isaac Newton', isCorrecta: false },
      { opcion: 'Albert Einstein', isCorrecta: true },
      { opcion: 'Galileo Galilei', isCorrecta: false },
      { opcion: 'Stephen Hawking', isCorrecta: false }
    ]
  },
  {
    pregunta: '¿Cuál es el idioma más hablado en el mundo?',
    opciones: [
      { opcion: 'Inglés', isCorrecta: false },
      { opcion: 'Mandarín', isCorrecta: true },
      { opcion: 'Español', isCorrecta: false },
      { opcion: 'Árabe', isCorrecta: false }
    ]
  },
  {
    pregunta: '¿Cuántos lados tiene un hexágono?',
    opciones: [
      { opcion: '6', isCorrecta: true },
      { opcion: '5', isCorrecta: false },
      { opcion: '7', isCorrecta: false },
      { opcion: '8', isCorrecta: false }
    ]
    }] as IPregunta[]
  }),
  getters: {
    getAllPreguntas(state): IPregunta[] {
      return state.preguntas
    }
  }
})
