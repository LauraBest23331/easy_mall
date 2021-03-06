module.export = {
  configureWebpack: {
    resolve: {  
      alias: {
        "assets": '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'router': '@/router',
        'view': '@/views'
      }
    }
  }
}