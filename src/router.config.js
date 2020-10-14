export default [
  // 重定向到首页 容错处理
  {
    path: '*',
    redirect: '/index'
  },
  // 看板首页
  {
    name: 'index',
    path: '/index',
    component: 'index'
  }
]
