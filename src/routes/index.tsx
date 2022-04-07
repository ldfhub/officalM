const routes = [
  {
    path: '/',
    component: '@/layouts/index',
    routes: [
      { path: '/', redirect: '/home' },
      // { path: '/home', redirect: '/home/recommend' },
      {
        path: '/home', component: '@/pages/home/index',
      },
      { path: '/list', component: '@/pages/list/index' },
      { path: '/upload', component: '@/pages/upload/index' },
      { path: '/profile', component: '@/pages/profile/index' },
      // { path: '/musician', component: '@/pages/musician/index' },
      // { path: '/downClient', component: '@/pages/downClient/index' },
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
