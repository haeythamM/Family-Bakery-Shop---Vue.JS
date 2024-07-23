import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import FullMenuView from '../views/FullMenuView.vue';
import NotFound from '../views/NotFound.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import( '../views/AboutView.vue')
  },
  {
    path: '/gallery',
    name: 'gallery',
    
    component: () => import( '../views/GalleryView.vue')
  },
  {
    path: '/categories',
    name: 'categories',
    
    component: () => import('../views/CategoriesView.vue')
  },
  {
    path: '/full-menu',
    name: 'full-menu',
    
    component: FullMenuView
  },
  {
    path: '/contact',
    name: 'contact',
    
    component: () => import('../views/ContactView.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
