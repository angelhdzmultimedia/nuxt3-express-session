// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: false,
  modules: ['h3-session/nuxt'],
  session: {
    secret: 'keyboard cats',
    resave: true,
    saveUninitialized: true,
    cookie: { secure: false },
  },
})
