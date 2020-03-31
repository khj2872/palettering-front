<template>
  <div class="join-box">
    <div class="join-wrap">
      <Logo :color="''" :width="'165px'" :height="'63px'" />
      <div class="info-area">
        <p class="info-txt">
          친구들의 사진과 동영상을 보려면 가입하세요.
        </p>
        <ui-button class="facebook-btn" type="secondary"
          >Facebook으로 로그인
        </ui-button>
      </div>
      <span class="div">또는</span>
      <div class="input-area">
        <el-input
          v-model="joinInfo.email"
          placeholder="휴대폰 번호 또는 이메일 주소"
        />
        <el-input v-model="joinInfo.nickName" placeholder="성명" />
        <el-input v-model="joinInfo.name" placeholder="사용자 이름" />
        <el-input
          v-model="joinInfo.passwd"
          placeholder="비밀번호"
          show-password
        />
        <ui-button class="join-btn" type="secondary">가입</ui-button>
        <span class="extra-txt"
          >가입하면 Instagram의 약관, 데이터 정책 및 쿠키 정책에 동의하게
          됩니다. 하지만 저희는 그런거 없습니다.
        </span>
      </div>
    </div>
    <div class="login-wrap">
      계정이 있으신가요?<span
        ><router-link to="/login"> 로그인</router-link></span
      >
    </div>
  </div>
</template>

<script>
import Logo from "@/components/common/Logo.vue";

export default {
  name: "Join",
  components: { Logo },
  data() {
    return {
      joinInfo: {
        email: "",
        nickName: "",
        name: "",
        passwd: ""
      }
    };
  },
  computed: {},
  methods: {}
};
</script>

<style lang="scss">
.join-box {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;

  .join-wrap {
    width: 350px;
    height: 582px;
    border: solid 1px #dbdbdb;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 44px 40px 0;

    .info-area {
      margin: 19px 0 0;
      display: flex;
      flex-direction: column;
      align-items: center;

      .info-txt {
        font-size: 16px;
        text-align: center;
        color: #999999;
        padding-bottom: 20px;
        line-height: 22px;
      }

      .facebook-btn {
        background: #3897f0;
        color: #ffffff;
        height: 30px;
        font-size: 14px;
        font-weight: normal;
        text-transform: unset;
        width: 100%;

        &:hover {
          background: #3897f0;
        }
      }
    }

    .div {
      margin: 16px 0 23px;
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
        margin-right: 20px;
      }

      &:after {
        margin-left: 20px;
      }
    }

    .input-area {
      display: flex;
      // justify-content: center;
      flex-direction: column;
      align-items: center;

      .el-input {
        margin: 0 0 7px;

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

        &:last-child {
          margin: 0;
        }
      }

      .join-btn {
        background: #3897f0;
        color: #ffffff;
        height: 30px;
        font-size: 14px;
        font-weight: normal;
        text-transform: unset;
        width: 100%;

        &:hover {
          background: #3897f0;
        }
      }

      .extra-txt {
        margin: 20px 0 0;
        font-size: 14px;
        color: #999999;
        line-height: 18px;
        text-align: center;
      }
    }
  }

  .login-wrap {
    width: 350px;
    height: 63px;
    border: solid 1px #dbdbdb;
    background-color: #ffffff;
    color: #333333;
    font-size: 14px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin: 14px 0 0;

    > span {
      margin: 0 0 0 5px;
      color: #3897f0;
      font-weight: bold;
    }
  }
}
</style>
