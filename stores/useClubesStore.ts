import { defineStore } from 'pinia'
import type { IClub, IPreguntasPorClub } from '~/types/clubes'
import { usePreguntasStore } from './usePreguntasStore'
import { usePreguntasPorClubStore } from './usePreguntasPorClubStore'
const preguntasPorClubStore = usePreguntasPorClubStore()
const preguntasStore = usePreguntasStore()
// const { setPreguntasPorClub } = preguntasPorClubStore

function shuffleArray<T>(array: T[]): T[] {
    return [...array].sort(() => Math.random() - 0.5)
  }
export const useClubesStore = defineStore('clubes', {
    state: () => ({ clubes: [] as IClub[] }),
    getters: {
        getAllClubes(state): IClub[] {
            return state.clubes
        },
        getClubByName: (state) => (nombre: string): IClub | undefined => {
            return state.clubes.find(c => c.club === nombre)
          }
    },
    actions: {
        registrarClub(nuevoClub: IClub) {
            const existe = this.clubes.find(c => c.club === nuevoClub.club)
            if (!existe) {
                const club: IClub = { 'club': nuevoClub.club, puntaje: nuevoClub.puntaje }
                this.clubes.push(club)
            }
        },
        modificarPuntaje(nombre: string) {
            const club = this.clubes.find(c => c.club === nombre)
            if (club) {
                club.puntaje += 100
            }
            return this.getClubByName(nombre)?.puntaje
        },
        restarPuntaje(nombre: string): number | undefined {
            const club = this.clubes.find(c => c.club === nombre)
            if (club) {
              club.puntaje -= 50
            }
            return this.getClubByName(nombre)?.puntaje
      },
      getPuntosPorClub(nombre: string): number | undefined {
        const club = this.clubes.find(c => c.club === nombre)
        if (club) {
          return club.puntaje
        }
      },
        mezclarClubesYAsignarPreguntas() {
            // const preguntasPorClubStore = usePreguntasPorClubStore()
        
            const clubesDesordenados = this.getAllClubes
            const preguntasDisponibles = shuffleArray(preguntasStore.getAllPreguntas)
            
          console.log('clubes: ', clubesDesordenados)
          console.log('preguntas: ',preguntasDisponibles)
        
            if (preguntasDisponibles.length < clubesDesordenados.length * 5) {
              throw new Error('No hay suficientes preguntas para asignar a los clubes.')
            }
        
            const resultado: IPreguntasPorClub[] = clubesDesordenados.map((club, index) => {
              const preguntasAsignadas = preguntasDisponibles.slice(index * 5, (index + 1) * 5)
              return {
                club: club.club,
                puntaje: club.puntaje,
                preguntas: preguntasAsignadas
              }
            })
            preguntasPorClubStore.setPreguntasPorClub(resultado)
        }
    }
})