<template>
  <div class="login-box">
    <div class="visual-wrap"></div>
    <div class="login-wrap">
      <div class="login-area">
        <div class="logo">
          <img src="/images/logo.png" />
        </div>
        <div class="input-box">
          <el-input
            v-model="loginInfo.id"
            placeholder="전화번호, 사용자 이름 또는 이메일"
          ></el-input>
          <el-input
            v-model="loginInfo.passwd"
            placeholder="비밀번호"
            show-password
          ></el-input>
          <ui-button class="loginBtn" @click="loginSubmit" :disabled="true"
            >로그인</ui-button
          >
        </div>
        <div class="etc-box">
          <div class="dev">또는</div>
          <ui-button class="facebook" type="secondary"
            >Facebook으로 로그인</ui-button
          >
          <ui-button class="forgot" type="secondary"
            >비밀번호를 잊으셨나요?</ui-button
          >
        </div>
      </div>
      <div class="forgot-area">계정이 없으신가요?<span>가입하기</span></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  props: [],
  components: {},
  data() {
    return {
      loginInfo: {
        id: "",
        passwd: ""
      }
    };
  },
  created() {},
  destroyed() {},
  mounted() {},
  watch: {},
  computed: {},
  methods: {
    loginSubmit() {
      console.log("로그인");
    }
  }
};
</script>

<style lang="scss">
.login-box {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

  .visual-wrap {
    width: 369px;
    height: 595px;
    background: url("/images/login-background.png") no-repeat center 0;
    margin-right: 27px;
  }

  .login-wrap {
    width: 350px;
    display: flex;
    flex-direction: column;

    .login-area {
      padding: 39px 40px 31px;
      margin-bottom: 10px;
      background: #ffffff;
      border: 1px solid #dbdbdb;
      align-items: center;
      display: flex;
      flex-direction: column;

      .logo {
        padding: 0 0 30px;
      }

      .input-box {
        .el-input {
          .el-input__inner {
            background: #fafafa;
            height: 38px;
            border-radius: 3px;
            font-size: 12px;
            color: #333333;
            min-width: 270px;
            width: 270px;

            &::placeholder {
              font-size: 12px;
              color: #999999;
            }
          }

          &:first-child {
            margin-bottom: 7px;
          }
        }

        .loginBtn {
          width: 100%;
          background-color: #3897f0;
          height: 30px;
          border-radius: 3px;
          color: #ffffff;
          font-size: 14px;
          font-weight: normal;
          margin-top: 14px;
        }
      }

      .etc-box {
        text-align: center;

        .dev {
          margin: 17px 0 14px;
          font-size: 14px;
          display: inline-flex;
          align-items: center;
          color: #999999;

          &:before,
          &:after {
            content: "";
            width: 100px;
            height: 1px;
            background-color: #dddddd;
            display: inline-block;
          }

          &:before {
            margin-right: 20px;
          }

          &:after {
            margin-left: 20px;
          }
        }

        .facebook {
          font-size: 14px;
          color: #385185;
          letter-spacing: -0.4px;
          margin-bottom: 8px;
          padding: 5px 10px;
          text-transform: none;
          height: auto;
          cursor: pointer;

          &:hover {
            background-color: transparent;
          }
        }

        .forgot {
          padding: 5px 10px;
          text-transform: none;
          font-size: 12px;
          color: #385185;
          letter-spacing: -0.4px;
          height: auto;
          cursor: pointer;

          &:hover {
            background-color: transparent;
          }
        }
      }
    }

    .forgot-area {
      padding: 24px 0;
      background: #ffffff;
      border: 1px solid #dbdbdb;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      color: #333333;
      letter-spacing: -0.4px;

      span {
        color: #3897f0;
        padding-left: 5px;
        cursor: pointer;
        font-weight: bold;
      }
    }
  }
}
</style>
