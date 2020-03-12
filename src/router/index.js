import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'top',
      component: ()=>import('@/admin/index/top.vue'),
      children:[
        {
          path: '/home',
          name: 'home',
          component: ()=>import('@/admin/index/home.vue')
        },
        {
          path: '/admin',
          name: 'admin',
          component: ()=>import('@/admin/admin/admin.vue')
        },
        {
          path: '/storeHome',
          name: 'storeHome',
          component: ()=>import('@/admin/shopping/storeHome.vue')
        },
        {
          path: '/fitmentHome',
          name: 'fitmentHome',
          component: ()=>import('@/admin/decorationCompany/fitmentHome.vue')
        },
        {
          path: '/WeChatHome',
          name: 'WeChatHome',
          component: ()=>import('@/admin/WeChat/WeChatHome.vue')
        }
      ]
    },
    {
      path: '/register',
      name: 'register',
      component: ()=>import('@/admin/login/register.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: ()=>import('@/admin/login/Login.vue')
    },
    {
      // 会匹配所有路径
      path: '*',
      component: ()=>import('@/admin/error/404.vue')
    }
  ]
})
