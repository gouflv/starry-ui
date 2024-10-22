import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/editor',
      component: () => import('../views/theme-editor/index.vue')
    },
    {
      path: '',
      redirect: '/editor'
    }
  ]
})

export default router
