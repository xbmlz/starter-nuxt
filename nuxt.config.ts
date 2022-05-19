import { defineNuxtConfig } from "nuxt";

const lifecycle = process.env.npm_lifecycle_event;

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  // meta
  meta: {
    title: "Nuxt 3 + Element Plus + WindiCSS + Pinia",
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Nuxt 3 + Element Plus + WindiCSS + Pinia",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  //css
  css: ["~/assets/scss/index.scss"],
  // ts
  typescript: {
    strict: true,
    shim: false,
  },
  // build
  build: {
    transpile: lifecycle === "build" ? ["element-plus"] : [],
  },
  // build modules
  buildModules: ["nuxt-windicss", "@pinia/nuxt", "@vueuse/nuxt"],
  // vueuse
  vueuse: {
    ssrHandlers: true,
  },
  // auto import components
  components: true,
});
