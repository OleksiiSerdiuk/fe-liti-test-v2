import type { NuxtConfig } from '@nuxt/types'
import envNuxt from './src/app/nuxt-configs/env.nuxt'
import headNuxt from './src/app/nuxt-configs/head.nuxt'
import publicRuntimeConfigNuxt from './src/app/nuxt-configs/publicRuntimeConfig.nuxt'
import buildNuxt from './src/app/nuxt-configs/build.nuxt'
import vueNuxt from './src/app/nuxt-configs/vue.nuxt'
import axiosNuxt from './src/app/nuxt-configs/axios.nuxt'
import i18nNuxt from './src/app/nuxt-configs/i18n.nuxt'

const config: NuxtConfig = {
  target: 'static',

  dir: {
    pages: 'src/pages',
  },

  head: headNuxt(),

  css: ['@/assets/scss/styles.scss'],

  plugins: [
    { src: '~/plugins/vee-validate' },
  ],

  components: false,

  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/composition-api/module',
    '@pinia/nuxt',
  ],

  modules: ['@nuxtjs/axios', '@nuxtjs/i18n'],

  env: envNuxt(),

  publicRuntimeConfig: publicRuntimeConfigNuxt(),

  build: buildNuxt(),

  server: {
    port: 4002,
    host: '0.0.0.0',
    timing: false,
  },

  vue: vueNuxt(),

  axios: axiosNuxt(),

  i18n: i18nNuxt(),
}

export default config
