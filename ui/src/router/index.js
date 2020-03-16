import MainView from '@/views/MainView.vue'

export const routes = [{
    path: '/',
    redirect: {
      name: 'main'
    }
  },
  {
    path: '/main',
    name: "main",
    component: MainView
  }
]