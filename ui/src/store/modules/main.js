// Getters
export const INITIAL_STATE = 'main/INITIAL_STATE';
export const STATE = 'main/STATE';
export const DATA = 'main/DATA';
export const LOADING = 'main/LOADING';
export const PARAMS = 'main/PARAMS';
export const BEFORE_PARAMS = 'main/BEFORE_PARAMS';

// Mutations
export const MU_INITIAL_STATE = 'main/MU_INITIAL_STATE';
export const MU_INITIAL_DATA = 'main/MU_INITIAL_DATA';
export const MU_REFRESH = 'main/MU_REFRESH';
export const MU_SET_STATE = 'main/MU_SET_STATE';
export const MU_SET_LOADING = 'main/MU_SET_LOADING';
export const MU_SET_PARAMS = 'main/MU_SET_PARAMS';
export const MU_SET_DATA = 'main/MU_SET_DATA';
export const MU_SET_BEFORE_PARAMS = 'main/MU_SET_BEFORE_PARAMS';

// Actions
export const SET_INITIAL_STATE = 'main/SET_INITIAL_STATE';
export const SET_INITIAL_DATA = 'main/SET_INITIAL_DATA';
export const SET_REFRESH = 'main/SET_REFRESH';
export const SET_STATE = 'main/SET_STATE';
export const SET_LOADING = 'main/SET_LOADING';
export const SET_PARAMS = 'main/SET_PARAMS';
export const SET_DATA = 'main/SET_DATA';
export const SET_BEFORE_PARAMS = 'main/SET_BEFORE_PARAMS';

const initialState = () => {
  return {
    data: [],
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
  [PARAMS]: state => {
    return state.params;
  },
  [DATA]: state => {
    return state.data;
  },
  [LOADING]: state => {
    return state.loading;
  },
  [BEFORE_PARAMS]: state => {
    return state.beforeParams;
  }
};

const mutations = {
  [MU_INITIAL_STATE]: state => {
    Object.assign(state, initialState());
  },
  [MU_INITIAL_DATA]: state => {
    state.totalCount = 0;
    state.totalPages = 0;
    state.params.offset = 0;
    state.curPage = 0;
    state.data = [];
    state.params = {
      filter: { regEpoch: { recent: 'week' } },
      dsFilter: {},
      sort: { field: 'mainNo', order: 'DESC' },
      offset: 0,
      limit: 20
    };
    state.beforeParams = {};
  },
  [MU_REFRESH]: (state, value) => {
    state.isRefresh = value ? value : true;
  },
  [MU_SET_STATE]: (state, value) => {
    state[value.name] = value.value;
  },
  [MU_SET_DATA]: (state, response) => {
    if (response.params) {
      state.beforeParams = response.params;
    }
    if (response.data.length > 0) {
      if (state.isFirstPage) {
        state.isFirstPage = false;

        state.totalCount = response.data[0].rnum + state.params.offset;
        state.totalPages = Math.ceil(state.totalCount / state.params.limit);
        state.curPage = 1;

        state.data = response.data;
      } else {
        state.curPage = state.curPage + 1;
        state.data = state.data.concat(response.data);

        // totalCount가 달라졌다면 수정 처리
        const curTotalCount =
          response.data[0].rnum + state.params.limit * (state.curPage - 1);
        if (state.totalCount !== curTotalCount) {
          state.totalCount = curTotalCount;
          state.totalPages = Math.ceil(state.totalCount / state.params.limit);
        }
      }

      // 무한 스크롤 처리
      if (state.curPage === state.totalPages) {
        response.scroll.complete();
      } else {
        response.scroll.loaded();
      }
    } else {
      state.totalCount = 0;
      state.totalPages = 0;
      state.params.offset = 0;
      state.curPage = 0;
      state.data = [];
    }
  },
  [MU_SET_LOADING]: (state, loading) => {
    state.loading = loading;
  },
  [MU_SET_PARAMS]: (state, param) => {
    state.params[param.name] = param.value;
  },
  [MU_SET_BEFORE_PARAMS]: (state, param) => {
    state.beforeParams[param.name] = param.value;
  }
};

const actions = {
  [SET_INITIAL_STATE]: ({ commit }) => {
    commit(MU_INITIAL_STATE);
  },
  [SET_INITIAL_DATA]: ({ commit }) => {
    commit(MU_INITIAL_DATA);
  },
  [SET_REFRESH]: ({ commit }, value) => {
    commit(MU_REFRESH, value);
  },
  [SET_STATE]: ({ commit }, value) => {
    commit(MU_SET_STATE, value);
  },
  [SET_LOADING]: ({ commit }, loading) => {
    commit(MU_SET_LOADING, loading);
  },
  [SET_PARAMS]: ({ commit }, param) => {
    commit(MU_SET_PARAMS, param);
  },
  [SET_DATA]: ({ commit }, response) => {
    commit(MU_SET_DATA, response);
  },
  [SET_BEFORE_PARAMS]: ({ commit }, param) => {
    commit(MU_SET_BEFORE_PARAMS, param);
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
