import { defineStore } from 'pinia'
import type { IClub } from '~/types/clubes'

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
        modificarPuntaje(nombre: string, nuevoPuntaje: number) {
            const club = this.clubes.find(c => c.club === nombre)
            if (club) {
                club.puntaje = nuevoPuntaje
            }
            return this.getClubByName(nombre)?.puntaje
        },
        restarPuntaje(nombre: string): number | undefined {
            const club = this.clubes.find(c => c.club === nombre)
            if (club) {
              club.puntaje -= 50
            }
            return this.getClubByName(nombre)?.puntaje
          }
    }
})