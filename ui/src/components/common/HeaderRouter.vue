<template>
  <div class="router-list-wrap">
    <!-- 홈피드 -->
    <router-link to="/main/post" class="router-list">
      <img
        src="/images/svg/post_on.svg"
        height="24px"
        v-if="routeName === 'post' && alarmPopover === false"
      />
      <img v-else src="/images/svg/post_off.svg" height="24px" />
    </router-link>
    <!-- 홈피드 -->
    <router-link to="/main/home" class="router-list">
      <img
        src="/images/svg/home_filled.svg"
        height="23px"
        v-if="routeName === 'homeFeed' && alarmPopover === false"
      />
      <img src="/images/svg/home.svg" height="23px" v-else />
    </router-link>
    <!-- 탐색 -->
    <router-link to="/main/find" class="router-list">
      <img
        src="/images/svg/compass_filled.svg"
        height="23px"
        v-if="routeName === 'findFeed' && alarmPopover === false"
      />
      <img src="/images/svg/compass.svg" height="23px" v-else />
    </router-link>
    <!-- 활동 -->
    <div class="router-list">
      <el-popover
        placement="bottom"
        width="517"
        trigger="click"
        v-model="alarmPopover"
        popper-class="alarm-popover"
      >
        <span slot="reference">
          <img src="/images/svg/heart.svg" height="23px" v-if="alarmPopover === false" />
          <img src="/images/svg/heart_filled.svg" height="23px" v-else />
        </span>
        <AlarmFeed />
      </el-popover>
    </div>
    <!-- 내 프로필 -->
    <router-link
      to="/main/myProfile"
      class="router-list my-profile"
      :class="{
        active: alarmPopover === false && routeName === 'myProfileFeed'
      }"
    >
      <img src="/images/main/nav-non-profile.png" />
    </router-link>
  </div>
</template>

<script>
import AlarmFeed from "@/components/main/alarmFeed/AlarmFeed.vue";

export default {
  name: "RouterMenu",
  data() {
    return {
      routeName: "",
      photoUrl: "(/images/main/nav-non-profile.png)",
      alarmPopover: false
    };
  },
  components: { AlarmFeed },
  mounted() {
    this.changeRouteName();
  },
  watch: {
    $route() {
      this.changeRouteName();
    }
  },
  methods: {
    // 현재 router 네임 확인
    changeRouteName() {
      const changeRoute = this.$router.currentRoute.name;
      this.routeName = changeRoute;
    }
  }
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

      &.active {
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
