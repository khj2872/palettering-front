<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { detect } from "detect-browser";
import * as loginStore from "@/store/modules/login";
import { mapActions, mapGetters, mapMutations } from "vuex";

export default {
  name: "App",
  data() {
    return {};
  },
  created() {
    this.checkMobileDevice();
  },
  computed: {
    ...mapGetters({
      g_loginDevice: loginStore.DEVICE,
    }),
  },
  methods: {
    ...mapActions({
      setDevice: loginStore.SET_DEVICE,
    }),
    checkMobileDevice() {
      const device = detect();
      if (device.name !== "chrome") {
        this.$router.push({
          name: "browserLimit",
        });
      } else {
        this.setDevice(device);
      }
    },
  },
};
</script>

<style lang="scss">
// html마다 태그 고유 속성{margin,padding 등}을 재정의 하는 css  / * 태그 고유의 속성만 정의
@import "@/styles/reset.scss";
// font 정의 css
@import "@/styles/fonts.scss";
// 라이브러리 css 리셋
@import "@/styles/libReset.scss";
</style>
