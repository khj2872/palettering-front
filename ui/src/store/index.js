import Vue from 'vue'
import Vuex from 'vuex'

import main from './modules/main';
import login from './modules/login';

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    main,
    login
  }
})


Vue.use(Vuex);
export default store;