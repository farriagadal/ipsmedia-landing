import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Thanks from './views/Thanks.vue'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/thanks',
    component: Thanks
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router