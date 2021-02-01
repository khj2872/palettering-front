<template>
  <div class="main-layout">
    <!-- 공통 헤더 영역 -->
    <div class="header-layout">
      <Header />
    </div>
    <!-- 컨텐츠 영역 -->
    <perfect-scrollbar class="cont-layout" :options="options">
      <router-view class="cont-wrap" />
    </perfect-scrollbar>
  </div>
</template>

<script>
import Header from "@/components/common/Header.vue";

export default {
  name: "MainView",
  data() {
    return {
      options: {
        wheelSpeed: 0.8,
        swipeEasing: true
      }
    };
  },
  components: { Header },
  computed: {},
  methods: {}
};
</script>

<style lang="scss">
.main-layout {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fafafa;

  .header-layout {
    width: 100%;
    height: 54px;
    background-color: #ffffff;
    border-bottom: 1px solid #dbdbdb;
    display: inline-flex;
    align-items: center;
    position: fixed;
    top: 0;
    z-index: 99;
  }

  .cont-layout {
    margin-top: 54px;
    height: calc(100vh - 54px);
    width: 100%;
    overflow: auto;

    .cont-wrap {
      width: 953px;
      margin: 0 auto;
      padding: 20px 0;
    }
  }
}
</style>
