import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/home/Home.vue'
import Page1 from '../pages/page1/Page1.vue'
import Page2 from '../pages/page2/Page2.vue'

const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/page1',
      name: 'page1',
      component: Page1
    },
    {
      path: '/page2',
      name: 'page2',
      component: Page2
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/'
    }
  ]
})

export default router