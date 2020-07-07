// Getters
export const STATE = 'login/STATE';
export const DATA = 'login/DATA';
export const LOADING = 'login/LOADING';
export const DEVICE = 'login/DEVICE';
export const LOGIN_RESULT = 'login/LOGIN_RESULT';

// Mutations
export const MU_INITIAL_STATE = 'login/MU_INITIAL_STATE';
export const MU_INITIAL_FIND_USER = 'login/MU_INITIAL_FIND_USER';
export const MU_SET_DATA = 'login/MU_SET_DATA';
export const MU_SET_LOADING = 'login/MU_SET_LOADING';
export const MU_SET_FIND_USER = 'login/MU_SET_FIND_USER';
export const MU_SET_SAVE_USER = 'login/MU_SET_SAVE_USER';
export const MU_SET_DEVICE = 'login/MU_SET_DEVICE';

// Actions
export const INITIAL_STATE = 'login/INITIAL_STATE';
export const INITIAL_FIND_USER = 'login/INITIAL_FIND_USER';
export const SET_DATA = 'login/SET_DATA';
export const SET_LOADING = 'login/SET_LOADING';
export const SET_SAVE_USER = 'login/SET_SAVE_USER';
export const SET_FIND_USER = 'login/SET_FIND_USER';
export const SET_DEVICE = 'login/SET_DEVICE';

const initialState = () => {
  return {
    data: {},
    error: 'dfdf',
    saveID: '',
    loading: false,
    device: {},
    loginResult: 0,
    findData: {}
  };
};

const state = initialState();

const getters = {
  [STATE]: state => {
    return state;
  },
  [DATA]: state => {
    return state.data;
  },
  [LOADING]: state => {
    return state.loading;
  },
  [DEVICE]: state => {
    return state.device;
  },
  [LOGIN_RESULT]: state => {
    return state.loginResult;
  }
};

const mutations = {
  [MU_INITIAL_STATE]: state => {
    Object.assign(state, initialState());
  },
  [MU_INITIAL_FIND_USER]: state => {
    state.findData = [];
  },
  [MU_SET_DATA]: (state, payload) => {
    state.data = payload
  },
  [MU_SET_FIND_USER]: (state, payload) => {
    state.findData = payload;
    state.error = '';
  },
  [MU_SET_LOADING]: (state, loading) => {
    state.loading = loading;
  },
  [MU_SET_SAVE_USER]: (state, payload) => {
    state.saveID = payload;
  },
  [MU_SET_DEVICE]: (state, device) => {
    state.device = device;
  }
};

const actions = {
  [INITIAL_STATE]: ({
    commit
  }) => {
    try {
      commit(MU_INITIAL_STATE);
    } catch (ex) {
      commit(MU_INITIAL_STATE);
      return;
    }
  },
  [INITIAL_FIND_USER]: ({
    commit
  }) => {
    try {
      commit(MU_INITIAL_FIND_USER);
    } catch (ex) {
      commit(MU_INITIAL_FIND_USER);
      return;
    }
  },
  [SET_DATA]: ({
    commit
  }, data) => {
    try {
      commit(MU_SET_DATA, data);
    } catch (ex) {
      commit(MU_SET_DATA, null);
      return;
    }
  },
  [SET_FIND_USER]: ({
    commit
  }, params) => {
    try {
      commit(MU_SET_FIND_USER, params);
    } catch (ex) {
      commit(MU_SET_FIND_USER, null);
      return;
    }
  },
  [SET_SAVE_USER]: ({
    commit
  }, user) => {
    try {
      commit(MU_SET_SAVE_USER, user);
    } catch (ex) {
      commit(MU_SET_SAVE_USER, null);
      return;
    }
  },
  [SET_LOADING]: ({
    commit
  }, loading) => {
    try {
      commit(MU_SET_LOADING, loading);
    } catch (ex) {
      commit(MU_SET_LOADING, null);
      return;
    }
  },
  [SET_DEVICE]: ({
    commit
  }, device) => {
    try {
      commit(MU_SET_DEVICE, device);
    } catch (ex) {
      commit(MU_SET_DEVICE, null);
      return;
    }
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};