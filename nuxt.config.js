module.exports = {
  router: {
    base: '/chartz/'
  },
  css: [
    'node_modules/the-grid-flexbox/css/the-grid.min.css'
  ],
  head: {
    title: 'Chartz',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, minimum-scale=1, maximum-scale=1, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Chartz intro' },
      { name: 'author', content: 'gustavoquinalha' },
      { name: 'robots', content: 'index/follow' },
      { name: 'googlebot', content: 'index/follow' },
      // google+
      { itemprop: 'name', content: 'Chartz' },
      { itemprop: 'description', content: 'Description Chartz' },
      { itemprop: 'image', content: 'https://gustavoquinalha.github.io/chartz/intro.png' },
      // facebook
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'Chartz' },
      { property: 'og:url', content: 'https://gustavoquinalha.github.io/chartz/' },
      { property: 'og:site_name', content: 'Chartz' },
      { property: 'og:image', content: 'https://gustavoquinalha.github.io/chartz/intro.png' },
      { property: 'og:description', content: 'Description Chartz' },
      { property: 'og:locale', content: 'pt_Br' },
      { property: 'fb:app_id', content: '122670998365518' },
      { property: 'fb:admins', content: '111111' },
      // twitter
      { name: 'twitter:card', content: 'Summary' },
      { name: 'twitter:title', content: 'Chartz' },
      { name: 'twitter:description', content: 'Chartz' },
      { name: 'twitter:creator', content: 'gustavoquinalha' },
      { name: 'twitter:image', content: 'https://gustavoquinalha.github.io/chartz/intro.png' },
      // android
      { name: 'msapplication-TileColor', content: '#000000' },
      { name: 'msapplication-TileImage', content: '/ms-icon-144x144.png' },
      { name: 'theme-color', content: '#000000' }
    ],
    link: [
      { rel: 'sitemap', type: 'application/xml', content: 'https://gustavoquinalha.github.io/chartz/sitemap.xml' },
      { rel: 'manifest', href: '/manifest.json' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      { rel: 'apple-touch-icon', sizes: '57x57', href: '/icons/apple-icon-57x57.png' },
      { rel: 'apple-touch-icon', sizes: '60x60', href: '/icons/apple-icon-60x60.png' },
      { rel: 'apple-touch-icon', sizes: '72x72', href: '/icons/apple-icon-72x72.png' },
      { rel: 'apple-touch-icon', sizes: '76x76', href: '/icons/apple-icon-76x76.png' },
      { rel: 'apple-touch-icon', sizes: '114x114', href: '/icons/apple-icon-114x114.png' },
      { rel: 'apple-touch-icon', sizes: '120x120', href: '/icons/apple-icon-120x120.png' },
      { rel: 'apple-touch-icon', sizes: '144x144', href: '/icons/apple-icon-144x144.png' },
      { rel: 'apple-touch-icon', sizes: '152x152', href: '/icons/apple-icon-152x152.png' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/icons/apple-icon-180x180.png' },
      { rel: 'base', href: 'https://gustavoquinalha.github.io/chartz/' },
      { rel: 'canonical', href: 'https://gustavoquinalha.github.io/chartz/' }
    ],
    script: [{
      src: 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/highlight.min.js'
    }]
  },

  loading: { color: '#00ce8c', height: '5px' },

  plugins: [
    { src: '~plugins/highlights.js', ssr: false }
  ],

  build: {

  }
}
