import { defineConfig } from 'umi';
import routes from './src/routes';
import postcssPx2ViewPort from 'postcss-px-to-viewport';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes,
  alias: {
    assets: '/src/assets',
  },
  fastRefresh: {},
  extraPostCSSPlugins: [
    postcssPx2ViewPort({
      unitToConvert: 'px', // 要转化的单位
      viewportWidth: 375, // UI设计稿的宽度
      propList: ['*'], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
      unitPrecision: 6, // 转换后的精度，即小数点位数
      viewportUnit: 'vw', // 指定需要转换成的视窗单位，默认vw
      fontViewportUnit: 'vw', // 指定字体需要转换成的视窗单位，默认vw
      selectorBlackList: ['#root'],
      minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
      mediaQuery: false, // 是否在媒体查询的css代码中也进行转换，默认false
      replace: true, // 是否转换后直接更换属性值
    }),
  ],
  antdMobile: {},
  dva: {},
  title: '山',
});
