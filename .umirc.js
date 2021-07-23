import path from 'path';
// ref: https://umijs.org/zh-CN/config
export default {
  alias: {
    config: path.resolve(__dirname, 'config.app'),
    utils: path.resolve(__dirname, 'src/utils'),
    services: path.resolve(__dirname, 'src/services'),
    components: path.resolve(__dirname, 'src/components'),
    assets: path.resolve(__dirname, 'src/assets'),
  },
  hash: true,
  history: { type: 'hash' },
  outputPath: './_dist',
  ignoreMomentLocale: true,
  antd: {},
  dva: { hmr: true },
  locale: {
    default: 'zh-CN',
    baseNavigator: true,
  },
};
