// Documentation: https://router.vuejs.org/

import { createWebHistory, createRouter } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

import { BaseLayout } from '@/2-pages/layout'
import { HomePage } from '@/2-pages/home'
import { AboutPage } from '@/2-pages/about'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: BaseLayout,
    children: [
      {
        path: '',
        component: HomePage
      },
      {
        path: 'about',
        component: AboutPage
      }
    ]
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})