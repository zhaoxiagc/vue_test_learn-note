/* const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
 */

//common js 暴露
module.exports = {
  pages: {
      index: {
          //入口
          entry: 'src/main.js',
      },
  },
  //关掉默认的语法检查
  lintOnSave: false,
  //开启代理服务器(方式一)
  /* devServer:{
      proxy: 'http://localhost:5000',
  } */
  //开启代理服务器(方式二)
  devServer: {
    proxy: {
      //当请求的前缀是api，直接转发请求到服务器5001端口
      '/atguigu': {
        target: 'http://localhost:5000',
        ws: true, //用于支持websocket
        changeOrigin: true, //用于控制请求头中host的值
        pathRewrite:{
            //把请求中含有的api替换成空字符串
            '^/atguigu': '',
        }
      },
      '/demo': {
        target: 'http://localhost:5001',
        ws: true, //用于支持websocket
        changeOrigin: true, //用于控制请求头中host的值
        pathRewrite:{
            //把请求中含有的api替换成空字符串
            '^/demo': '',
        }
      }
    }
  }
} 
