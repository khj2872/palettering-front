<template>
  <div class="router-list-wrap">
    <!-- 홈피드 -->
    <router-link to="/main/homeFeed" class="router-list">
      <img src="/images/main/nav-home-on.png" v-if="routeName === 'homeFeed'" />
      <img src="/images/main/nav-home.png" v-else />
    </router-link>
    <!-- 탐색 -->
    <router-link to="/main/findFeed" class="router-list">
      <img
        src="/images/main/nav-compass-on.png"
        v-if="routeName === 'findFeed'"
      />
      <img src="/images/main/nav-compass.png" v-else />
    </router-link>
    <!-- 활동 -->
    <div class="router-list">
      <img src="/images/main/nav-heart.png" />
    </div>
    <!-- 내 프로필 -->
    <router-link to="/main/myProfileFeed" class="router-list my-profile">
      <img src="/images/main/nav-non-profile.png" />
    </router-link>
  </div>
</template>

<script>
export default {
  name: "RouterMenu",
  data() {
    return {
      routeName: "",
      photoUrl: "(/images/main/nav-non-profile.png)",
    };
  },
  mounted() {
    this.changeRouteName();
  },
  watch: {
    $route() {
      this.changeRouteName();
    },
  },
  methods: {
    // 현재 router 네임 확인
    changeRouteName() {
      const changeRoute = this.$router.currentRoute.name;
      this.routeName = changeRoute;
    },
  },
};
</script>

<style lang="scss">
.router-list-wrap {
  width: 100%;
  display: flex;

  .router-list {
    display: block;
    height: 23px;
    cursor: pointer;
    margin: 0 8.5px;

    //내 프로필
    &.my-profile {
      width: 23px;
      border-radius: 100%;
      background-color: #cccccc;
      // background-repeat: no-repeat;
      // background-position: center center;
      // background-size: cover;
      // background-image: this.proPhotoUrl;
      position: relative;

      &.router-link-active {
        &:before {
          content: "";
          width: 27px;
          height: 27px;
          border: 1px solid #000000;
          border-radius: 100%;
          position: absolute;
          top: -3px;
          left: -3px;
          display: block;
        }
      }
    }
  }
}
</style>
