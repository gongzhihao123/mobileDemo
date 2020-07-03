const path = require('path')
// const CompressionPlugin = require('compression-webpack-plugin')
// const productionGzipExtensions = ['js', 'css']
// require("babel-polyfill");
function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: './', // 默认为'/'
  // 将构建好的文件输出到哪里，本司要求
  outputDir: 'dist/static',
  // 放置生成的静态资源(js、css、img、fonts)的目录。
  assetsDir: 'static',
  // 指定生成的 index.html 的输出路径
  indexPath: 'index.html',
  // 是否使用包含运行时编译器的 Vue 构建版本。
  runtimeCompiler: false,
  transpileDependencies: [],
  // 如果你不需要生产环境的 source map
  productionSourceMap: false,
  // 配置css
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: true,
    sourceMap: true,
    // css预设器配置项
    // loaderOptions: {
    //   postcss: {
    //     plugins: [
    //       require('postcss-pxtorem')({ // 这里是配置项，详见官方文档
    //         rootValue: 16, // 结果为：设计稿元素尺寸/16，比如元素宽320px,最终页面会换算成 20rem
    //         propList: ['*']
    //       })
    //     ]
    //   }
    // },
    // 启用 CSS modules for all css / pre-processor files.
    requireModuleExtension: false
  },
  // 是一个函数，允许对内部的 webpack 配置进行更细粒度的修改。
  chainWebpack: (config) => {
    // 配置别名
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
      .set('views', resolve('src/views'))
    config.optimization.minimizer('terser').tap((args) => {
      // 去除生产环境console
      args[0].terserOptions.compress.drop_console = true
      return args
    })
  },
  devServer: {
    host: '0.0.0.0',
    port: 8088, // 端口号
    https: false, // https:{type:Boolean}
    open: false, // 配置自动启动浏览器  open: 'Google Chrome'-默认启动谷歌
    // 配置多个代理
    proxy: {
      '/repair-portal': {
        target: 'https://www.meetyuu.com/repair-master-api',
        ws: true, // 代理的WebSockets
        changeOrigin: true, // 允许websockets跨域
        pathRewrite: {
          '^/repair-portal': ''
        }
      }
    }
  }
}
