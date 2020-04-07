<template>
  <div class="passwd-find-box">
    <div class="passwd-find-wrap">
      <Logo :color="''" :width="'165px'" :height="'63px'" />
      <div class="info-area">
        <h3>로그인에 문제가 있나요?</h3>
        <p>
          사용자 이름 또는 이메일을 입력하면 다시 계정에 로그인할 수 있는 링크를
          보내드립니다.
        </p>
      </div>
      <div class="email-area">
        <el-input v-model="email" placeholder="이메일, 전화번호, 사용자 이름" />
        <ui-button class="login-btn" type="secondary" :disabled="linkAbled">
          로그인 링크 보내기
        </ui-button>
      </div>
      <div class="join-area">
        <span class="div">또는</span>
        <ui-button class="join-btn" type="secondary"
          ><router-link to="/login/join">새 계정 만들기</router-link>
        </ui-button>
      </div>
    </div>
    <div class="back-login-wrap">
      <ui-button class="backLogin-btn" type="secondary"
        ><router-link to="/login">로그인으로 돌아가기</router-link>
      </ui-button>
    </div>
  </div>
</template>

<script>
import Logo from "@/components/common/Logo.vue";
export default {
  name: "PasswdFind",
  props: [],
  components: { Logo },
  data() {
    return { email: "" };
  },
  computed: {
    linkAbled() {
      let disabled = true;
      if (!!this.email) {
        disabled = false;
      }
      return disabled;
    }
  },
  methods: {}
};
</script>

<style lang="scss">
.passwd-find-box {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;

  .passwd-find-wrap {
    width: 388px;
    height: 532px;
    border: solid 1px #dbdbdb;
    background-color: #ffffff;
    padding: 64px 45px 0;
    display: flex;
    // justify-content: center;
    flex-direction: column;
    align-items: center;

    .info-area {
      text-align: center;
      margin: 30px 0 0;

      h3 {
        font-size: 18px;
        color: #333333;
        padding-bottom: 16px;
      }

      p {
        font-size: 16px;
        color: #999999;
        line-height: 22px;
      }
    }

    .email-area {
      margin: 28px 0 0;

      .el-input {
        margin: 0 0 10px;

        .el-input__inner {
          background: #fafafa;
          height: 38px;
          border-radius: 3px;
          font-size: 12px;
          color: #333333;
          // min-width: 270px;
          width: 100%;

          &::placeholder {
            font-size: 12px;
            color: #999999;
          }
        }
      }

      .login-btn {
        background: #3897f0;
        color: #ffffff;
        height: 30px;
        font-size: 14px;
        width: 100%;
        font-weight: normal;

        &:hover {
          background: #3897f0;
        }
      }
    }

    .join-area {
      display: flex;
      flex-direction: column;
      align-items: center;

      .div {
        margin: 27px 0 17px;
        display: block;
        display: inline-flex;
        height: 13px;
        justify-content: center;
        align-items: center;
        font-size: 14px;
        color: #999999;

        &:before,
        &:after {
          content: "";
          width: 100px;
          height: 1px;
          background-color: #dddddd;
          display: block;
        }

        &:before {
          margin-right: 24px;
        }

        &:after {
          margin-left: 24px;
        }
      }

      .join-btn {
        color: #333333;
        font-size: 16px;
        font-weight: normal;
      }
    }
  }

  .back-login-wrap {
    width: 388px;
    height: 48px;
    border: solid 1px #dbdbdb;
    background-color: #f5f5f5;
    border-top: none;

    .backLogin-btn {
      width: 100%;
      height: 100%;
      border-radius: 0;
      color: #333333;
      font-size: 16px;
      font-weight: normal;
    }
  }
}
</style>
