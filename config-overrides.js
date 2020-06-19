// package.json中配置react-app-rewired start， react-app-rewired包在启动的时候回来加载这个文件
const {override, fixBabelImports} = require('customize-cra');

module.exports = override(
  // 针对antd实现按需打包：根据import来打包（使用babel-plugin-import）
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css', // 自动打包相关的样式
    // style: true
  }),

  // 配置app的主题（颜色，字体... 具体可查看ant-design-react官网）
  // addLessLoader({
  //   javascriptEnabled: true,
  //   modifyVars: {'@primary-color': '#1DA57A'},
  // }),
);

