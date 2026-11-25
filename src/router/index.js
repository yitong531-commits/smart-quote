
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/LoginView.vue'),
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../views/DashboardView.vue'),
  },
  {
    path: '/products',
    name: 'Products',
    component: () => import('../views/ProductsView.vue'),
  },
  {
    path: '/quotes/new',
    name: 'QuoteCalculator',
    component: () => import('../views/QuoteCalculatorView.vue'),
  },
  {
    path: '/quotes',
    name: 'Quotes',
    component: () => import('../views/QuotesView.vue'),
  },
  {
    path: '/quotes/:quoteId',
    name: 'QuoteDetail',
    component: () => import('../views/QuoteDetailView.vue'),
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import('../views/SettingsView.vue'),
  },
  {
    path: '/',
    redirect: '/dashboard',
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
