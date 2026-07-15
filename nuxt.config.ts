// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: 'Cuentas Claras · Gestoría ONAT en La Habana',
      htmlAttrs: { lang: 'es' },
      meta: [
        { name: 'description', content: 'Gestoría ONAT para TCP, MIPYMES y emprendimientos en La Habana. Organizo tus impuestos y tus cuentas para que tú te dediques a tu negocio.' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap' },
      ],
    },
  },
})
