import { defineStore } from 'pinia'

export const useContadorStore = defineStore('contador', {
    state: () => ({ contador: 0 }),
    getters: {
        getContador(state): number {
            return state.contador
        }
    },
    actions: {
        incrementarContador() {
            this.contador++
        },
        reiniciarContador() {
            this.contador = 0
        }
    }
})