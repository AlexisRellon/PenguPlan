// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from 'url';

export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/color-mode',
    '@nuxt/fonts',
    '@pinia/nuxt',
    '@nuxtjs/supabase',
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    '@vite-pwa/nuxt'
  ],
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  },
  alias: {
    '@': fileURLToPath(new URL('.', import.meta.url)),
    '~': fileURLToPath(new URL('.', import.meta.url))
  },
  runtimeConfig: {
    public: {
      supabase: {
        url: process.env.SUPABASE_URL,
        key: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
      }
    }
  },
  css: ['~/assets/css/main.css']
})
