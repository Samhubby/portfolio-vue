import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import BlogPostView from '@/views/BlogPostView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/blog/:slug',
    name: 'BlogPost',
    component: BlogPostView,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
