// 로그인 전
import LoginView from '@/views/login/LoginView.vue'
// 로그인 후
import MainView from '@/views/main/MainView.vue'

// 브라우저 제한 및 주소 제한
import NotFound from '@/views/NotFound.vue';
import BrowserLimit from '@/views/BrowserLimit.vue';

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
  },

  {
    path: '/limit',
    name: 'browserLimit',
    component: BrowserLimit
  },
  {
    path: '*',
    name: 'notFound',
    component: NotFound
  }
]