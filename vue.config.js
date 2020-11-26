module.exports = {
  // 配置scss全局引入的路径
  devServer: {
    proxy: {
      '/api': {
        target: `http://api.vikingship.xyz/api/`,
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api/': ''
        }
      }
    }
  },

  css: {
    loaderOptions: {
      sass: {
        // 根据自己样式文件的位置调整
        additionalData: '@import "@/style/exit.scss";'
      }
    }
  }
};
