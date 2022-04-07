const routes = [
  {
    path: '/',
    component: '@/layouts/index',
    routes: [
      { path: '/', redirect: '/home' },
      { path: '/home', component: '@/pages/home/index', title: '首页' },
      { path: '/list', component: '@/pages/list/index', title: '列表' },
      { path: '/upload', component: '@/pages/upload/index', title: '上传' },
      { path: '/profile', component: '@/pages/profile/index', title: '我的' },
    ],
  },
  // { path: '/login', component: '@/pages/login/index' },
  // {
  //   path: '/user',
  //   component: '@/layouts/index',
  //   wrappers: [
  //     '@/wrappers'
  //   ],
  //   routes: [
  //     { path: '/user/admin', component: '@/pages/login/index' },
  //   ],
  // },
  // {
  //   path: '/detail', component: '@/pages/detail/index'
  // },
  { component: '@/pages/notFound' },
];
export default routes;
