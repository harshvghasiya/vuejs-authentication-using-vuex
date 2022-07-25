import { createRouter, createWebHistory } from 'vue-router'
import RegisterComponent from '../components/RegisterComponent.vue'
import LoginComponent from '../components/LoginComponent.vue'
import ProfileComponent from '../components/ProfileComponent.vue'

const routes = [
  {
    path: '/register',
    name: 'register',
    component: RegisterComponent
  },
  {
    path: '/login',
    name: 'login',
    component: LoginComponent
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileComponent
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
