import { defineConfig } from 'umi';
import px2rem from 'postcss-plugin-px2rem'

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/home/index' },
  ],
  alias: {
    assets: '/src/assets'
  },
  fastRefresh: {},
  extraPostCSSPlugins: [
    // px2rem({
    //   rootValue: 100, //开启hd后需要换算：rootValue=designWidth*100/750,此处设计稿为1920，所以1920*100/750=256
    //   propBlackList: ['border','border-top','border-left','border-right','border-bottom','border-radius','font-size'],//这些属性不需要转换
    //   selectorBlackList: ['t_npx']//以包含t_npx的class不需要转换
    // })
  ],
  dva: {},
  antd: {},
  title: '山'
});
