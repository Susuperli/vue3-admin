import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

import Layout from '@/layout/index.vue'

export const constantsRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/views/dashboard/index.vue'),
        meta: {
          title: 'Dashboard',
          icon: 'ant-design:bank-outlined',
          affix: true
        }
      }
    ]
  }
]

const asyncRoutes: RouteRecordRaw[] = [
  {
    path: '/xxx',
    component: Layout,
    meta: {
      hidden: true
    }
  },
  {
    path: '/documentation',
    component: Layout,
    redirect: '/documentation/index',
    children: [
      {
        path: 'index',
        name: 'Documentation',
        component: () => import('@/views/documentation/index.vue'),
        meta: {
          title: 'Documentation',
          icon: 'ant-design:book-outlined'
        }
      }
    ]
  },
  {
    path: '/guide',
    component: Layout,
    redirect: '/guide/index',
    children: [
      {
        path: 'index',
        name: 'guide',
        component: () => import('@/views/guide/index.vue'),
        meta: {
          title: 'Guide',
          icon: 'ant-design:question-circle-outlined'
        }
      }
    ]
  },
  {
    path: '/system',
    component: Layout,
    redirect: '/system/menu',
    meta: {
      title: 'System',
      icon: 'ant-design:setting-outlined',
      // 父级菜单，有子级菜单时，将不会被渲染
      alwaysShow: true
    },
    children: [
      {
        path: 'menu',
        name: 'menu',
        component: () => import('@/views/system/menu.vue'),
        meta: {
          title: 'Menu',
          icon: 'ant-design:menu-outlined'
        }
      },
      {
        path: 'role',
        name: 'role',
        component: () => import('@/views/system/role.vue'),
        meta: {
          title: 'Role',
          icon: 'ant-design:expand-outlined'
        }
      },
      {
        path: 'user',
        name: 'user',
        component: () => import('@/views/system/user.vue'),
        meta: {
          title: 'User',
          icon: 'ant-design:user-outlined'
        }
      }
    ]
  },
  {
    path: '/external-link',
    component: Layout,
    children: [
      {
        path: 'https://www.baidu.com',
        redirect: '/',
        meta: {
          title: 'link baidu',
          icon: 'ant-design:link-outlined'
        }
      }
    ]
  }
]

export const routes = [...constantsRoutes, ...asyncRoutes]

export default createRouter({
  history: createWebHistory(), // 路由模式
  routes // 路由表
})
