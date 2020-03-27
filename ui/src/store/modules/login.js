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
    // 로그인 성공
    // if (payload.loginResult === 1) {
    //   state.data = payload.userData;
    //   state.error = '';

    //   // 아이디 / 비밀번호 실패
    // } else if (payload.loginResult === 4) {
    //   state.error = payload.loginMessage;

    //   // 비밀번호 5회 이상 실패
    // } else if (payload.loginResult === 8) {
    //   const loginMessageArr = payload.loginMessage.split(',')
    //   const remainTime = Number(loginMessageArr[1]);
    //   const remain =
    //     (parseInt(remainTime / 60) > 0 ? parseInt(remainTime / 60) + '분 ' : '') + parseInt(remainTime % 60) + '초';

    //   state.error = loginMessageArr[0]+'(남은 시간: ' + remain + ')';

    //   //n일 이상 비밀번호 비변경
    // } else if(payload.loginResult === 16) {
    //   state.error = payload.loginMessage;
    //   //비활성화 계정(인증 기간 유효)
    // } else if(payload.loginResult === 32) {
    //   state.error = payload.loginMessage;
    //   //비활성화 계정(인증 기간 만료)
    // } else if(payload.loginResult === 64) {
    //   state.error = payload.loginMessage;
    //   //잠긴계정
    // } else if(payload.loginResult === 128) {
    //   state.error = payload.loginMessage;   
    //   //최초 로그인 계정
    // } else if(payload.loginResult === 256) {
    //   state.error = payload.loginMessage;   
    //   //허용되지 않은 사용자 IP접근   
    // } else if(payload.loginResult === 512) {
    //   state.error = payload.loginMessage;
    // //내 정보 수정 / 저장

    // } else if (payload.extraInfo){

    //   //공백 데이터 스페이스바 제거 후 저장
    //   // if(payload.userDuty&&payload.userDuty==" "){
    //   //   payload.userDuty = "";
    //   // }
    //   // if(payload.userDept&&payload.userDept==" "){
    //   //   payload.userDept = "";
    //   // }
    //   // if(payload.additionalInfo&&payload.additionalInfo==" "){
    //   //   payload.additionalInfo = "";
    //   // }
    //   // console.log(payload);
    //   state.data = {...state.data, ...payload.extraInfo};
    //   // console.log(state.data);
    // }
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
      console.log('action error - INITIAL_STATE');
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
      console.log('action error - INITIAL_FIND_USER');
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
      console.log('action error - SET_DATA');
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
      console.log('action error - SET_FIND_USER');
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
      console.log('action error - SET_SAVE_USER');
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
      console.log('action error - SET_LOADING');
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
      console.log('action error - SET_DEVICE');
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