module.exports = {
  publicPath: `/${process.env.VUE_APP_CONTEXT}`,
  assetsDir: process.env.VUE_APP_ASSETS,
  runtimeCompiler: true,
  // 默认babel-loader会忽略node_modules中的文件

  // 用于开发环境下与后端联调
  devServer: {
    proxy: {
      '^/edv/ui/h5/v1/': {
        target: 'http://10.19.171.20:17380',
        // target: 'http://10.19.171.20:18429',
        changeOrigin: true
      },
      '^/edv/(api|ui)': {
        target: 'http://10.19.171.20:17380',
        // target: 'http://10.19.171.20:18429',
        changeOrigin: true
      }
    }
  },

  pages: {
    index: './src/main.js'
  },

  // 这里是为了解决历史问题 以前的h5迁移过来的时候 带了一堆的这种引入
  chainWebpack: config => {
    config.plugins.delete('preload')
    const oneOfsMap = config.module.rule('scss').oneOfs.store
    oneOfsMap.forEach(item => {
      item
        .use('sass-resources-loader')
        .loader('sass-resources-loader')
        .options({
          // Provide path to the file with resources
          resources: ['./src/style/index.scss', './src/style/font/font.scss']
        })
        .end()
    })
  },

  // webpack配置节点
  configureWebpack: {},
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        import: [
          './src/theme'
        ]
      },
      less: {
        modifyVars: {
          // 直接覆盖变量
          'dropdown-menu-title-active-text-color': '#0EA469',
          'dropdown-menu-option-active-color': '#0EA469'
        }
      }
    }
  },

  pluginOptions: {
    'hui-mobile': {
      postCompile: true,
      theme: true
    }
  }
}
