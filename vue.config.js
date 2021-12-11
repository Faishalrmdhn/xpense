module.exports = {
  transpileDependencies: [
    'vuetify'
  ]
}

const vueConfig = {
  outputDir: 'build/',
  transpileDependencies: ['vuetify'],
  devServer: {
    port: 8080, // CHANGE PORT
    disableHostCheck: true
  },
  pwa: {
    name: 'xpense',
    themeColor: '#1976D2',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: '#1976D2',
    iconPaths: {
      favicon32: 'img/icons/favicon-32x32.png',
      favicon16: 'img/icons/favicon-16x16.png',
      appleTouchIcon: 'img/icons/apple-touch-icon-152x152.png',
      maskIcon: 'img/icons/safari-pinned-tab.svg',
      msTileImage: 'img/icons/msapplication-icon-144x144.png'
    },
    manifestOptions: {
      name: 'xpense',
      short_name: 'xpense',
      theme_color: '#1976D2',
      background_color: '#ffffff',
      start_url: '/',
      display: 'standalone',
      orientation: 'portrait',
      icons: [
        {
          src: 'img/icons/android-chrome-512x512.png',
          type: 'image/png',
          sizes: '512x512'
        }
      ]
    },
    workboxOptions:{
      skipWaiting: true,
      clientsClaim: true
    }
  },
  // configureWebpack: {
  //   devtool: 'source-map',
  //   plugins: [
  //     new webpack.ProvidePlugin({
  //       'window.Quill': 'quill'
  //     }),
  //     new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /id/),
  //   ],
  //   resolve: {
  //     alias: {
  //       'Assets': path.resolve(__dirname, './src/assets'),
  //       'Helper': path.resolve(__dirname, './src/helper'),
  //       'Components': path.resolve(__dirname, './src/components'),
  //       'Views': path.resolve(__dirname, './src/views'),
  //       'Api': path.resolve(__dirname, './src/api'),
  //       'Config': path.resolve(__dirname, './src/config'),
  //       'Utilities': path.resolve(__dirname, './src/utilities'),
  //       'Router': path.resolve(__dirname, './src/router'),
  //       'Store': path.resolve(__dirname, './src/store'),
  //       'Mock': path.resolve(__dirname, './src/utilities/mock'),
  //       'Plugins': path.resolve(__dirname, './src/plugins') 
  //     }
  //   }
  // }
}

module.exports = vueConfig