<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="scss">
#app {
  background: #fafafa;
}
// html마다 태그 고유 속성{margin,padding 등}을 재정의 하는 css  / * 태그 고유의 속성만 정의
@import '@/styles/reset.scss';
// font 정의 css
@import "@/styles/fonts.scss";
// 라이브러리 css 리셋
@import "@/styles/libReset.scss";
</style>
