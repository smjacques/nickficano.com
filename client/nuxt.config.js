module.exports = {
  mode: 'universal',
  server: {
    port: 8080,
    host: '0.0.0.0'
  },
  head: {
    title: 'Top GitHub Python Engineer in NYC',
    titleTemplate: '%s | Nick Ficano',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  loading: { color: '#0e0d0a' },
  css: [
    {
      src: '~assets/scss/__init__.scss',
      lang: 'scss'
    }
  ],
  plugins: [
    { src: '@/plugins/ios-100vh.client.js' },
    { src: '@/plugins/vue-fullpage.client.js', ssr: false }
  ],
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/eslint-module',
    '@nuxtjs/markdownit',
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-13233758-1'
      }
    ]
  ],
  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: true,
    use: ['markdown-it-div', 'markdown-it-attrs']
  },
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    extend(config, ctx) {
      const svgRule = config.module.rules.find(rule => rule.test.test('.svg'))
      svgRule.test = /\.(png|jpe?g|gif|webp)$/
      config.module.rules.push({
        test: /\.svg$/,
        loader: 'vue-svg-loader'
      })
    }
  }
}
