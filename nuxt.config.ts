// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  plugins: ['~/plugins/vue-sweetalert2.ts'],
  modules: [
    '@pinia/nuxt',
    '@bootstrap-vue-next/nuxt',
    // 'vue-sweetalert2/nuxt',
  ],
})
