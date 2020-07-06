module.exports = {
    devServer: {
      proxy: {
        '/api': {
          ws: false,
          target: 'http://localhost:3456',
          changeOrigin: true,
          pathRewrite: {
            '^/api': ''
          }
        },
      }
    }
  }