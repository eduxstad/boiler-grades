module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    proxy: {
      '/api': {
        target: 'https://www.boilergrades.com',
        secure: false,
      },
    },
  }
}
