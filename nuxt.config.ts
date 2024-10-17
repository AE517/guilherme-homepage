// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-icon', '@nuxtjs/mdc', '@nuxt/image'],

  image: {
    inject: true
  },

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }],
      htmlAttrs: {
        lang: 'en',
      },
    },
    // layoutTransition: {
    //   name: 'layout',
    //   mode: 'out-in',
    // },
  },

  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  compatibilityDate: '2024-10-17',
});
