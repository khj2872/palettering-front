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
// vue 무한스크롤 라이브러리추가
import InfiniteLoading from 'vue-infinite-loading';

//element-ui 언어 패키지
import en from "element-ui/lib/locale/lang/en";
import ko from "element-ui/lib/locale/lang/ko";

//element-ui css
import 'element-ui/lib/theme-chalk/index.css';

//element-ui 언어설정
let localLang = {};
if (localStorage.getItem('lang') === 'en') {
  localLang.locale = en;
} else {
  localLang.locale = ko;
}

Vue.use(ElementUI, localLang);
Vue.use(VueRouter);
Vue.use(InfiniteLoading);

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
});