import tailwindcss from "@tailwindcss/vite";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  modules: ["@nuxtjs/google-fonts", "@nuxtjs/color-mode", "@nuxt/icon"],

  googleFonts: {
    families: {
      Geist: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      "Geist Mono": [100, 200, 300, 400, 500, 600, 700, 800, 900],
      Aldrich: true,
    },
    display: "swap",
    preconnect: true,
    prefetch: false,
  },
  colorMode: {
    preference: "light",
    fallback: "light",
    classSuffix: "",
  },
  runtimeConfig: {
    baserowApiToken: "",
  },
});