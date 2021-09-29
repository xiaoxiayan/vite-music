module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://120.79.84.215:8080',
        secure: false,
        changeOrigin: true,
        logLevel: 'debug'
      },
      '/webStocket': {
        target: 'ws://120.79.84.215:8080', // 后端目标接口地址
        changeOrigin: true, // 是否允许跨域
        logLevel: 'debug',
        ws: true // 开启ws, 如果是http代理此处可以不用设置
      },
      '/aaa': {
        target: 'http://localhost:3000/',
        logLevel: 'debug',
        changeOrigin: true,
        pathRewrite: {
          '^/aaa': ''
        }
      }
    }
  }
}
