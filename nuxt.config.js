module.exports = {
  // Headers of the page
  head: {
    title: 'template',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'template for Rivera Web Solutions' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
    ]
  },
  plugins: ['~/plugins/vuetify.js', '~/plugins/lightbox.js'],
  css: ['~/assets/style/app.styl'],
  modules: ['@nuxtjs/axios', '@nuxtjs/pwa'],
  // Customize the progress bar color
  loading: { color: '#3B8070' },
  //Build configuration
  build: {
    /* Run ESLint on save
    extend (config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
    */
  },
  serverMiddleware: [
    '~/api/gallery',
    '~/api/mail',
  ]
  /*
  axios: {
    baseURL: process.env.BASE_URL,
    browserBaseURL: process.env.BASE_URL,
    https: true
  }
  */
}
