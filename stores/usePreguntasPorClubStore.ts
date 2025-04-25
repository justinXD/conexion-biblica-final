// stores/usePreguntasPorClubStore.ts
import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { IPreguntasPorClub } from '~/types/clubes'

export const usePreguntasPorClubStore = defineStore('preguntasPorClub', {
  // const preguntasPorClub = ref<IPreguntasPorClub[]>([]),
  state: () => ({ preguntasPorClub: [] as IPreguntasPorClub[] }),
  getters: {
    getAllPreguntasPorClub(state): IPreguntasPorClub[] {
      return state.preguntasPorClub
    }
  },
  actions: {
    setPreguntasPorClub(preguntasPorClub: IPreguntasPorClub[]) {
        this.preguntasPorClub = preguntasPorClub
    }
  }

  // return {
  //   preguntasPorClub
  // }
})
