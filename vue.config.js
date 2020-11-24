module.exports = {
  // 配置scss全局引入的路径
  css: {
    loaderOptions: {
      sass: {
        // 根据自己样式文件的位置调整
        additionalData: '@import "@/style/exit.scss";'
      }
    }
  }
};
