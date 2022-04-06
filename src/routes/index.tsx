const routes = [
  {
    path: '/',
    component: '@/layouts/index',
    routes: [
      { path: '/', redirect: '/home' },
      // { path: '/home', redirect: '/home/recommend' },
      {
        path: '/home',
        component: '@/pages/home/index',
        // routes: [
        //   { path: '/home/recommend', component: '@/pages/home/recommend' },
        //   { path: '/home/rank', component: '@/pages/home/rankList' },
        //   { path: '/home/songlist', component: '@/pages/home/songList' },
        //   { path: '/home/anchor', component: '@/pages/home/anchor' },
        //   { path: '/home/singer', component: '@/pages/home/singer' },
        //   { path: '/home/newput', component: '@/pages/home/newPut' },
        // ],
      },
      // { path: '/mymusic', component: '@/pages/myMusic/index' },
      // { path: '/friend', component: '@/pages/friend/index' },
      // { path: '/shop', component: '@/pages/shop/index' },
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
  // { component: '@/pages/notFound' },
];
export default routes;
