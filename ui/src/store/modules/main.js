// Getters
export const INITIAL_STATE = 'main/INITIAL_STATE';
export const STATE = 'main/STATE';
export const DATA = 'main/DATA';
export const LOADING = 'main/LOADING';
export const PARAMS = 'main/PARAMS';

// Mutations
export const MU_INITIAL_STATE = 'main/MU_INITIAL_STATE';
export const MU_INITIAL_DATA = 'main/MU_INITIAL_DATA';
export const MU_REFRESH = 'main/MU_REFRESH';
export const MU_SET_STATE = 'main/MU_SET_STATE';
export const MU_SET_LOADING = 'main/MU_SET_LOADING';
export const MU_SET_DATA = 'main/MU_SET_DATA';

// Actions
export const SET_INITIAL_STATE = 'main/SET_INITIAL_STATE';
export const SET_INITIAL_DATA = 'main/SET_INITIAL_DATA';
export const SET_REFRESH = 'main/SET_REFRESH';
export const SET_STATE = 'main/SET_STATE';
export const SET_LOADING = 'main/SET_LOADING';
export const SET_DATA = 'main/SET_DATA';

const initialState = () => {
  return {
    data: [],
    login: "",
    loading: false,
    isRefresh: false
  };
};

const state = initialState();

const getters = {
  [INITIAL_STATE]: () => {
    return initialState();
  },
  [STATE]: state => {
    return state;
  },
  [DATA]: state => {
    return state.data;
  },
  [LOADING]: state => {
    return state.loading;
  }
};

const mutations = {
  [MU_INITIAL_STATE]: state => {
    Object.assign(state, initialState());
  },
  [MU_INITIAL_DATA]: state => {
    state.data = [];
    state.login = "";
    state.loading = false

  },
  [MU_REFRESH]: (state, value) => {
    state.isRefresh = value ? value : true;
  },
  [MU_SET_STATE]: (state, value) => {
    state[value.name] = value.value;
  },
  [MU_SET_DATA]: (state, response) => {
    state.data = response;
  },
  [MU_SET_LOADING]: (state, loading) => {
    state.loading = loading;
  },
};

const actions = {
  [SET_INITIAL_STATE]: ({
    commit
  }) => {
    commit(MU_INITIAL_STATE);
  },
  [SET_INITIAL_DATA]: ({
    commit
  }) => {
    commit(MU_INITIAL_DATA);
  },
  [SET_REFRESH]: ({
    commit
  }, value) => {
    commit(MU_REFRESH, value);
  },
  [SET_STATE]: ({
    commit
  }, value) => {
    commit(MU_SET_STATE, value);
  },
  [SET_LOADING]: ({
    commit
  }, loading) => {
    commit(MU_SET_LOADING, loading);
  },
  [SET_DATA]: ({
    commit
  }, response) => {
    commit(MU_SET_DATA, response);
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};