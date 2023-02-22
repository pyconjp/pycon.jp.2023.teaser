export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: true,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'PyCon APAC 2023',
    htmlAttrs: {
      lang: 'ja',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'PyCon APACは、Pythonユーザが集まり、PythonやPythonを使ったソフトウェアについて情報交換、交流をするためのカンファレンスです。',
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'PyCon APAC 2023',
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://2023.pycon.jp' },
      { hid: 'og:title', property: 'og:title', content: 'PyCon APAC 2023' },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'PyCon APACは、Pythonユーザが集まり、PythonやPythonを使ったソフトウェアについて情報交換、交流をするためのカンファレンスです。',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://2023.pycon.jp/pyconjp2023_ogp.jpg',
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        hid: 'twitter:image:src',
        name: 'twitter:image:src',
        content: 'https://2023.pycon.jp/pyconjp2023_ogp.jpg',
      },
      {
        hid: 'twitter:site',
        name: 'twitter:site',
        content: '@pyconjapan',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/style.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@aceforth/nuxt-optimized-images',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['nuxt-i18n'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  googleFonts: {
    families: {
      Roboto: true,
      Oswald: true,
      'Noto Sans JP': true,
    },
    display: 'swap',
  },
  optimizedImages: {
    optimizeImages: true,
  },
}
