// 로그인 전
import LoginView from '@/views/login/LoginView.vue'
import PasswdFindView from '@/views/login/PasswdFindView.vue'
import JoinView from '@/views/login/JoinView.vue'
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
    path: '/login',
    name: "login",
    component: LoginView
  },
  {
    path: '/login/passwdFind',
    name: "passwdFind",
    component: PasswdFindView
  },
  {
    path: '/login/join',
    name: "join",
    component: JoinView
  },
  {
    path: '/main',
    name: "main",
    component: MainView
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