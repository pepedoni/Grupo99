// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
      {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/Login.vue'),
      },
      {
        path: '/users',
        name: 'Users',
        component: () => import('@/views/Users.vue'),
      },
      {
        path: '/users/create',
        name: 'CreateUser',
        component: () => import('@/views/CreateUser.vue'),
      },
      {
        path: '/serviceOrders',
        name: 'ServiceOrders',
        component: () => import('@/views/ServiceOrders.vue'),
      },
      {
        path: '/pendingQuotes',
        name: 'PendingQuotes',
        component: () => import('@/views/PendingQuotes.vue'),
      },
      {
        path: '/serviceOrder/create',
        name: 'CreateServiceOrder',
        component: () => import('@/views/CreateServiceOrder.vue'),
      },
      {
        path: '/serviceOrder/:id',
        name: 'ServiceOrderDetails',
        component: () => import('@/views/ServiceOrderDetails.vue'),
      },
      {
        path: '/serviceOrder/:id/createQuote',
        name: 'CreateQuote',
        component: () => import('@/views/CreateQuote.vue'),
      }
    ],
  },
]

const router = createRouter({
  history: createWebHistory("http://localhost:3000"),
  routes,
})

export default router
