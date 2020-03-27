<template>
  <div class="not-found">
    <span class="text">주소를 찾을 수 없습니다. 이전 페이지로 돌아갈까요?</span>
    <ui-button class="back" secondary @click="backBtn()">뒤로 가기</ui-button>
  </div>
</template>

<script>
export default {
  name: "NotFound",
  methods: {
    backBtn() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss">
.not-found {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;

  .text {
    display: block;
  }

  .ui-button {
    &.back {
      background-color: #3897f0;
      color: #ffffff;
      margin-top: 10px;

      &:hover {
        background-color: #3897f0 !important;
      }
    }
  }
}
</style>
