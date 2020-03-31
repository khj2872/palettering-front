import { Validator } from 'vee-validate';
let instance = new Validator();

// 에러 메세지
let idError = '';
let loginFailError = '';
let emailCheck = '';
let name = '';
let phone = '';
let num = '';
let duty = '';
let certCode = '';
let certCodeCancel = '';
let scoreCheck = '';
let ip = '';
let password = '';
let passwordConfirm = '';
let passwordCheck = '';
let passwordCheckConfirm = '';
const startEndPointArr = ['start', 'end'];

// 정규식
// 영문, 숫자
const alpha = value => {
  return value.match(new RegExp(/[a-zA-Z]/));
};
// 영문, 숫자
const alphaNumber = value => {
  return value.match(new RegExp(/[^a-zA-Z0-9]/));
};
// 영문, 숫자, 특수문자('-','_')
const alphaNumberDash = value => {
  return value.match(new RegExp(/[^a-zA-Z0-9_\-]/));
};
// 영문, 한문, 숫자
const charNumber = value => {
  return value.match(new RegExp(/[^a-zA-Z0-9ㄱ-ㅎㅏ-ㅣ가-힣]/));
};
// 영문, 한문, 숫자, 공백
const charNumberSpace = value => {
  return value.match(new RegExp(/[^a-zA-Z0-9ㄱ-ㅎㅏ-ㅣ가-힣\s{0,1}]/));
};
// 영문, 숫자, 공백
const certCodeCustom = value => {
  return value.match(new RegExp(/[^a-zA-Z0-9]/));
};
// 영문, 숫자, 공백, '-'
const certCodeCancelCustom = value => {
  return value.match(new RegExp(/[^a-zA-Z0-9\-]/));
};
// 이메일
const emailCustom = value => {
  return value.match(
    new RegExp(
      /^(?=[A-Za-z0-9][A-Za-z0-9@._%+-]{5,253}$)[A-Za-z0-9._%+-]{1,64}@(?:[A-Za-z0-9-]{1,63}\.)+[A-Za-z]{2,63}$/i
    )
  );
};
// 숫자, 공백, '-', '+'
const phoneNumber = value => value.match(new RegExp(/[^0-9\s\-+]/));
// '-' 하나 이상 불가
const phoneNumberDash = value => value.match(new RegExp(/\-{2,}/));
// 숫자만 입력 불가
const onlyNumber = value => !!value.match(new RegExp(/^-?(\d+-?)+$/));
// 특수문자
const spechialChar = value => {
  return value.match(new RegExp(/[!@#$%^&+=]/));
};
// 로그일 실패(1-5까지)
const loginFailCnt = value => !!(value < 6);
// 맨 앞에 0 불가
const fowordZero = value => value.match(new RegExp(/^0+[0-9]/));
// 공백
const space = value => value.match(/\s/gi);
// 맨 앞 공백
const fowordSpace = value => !!value.match(new RegExp(/^\s/gi));
// 맨 뒤 공백
const backSpace = value => !!value.match(new RegExp(/\s$/gi));
// 연속 된 공백
const coninueSpace = value => !!value.match(/\s{2,}/);
// 입력 값 최소 및 최대 값 제한
// 최소 5자
const minLength05 = value => !!(value.length < 5);
// 최대 30자
const maxLength30 = value => !!(value.length > 30);
// 최대 64자
const maxLength64 = value => !!(value.length > 64);
// 최대 255자
const maxLength255 = value => !!(value.length > 255);
// 8자 필수
const reqLength08 = value => !!(value.length === 8);
// 9자 필수
const reqLength09 = value => !!(value.length === 9);

// 아이디 에러메세지
const idFunc = value => {
  if (space(value)) {
    idError = '공백은 입력할 수 없습니다.';
    return false;
  } else if (alphaNumberDash(value)) {
    idError = '사용 불가문자 포함 : [ ' + alphaNumberDash(value)[0] + ' ]';
    return false;
  } else if (!alpha(value)) {
    idError = 'ID에 영문자는 필수로 입력해야 합니다.';
    return false;
  } else if (maxLength30(value) || minLength05(value)) {
    idError = '5~30자까지만 입력 가능합니다.';
    return false;
  }
  return true;
};

// 이름 에러메세지
const nameFunc = value => {
  if (fowordSpace(value)) {
    name = '맨 앞에 공백을 입력할 수 없습니다.';
    return false;
  } else if (backSpace(value)) {
    name = '맨 뒤에 공백을 입력할 수 없습니다.';
    return false;
  } else if (coninueSpace(value)) {
    name = '연속된 공백은 입력할 수 없습니다.';
    return false;
  } else if (onlyNumber(value)) {
    name = '숫자만 입력할 수 없습니다.';
    return false;
  } else if (charNumberSpace(value)) {
    name = '사용 불가문자 포함 : [ ' + charNumberSpace(value)[0] + ' ]';
    return false;
  } else if (maxLength30(value)) {
    name = '30자까지만 입력 가능합니다.';
    return false;
  }
  return true;
};

// 이메일 에러메세지
const emailErrorFunc = value => {
  if (maxLength64(value.split('@')[0])) {
    emailCheck = '이메일의 ID는 64자까지만 입력 가능합니다.';
    return false;
  } else if (!emailCustom(value)) {
    emailCheck = '올바른 이메일 형식이 아닙니다.';
    return false;
  }
  return true;
};

// 연락처 에러메세지
const phoneFunc = value => {
  if (fowordSpace(value)) {
    phone = '맨 앞에 공백을 입력할 수 없습니다.';
    return false;
  } else if (backSpace(value)) {
    phone = '맨 뒤에 공백을 입력할 수 없습니다.';
    return false;
  } else if (coninueSpace(value)) {
    phone = '연속된 공백은 입력할 수 없습니다.';
    return false;
  } else if (phoneNumber(value)) {
    phone = '사용 불가 문자 포함 : [ ' + phoneNumber(value)[0] + ' ]';
    return false;
  } else if (phoneNumberDash(value)) {
    phone = '[ - ]는 연속으로 입력할 수 없습니다.';
    return false;
  } else if (value.length >= 20) {
    phone = '20자 이상 입력할수 없습니다.';
    return false;
  }
  return true;
};

// 숫자 타입 입력
const numberFunc = value => {
  // 최대 2,147,483,647
  if (value > 2147483647) {
    num = '허용할 수 있는 최대 범위를 넘었습니다.';
    return false;
  } else if (space(value)) {
    num = '공백은 입력할 수 없습니다.';
    return false;
  } else if (!onlyNumber(value)) {
    num = '숫자만 입력할 수 있습니다.';
    return false;
  }
  return true;
};

//통합필터 점수
/*
const allFilterScoreCheckFunc = (value, args) => {
  console.log(value);
  console.log(args);
  if(value <= 0 || value > 100 ){
    scoreCheck = '지정 가능 범위는 0 ~ 100 입니다.';
    return false;
  }else if(space(value)){
    scoreCheck = '공백은 입력할 수 없습니다.';
    return false;
  } else if(!onlyNumber(value)){
    scoreCheck = '숫자만 입력할 수 있습니다.';
    return false;
  }
  return true;
};
*/

//통합필터 자산보안성종합점수, 개별진단대상점수
const allFilterScoreCheckFunc = (value, [endPoint]) => {
  if (+value < 0 || +value > 100) {
    scoreCheck = '지정 가능 범위는 0 ~ 100 입니다.';
    return false;
  } else if (space(value) && fowordSpace(value) && backSpace(value)) {
    scoreCheck = '공백은 입력할 수 없습니다.';
    return false;
  } else if (!onlyNumber(value)) {
    scoreCheck = '숫자만 입력할 수 있습니다.';
    return false;
  }

  if (+endPoint < +value || +endPoint > 100) {
    scoreCheck = +value + ' 이상 100 이하의 값을 입력.';
    return false;
  } else if (space(value) && fowordSpace(value) && backSpace(value)) {
    scoreCheck = '공백은 입력할 수 없습니다.';
    return false;
  } else if (!onlyNumber(endPoint)) {
    scoreCheck = '숫자만 입력할 수 있습니다.';
    return false;
  }

  return true;
};

// ip 형식 체크
const ipFunc = value => {
  let regexp = /\b(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])\b/;
  let result = regexp.test(value);

  if (!result) {
    ip = '올바른 IP 형식이 아닙니다.';
    return false;
  }

  return true;
};

// duty 에러메세지
const dutyFunc = value => {
  if (onlyNumber(value)) {
    duty = '숫자만 입력할 수 없습니다.';
    return false;
  } else if (maxLength30(value)) {
    duty = '30자까지만 입력 가능합니다.';
    return false;
  }
  return true;
};

const passwordFunc = value => {
  passwordConfirm = value;
  if (fowordSpace(value)) {
    password = '맨 앞에 공백을 입력할 수 없습니다.';
    return false;
  } else if (backSpace(value)) {
    password = '맨 뒤에 공백을 입력할 수 없습니다.';
    return false;
  } else if (coninueSpace(value)) {
    password = '연속된 공백은 입력할 수 없습니다.';
    return false;
  } else if (value.length >= 20) {
    password = '20자 이상 입력할수 없습니다.';
    return false;
  }
  return true;
};
const passwordCheckFunc = value => {
  passwordCheckConfirm = value;
  if (fowordSpace(value)) {
    passwordCheck = '맨 앞에 공백을 입력할 수 없습니다.';
    return false;
  } else if (backSpace(value)) {
    passwordCheck = '맨 뒤에 공백을 입력할 수 없습니다.';
    return false;
  } else if (coninueSpace(value)) {
    passwordCheck = '연속된 공백은 입력할 수 없습니다.';
    return false;
  } else if (value.length >= 20) {
    passwordCheck = '20자 이상 입력할수 없습니다.';
    return false;
  } else if (value.length < 1) {
    passwordCheck = '공백은 입력할 수 없습니다.';
    return false;
  } else if (value != passwordConfirm) {
    passwordCheck = '비밀번호가 다릅니다.';
    return false;
  }
  return true;
};

// 로그인 실패
const loginFailCntFunc = value => {
  if (!loginFailCnt(value)) {
    loginFailError = '0-5까지만 가능합니다.';
    return false;
  } else if (fowordZero(value)) {
    loginFailError = "맨 앞에 '0'이 올 수 없습니다.";
    return false;
  }
  return true;
};

// 인증코드
const certCodeFunc = value => {
  if (space(value)) {
    certCode = '공백은 입력할 수 없습니다.';
    return false;
  } else if (certCodeCustom(value)) {
    certCode = '영문과 숫자만 사용할 수 있습니다.';
    return false;
  } else if (!reqLength08(value)) {
    certCode = '인증 코드는 8자리입니다.';
    return false;
  }
  return true;
};

// 인증 취소 코드
const certCodeCancelFunc = value => {
  if (space(value)) {
    certCodeCancel = '공백은 입력할 수 없습니다.';
    return false;
  } else if (certCodeCancelCustom(value)) {
    certCodeCancel = '영문과 숫자만 사용할 수 있습니다.';
    return false;
  } else if (!reqLength09(value)) {
    certCodeCancel = '인증 취소 키는 9자리입니다.';
    return false;
  }
  return true;
};

instance.extend('space', space);
instance.extend('id', idFunc);
instance.extend('loginFailCnt', loginFailCntFunc);
instance.extend('emailCustom', emailErrorFunc);
instance.extend('phone', phoneFunc);
instance.extend('name', nameFunc);
instance.extend('num', numberFunc);
instance.extend('scoreCheck', allFilterScoreCheckFunc, {
  hasTarget: true
});
instance.extend('ip', ipFunc);
instance.extend('duty', dutyFunc);
instance.extend('password', passwordFunc);
instance.extend('passwordCheck', passwordCheckFunc);
instance.extend('certCode', certCodeFunc);
instance.extend('certCodeCancel', certCodeCancelFunc);
// instance.extend('reqLength08', value => value.length < 8);
// instance.extend('reqLength09', value => value.length < 9);

// 에러메세지 설정
export const config = {
  locale: 'ko',
  dictionary: {
    en: {
      attributes: {
        email: 'E-mail'
      }
    },
    ko: {
      messages: {
        id: field => idError,
        name: field => name,
        phone: field => phone,
        num: field => num,
        duty: field => duty,
        certCode: field => certCode,
        certCodeCancel: field => certCodeCancel,
        emailCustom: field => emailCheck,
        loginFailCnt: field => loginFailError,
        required: field => `필수 입력란입니다.`,
        numeric: field => '숫자만 입력할 수 있습니다.',
        // reqLength08: field => '인증코드는 8자리입니다.',
        space: field => '공백은 입력할 수 없습니다.',
        alpha_num: field => '영문과 숫자만 사용할 수 있습니다.',
        scoreCheck: field => scoreCheck,
        ip: field => ip,
        password: field => password,
        passwordCheck: field => passwordCheck
      }
    }
  }
};

Validator.localize('ko');

// 확인 필요한 목록
// passWord
// name
