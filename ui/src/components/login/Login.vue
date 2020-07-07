<template>
  <div class="login-box">
    <div class="visual-wrap">
      <el-carousel class="slide-area" :arrow="'never'" :interval="5000" height="427px">
        <el-carousel-item v-for="itemSrc in slideImg" :key="itemSrc">
          <img :src="'/images/login/' + itemSrc + '.png'" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="login-wrap">
      <div class="login-area">
        <div class="logo-area">
          <Logo :color="''" :width="'191px'" :height="'63px'" />
        </div>
        <div class="input-box">
          <el-input v-model="loginInfo.id" placeholder="전화번호, 사용자 이름 또는 이메일"></el-input>
          <el-input v-model="loginInfo.passwd" placeholder="비밀번호" show-password></el-input>
          <ui-button
            class="loginBtn blueBtn"
            @click="loginSubmit"
            :disabled="btnAbled"
            :loading="isLoading"
          >로그인</ui-button>
        </div>
        <div class="etc-box">
          <div class="dev">또는</div>
          <ui-button class="facebook" type="secondary">Facebook으로 로그인</ui-button>
          <ui-button class="forgot" type="secondary">
            <router-link to="/login/passwdFind">비밀번호를 잊으셨나요?</router-link>
          </ui-button>
        </div>
      </div>
      <div class="forgot-area">
        계정이 없으신가요?
        <span>
          <router-link to="/login/join">가입하기</router-link>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapActions, mapGetters } from "vuex";
import * as login from "@/store/modules/login";
import Logo from "@/components/common/Logo.vue";

export default {
  name: "Login",
  props: [],
  components: { Logo },
  data() {
    return {
      loginInfo: {
        id: "",
        passwd: ""
      },
      slideImg: [
        "img-login-01",
        "img-login-02",
        "img-login-03",
        "img-login-04",
        "img-login-05"
      ],
      isLoading: false,
      radio: "이치로"
    };
  },
  created() {},
  computed: {
    ...mapGetters({
      g_loginState: login.STATE
    }),
    btnAbled() {
      let disabled = true;
      if (!!this.loginInfo.id && !!this.loginInfo.passwd) {
        disabled = false;
      }
      return disabled;
    }
  },
  methods: {
    ...mapActions({
      a_setLoading: login.SET_LOADING,
      a_setLogin: login.SET_DATA,
      a_setInitialLogin: login.INITIAL_STATE,
      a_setSaveUser: login.SET_SAVE_USER // 아이디 저장
    }),
    loginSubmit() {
      const id = this.loginInfo.id;
      const pw = this.loginInfo.passwd;

      this.a_setSaveUser(id);

      this.$router.push({
        name: "homeFeed"
      });
    },
    async asyncCall() {
      console.log("calling");
      const result = await this.resolveAfter2Seconds();
      // expected output: 'resolved'
    },
    resolveAfter2Seconds() {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve("resolved");
        }, 2000);
      })
        .then(function() {
          console.log("then");
          return;
        })
        .catch(function(err) {
          console.log(err);
        })
        .finally(function() {
          console.log("finally");
        });
    },
    fetchContacts: async function() {
      this.isLoading = true;

      let params = [];

      for (let i = 0; i < this.allResistVacation.memberId.length; i++) {
        params.push({
          memberId: this.allResistVacation.memberId[i],
          vacationType: this.allResistVacation.vacationType,
          startDate: this.startDate,
          endDate: this.endDate,
          reason: this.allResistVacation.reasonD
        });
      }

      httpClient.post(url, params);

      // ajax 형식
      const xhr = new XMLHttpRequest();
      xhr.open("POST", "/api/users?page=2");
      xhr.setRequestHeader("Content-type", "text/plain");
      xhr.setRequestHeader("Accept", "text/plain");
      const data = { id: 3, title: "JavaScript", author: "Park", price: 5000 };

      xhr.send();
      console.log(xhr.readyState);

      xhr.onreadystatechange = function(e) {
        if (xhr.readyState !== XMLHttpRequest.DONE) {
          console.log(xhr.readyState, e);
          return;
        }

        if (xhr.status >= 200) {
          console.log(xhr.responseText);
          console.log(xhr.readyState, e);
        } else {
          console.log("Error!");
        }
      };
      console.log(xhr.readyState);

      // axios 형식
      axios({
        method: "GET",
        url: "/api/users?page=2",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8"
        },
        params: {}
      })
        .then(response => {
          console.log(response);
          this.result = response.data.data;
          console.log(this.result);
        })
        .catch(ex => {
          console.log("ERR!!!!! : ", ex);
        });

      // fetch 형식
      let url = "/api/users?page=2";
      let options = {
        method: "POST",
        mode: "cors",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8"
        },
        body: JSON.stringify({
          property_one: "아저씨",
          property_two: "아버지"
        })
      };

      let response = await fetch(url, options);
      let responseOk = response && response.ok;

      if (responseOk) {
        let data = await response.json();
        console.log(data);
      }

      this.isLoading = false;
    }
  }
};
</script>

<style lang="scss">
.radio {
  input {
    width: 30px;
    height: 30px;
    border: 1px solid blue;
  }
}
.login-box {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

  .visual-wrap {
    width: 369px;
    height: 595px;
    background: url("/images/login/login-background.png") no-repeat center 0;
    margin-right: 27px;
    position: relative;

    .slide-area {
      width: 240px;
      height: 427px;
      margin: 83px 0 0 109px;
    }

    .el-carousel__indicators {
      display: none !important;
    }
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

      .logo-area {
        .logo {
          padding: 0 0 30px;
        }
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

          .ui-button__content {
            a {
              color: #385185;
            }
          }

          &:hover,
          &:visited {
            background-color: transparent;
            color: #385185;
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

        &:hover {
          color: #3897f0;
        }

        > a {
          color: #3897f0;
        }
      }
    }
  }
}
</style>
