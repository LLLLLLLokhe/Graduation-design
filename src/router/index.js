import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'


/**
 * @Description: 路由配置页面
 * @PageAuthor: rendc
 * @Date: 2019-12-19 09:39:06
 */
export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path*',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/register',
    component: () => import('@/views/register/index'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/auth-redirect'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/home', // 仪表盘页面
    children: [
      {
        path: 'home',
        component: () => import('@/pages/home/Home'),
        name: 'Dashboard',
        meta: { title: '首页', icon: 'dashboard', affix: true }
      }
    ]
  },

]

/**
 * @Description: 权限页面
 * @PageAuthor:  rendc
 * @Date: 2019-12-19 10:04:36
 */
export const asyncRoutes = [
  {
    // 一级
    path: '/example',
    component: Layout,
    redirect: '/example/list',
    name: 'Example',
    meta: {
      title: '数据展示',
      icon: 'example'
    },
    children: [
      {
        //二级
        path:'/historydata',
        component: () => import('@/pages/data/HistoryData/index.vue'),
        name:'historydata',
        meta:{title:'历史记录',icon:'edit'},
        children:[
          {
            path: 'rzjl',
            component: () => import('@/pages/data/HistoryData/日志记录.vue'),
            name: 'rzjl',
            meta: { title: '日志记录', icon: 'edit' }
          },
          {
            //三级
            path: 'keyboard',
            component: () => import('@/pages/data/HistoryData/温湿度.vue'),
            name: 'keyboard',
            meta: { title: '温湿度', icon: 'edit' }
          },
          {
            path: 'linemarker',
            component: () => import('@/pages/data/HistoryData/二氧化碳.vue'),
            name: 'linemarker',
            meta: { title: '二氧化碳', icon: 'edit' }
          },
          {
            path: 'mixchart',
            component: () => import('@/pages/data/HistoryData/烟雾可燃气.vue'),
            name: 'mixchart',
            meta: { title: '烟雾可燃气', icon: 'edit' }
          },
        ]
      },
      {
        path: '/showdata',
        component: () => import('@/pages/data/Show/index.vue'),
        name: 'showdata',
        meta: { title: '消防实时数据', icon: 'edit' }
      },
      {
        path: 'monitor',
        component: () => import('@/pages/data/Monitor'),
        name: 'monitor',
        meta: { title: '实时监控', icon: 'list' }
      },
      {
        path: 'video',
        component: () => import('@/pages/data/Video'),
        name: 'video',
        meta: { title: '录像信息', icon: 'list' }
      }
    ]
  },
  {
    path: '/message',
    component: Layout,
    redirect: '/message/list',
    name: 'message',
    meta: {
      title: '消息预警中心',
      icon: 'message'
    },
    children: [
      {
        path: 'message',
        component: () => import('@/pages/message/Message'),
        name: 'message',
        meta: { title: '预警消息展示', icon: 'edit' }
      },
      
    ]
  },
  {
    path: '/my',
    component: Layout,
    redirect: '/my/list',
    name: 'my',
    meta: {
      title: '个人中心',
      icon: 'my'
    },
    children: [
      {
        path: 'my',
        component: () => import('@/pages/my/My'),
        name: 'myArticle',
        meta: { title: '个人中心', icon: 'user' }
      },
      
    ]
  },
  // {
  //   path: '/demoOne',
  //   component: Layout,
  //   redirect: '/demoOne/list',
  //   name: 'demoOne',
  //   meta: {
  //     title: '示例1',
  //     icon: 'money'
  //   },
  //   children: [
  //     {
  //       path: 'demoOne123',
  //       component: () => import('@/pages/demoOne/demoOne123'),
  //       name: 'demoOne123',
  //       meta: { title: '示例1', icon: 'money' }
  //     },
      
  //   ]
  // },
  // {
  //   path: '/tab',
  //   component: Layout,
  //   redirect: '/tab/list',
  //   name: 'tab',
  //   meta: {
  //     title: '表格',
  //     icon: 'money'
  //   },
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/tab/index'),
  //       name: 'index',
  //       meta: { title: '表格', icon: 'table' }
  //     },
      
  //   ]
  // },
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
