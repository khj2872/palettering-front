import MainView from '@/views/main/MainView.vue'
import LoginView from '@/views/login/LoginView.vue'

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