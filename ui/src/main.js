import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueRouter from 'vue-router'
import store from "./store";

import ElementUI from 'element-ui';

//element-ui 언어 패키지
import en from "element-ui/lib/locale/lang/en";
import ko from "element-ui/lib/locale/lang/ko";

import 'element-ui/lib/theme-chalk/index.css';

let localLang = {};
if (localStorage.getItem('lang') === 'en') {
  localLang.locale = en;
} else {
  localLang.locale = ko;
}


Vue.use(ElementUI, localLang);
Vue.use(VueRouter);

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