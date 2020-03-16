import MainView from '@/views/MainView.vue'
import LoginView from '@/views/LoginView.vue'

export const routes = [{
    path: '/',
    redirect: {
      name: 'login'
    }
  },
  {
    path: '/main',
    name: "main",
    component: MainView
  },
  {
    path: '/login',
    name: "login",
    component: LoginView
  }
]