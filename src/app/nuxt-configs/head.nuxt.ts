// Global page headers: https://go.nuxtjs.dev/config-head
export default function () {
  return {
    htmlAttrs: {
      translate: 'no',
    },
    title: '#1 Video Chat',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'google',
        content: 'notranslate',
      },
      {
        name: 'viewport',
        content:
          'width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no',
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Test Description',
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:site_name',
        content: 'hiti.live',
      },
      {
        property: 'og:title',
        content: 'Hiti - #1 Video Chat to Meet New Friends',
      },
      {
        property: 'og:description',
        content: 'Test Description',
      },
      {
        property: 'og:url',
        content: 'https://hiti.live',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap',
      },
    ],
    script: [],
  }
}
