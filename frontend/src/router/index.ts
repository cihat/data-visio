import { createRouter, createWebHistory } from 'vue-router'
import ChartEditor from '../views/ChartEditor.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'editor',
      component: ChartEditor
    },
  ]
})

export default router
