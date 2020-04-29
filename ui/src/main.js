import Vue from "vue";
import App from "./App.vue";
// vue 라우터
import VueRouter from 'vue-router'
import {
  routes
} from './router';
// vue 스토어
import {
  store
} from './store';
// El-elementUI 라이브러리추가
import ElementUI from 'element-ui';
// KeenUI 라이브러리추가
import KeenUI from 'keen-ui';
// vue 무한스크롤 라이브러리추가
import InfiniteLoading from 'vue-infinite-loading';
import PerfectScrollbar from 'vue2-perfect-scrollbar';

import 'vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css'

//element-ui 언어 패키지
import en from "element-ui/lib/locale/lang/en";
import ko from "element-ui/lib/locale/lang/ko";

//element-ui css
import 'element-ui/lib/theme-chalk/index.css';
//keen-ui css
import 'keen-ui/dist/keen-ui.css';

//element-ui 언어설정
let localLang = {};
if (localStorage.getItem('lang') === 'en') {
  localLang.locale = en;
} else {
  localLang.locale = ko;
}


Vue.use(ElementUI, localLang);
Vue.use(KeenUI);
Vue.use(VueRouter);
Vue.use(InfiniteLoading);
Vue.use(PerfectScrollbar);

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

// 타이틀변경
router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
});