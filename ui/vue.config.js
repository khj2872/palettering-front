module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'https://reqres.in/api/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },

  lintOnSave: false
}