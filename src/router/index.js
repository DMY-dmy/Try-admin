import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout/Layout';
Vue.use(Router)

export const routerMap = [

  {
    path: '/login', 
    component: () => import('@/views/login/index'), 
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: 'Dashboard',
    hidden: true,
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/dashboard')
      },
    ]
  },
  {
    path: '/user',
    component: Layout,
    meta:{title:'用户管理',icon:'resourceBase'},
    children: [
      {
        path: '/user/all',
        name: 'all',
        component: () => import('@/views/user/all'),
        meta: { title: '所有用户', icon: 'resourceBase', roles: ['/user/all'] }
      },
      {
        path: '/user/active',
        name: 'active',
        component: () => import('@/views/user/active'),
        meta: { title: '活跃用户', icon: 'resourceBase', roles: ['/user/active'] }
      },
    ]
  },
  {
    path: '/admin',
    component: Layout,
    meta:{title:'后台管理',icon:'resourceBase'},
    children: [
      {
        path: '/admin/member',
        name: 'member',
        component: () => import('@/views/admin/member'),
        meta: { title: '成员管理', icon: 'resourceBase', roles: ['/admin/member'] }
      },
      {
        path: '/admin/authority',
        name: 'authority',
        component: () => import('@/views/admin/authority'),
        meta: { title: '权限管理', icon: 'resourceBase', roles: ['/admin/authority'] }
      },
    ]
  },
  {
    path: '/goods',
    component: Layout,
    meta:{title:'商品管理',icon:'resourceBase'},
    children: [
      {
        path: '/goods/product',
        name: 'product',
        component: () => import('@/views/goods/product'),
        meta: { title: '产品管理', icon: 'resourceBase', roles: ['/goods/product'] }
      },
      {
        path: '/goods/order',
        name: 'order',
        component: () => import('@/views/goods/order'),
        meta: { title: '订单管理', icon: 'resourceBase', roles: ['/goods/order'] }
      },
    ]
  },
  {
    path: '/message',
    component: Layout,
    meta:{title:'消息管理',icon:'resourceBase'},
    children: [
      {
        path: '/message/report',
        name: 'report',
        component: () => import('@/views/message/report'),
        meta: { title: '举报管理', icon: 'resourceBase', roles: ['/message/report'] }
      },
      {
        path: '/message/information',
        name: 'information',
        component: () => import('@/views/message/information'),
        meta: { title: '信息反馈', icon: 'resourceBase', roles: ['/message/information'] }
      },
    ]
  },
  {
    path: '/system',
    component: Layout,
    meta:{title:'系统设置',icon:'resourceBase'},
    children: [
      {
        path: '/system/rotation',
        name: 'rotation',
        component: () => import('@/views/system/rotation'),
        meta: { title: '轮播设置', icon: 'resourceBase', roles: ['/system/rotation'] }
      },
      {
        path: '/system/update',
        name: 'update',
        component: () => import('@/views/system/update'),
        meta: { title: '系统更新', icon: 'resourceBase', roles: ['/system/update'] }
      },
    ]
  },
  // {path: '/404', component: () => import('@/views/other/404'), hidden: true},
];




const createRouter = () => new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: routerMap
})

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher
}

export default router
