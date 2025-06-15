import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

import Layout from '@/layout/index.vue'

const routes: RouteRecordRaw[] = [
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
          icon: 'dashboard',
          affix: true
        }
      }
    ]
  }
]

export default createRouter({
  history: createWebHistory(), // 路由模式
  routes // 路由表
})
