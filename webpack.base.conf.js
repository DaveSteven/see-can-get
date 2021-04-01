/**
 * 文件别名配置，兼容 webstorm 和 intellij idea 代码跳转
 */

module.exports = {
  resolve: {
    alias: {
      '@': require('path').resolve(__dirname, 'src'), // eslint-disable-line
    }
  }
};
