const { override, fixBabelImports, addWebpackAlias,useEslintRc } = require('customize-cra')
const path = require('path')
​
//重写配置
module.exports = override(
  // 配置路径别名
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src')
  }),
  // antd按需加载
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css'
  }),
  //启用eslintrc配置文件
  useEslintRc()
)