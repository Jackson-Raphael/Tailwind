// Documentation: https://router.vuejs.org/

import { createWebHistory, createRouter } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

import { BaseLayout } from '@/2-pages/layout'
import { HomePage } from '@/2-pages/home'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: BaseLayout,
    children: [
      {
        path: '',
        component: HomePage
      }
    ]
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})