// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  css: [
    '~/assets/css/variables.css',
    '~/assets/css/base.css',
    '~/assets/css/animations.css',
    '~/assets/css/responsive.css',
  ],

  app: {
    head: {
      htmlAttrs: { lang: 'fr' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
      title: 'Portfolio — Développeur Full Stack',
      meta: [
        { name: 'description', content: 'Portfolio de développeur Full Stack — Projets, compétences et expériences en développement web moderne.' },
        { name: 'author', content: 'Développeur Full Stack' },
        { name: 'theme-color', content: '#0a0a1a' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Portfolio — Développeur Full Stack' },
        { property: 'og:description', content: 'Découvrez mes projets, compétences et expériences en développement web.' },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Calistoga&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Space+Grotesk:wght@300..700&display=swap'
        }
      ],
    },
  },
})
