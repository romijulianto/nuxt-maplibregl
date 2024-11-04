export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  runtimeConfig: {
    apiSecret: process.env.NUXT_API_SECRET,
    public: {
      apiBase: "",
      urlMapLibre: process.env.NUXT_URL_MAPLIBRE,
    },
  },
  css: ["maplibre-gl/dist/maplibre-gl.css"],
});
