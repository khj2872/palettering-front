import Vue from 'vue'
import Vuex from 'vuex'

import main from './modules/main';
import login from './modules/login';
import post from './modules/post';

Vue.use(Vuex)

export const store = new Vuex.Store({
  // strict엄격 모드에서는 Vuex 상태가 변이 핸들러 외부에서 변이 될 때 마다 오류가 발생합니다. 이렇게하면 디버깅 도구로 모든 상태 변이를 명시적으로 추적
  // strict는 배포시 주석처리
  strict: true,
  modules: {
    main,
    login,
    post
  }
})


Vue.use(Vuex);
export default store;