// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    '@/assets/css/main.css',
    '@/assets/css/app.css',
  ],
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts'
  ],
  googleFonts: {
    families:{
      'Chakra+Petch':true,
      Lato: [100, 300],
      Raleway: {
        wght: [1,600],
        ital: [100]
      },
    }
  }
}
)
