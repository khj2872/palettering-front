// Getters
export const INITIAL_STATE = 'post/INITIAL_STATE';
export const STATE = 'post/STATE';
export const DATA = 'post/DATA';
export const LOADING = 'post/LOADING';
export const PARAMS = 'post/PARAMS';
export const PICTURES = 'post/PICTURES';

// Mutations
export const MU_INITIAL_STATE = 'post/MU_INITIAL_STATE';
export const MU_INITIAL_DATA = 'post/MU_INITIAL_DATA';
export const MU_REFRESH = 'post/MU_REFRESH';
export const MU_SET_STATE = 'post/MU_SET_STATE';
export const MU_SET_LOADING = 'post/MU_SET_LOADING';
export const MU_SET_DATA = 'post/MU_SET_DATA';

// Actions
export const SET_INITIAL_STATE = 'post/SET_INITIAL_STATE';
export const SET_INITIAL_DATA = 'post/SET_INITIAL_DATA';
export const SET_REFRESH = 'post/SET_REFRESH';
export const SET_STATE = 'post/SET_STATE';
export const SET_LOADING = 'post/SET_LOADING';
export const SET_DATA = 'post/SET_DATA';

const initialState = () => {
  return {
    data: {
      pictures: []
    },
    loading: false,
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
  [PICTURES]: state => {
    return state.data.pictures;
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
    state.data = {
      pictures: []
    };
    state.loading = false
  },
  [MU_SET_STATE]: (state, value) => {
    state[value.name] = value.value;
  },
  [MU_SET_DATA]: (state, payload) => {
    for (const key in payload) {
      state.data[key] = payload[key]
    }
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
  }, payload) => {
    commit(MU_SET_DATA, payload);
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};