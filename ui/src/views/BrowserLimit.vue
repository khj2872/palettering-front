<template>
  <div class="browser-limit">브라우저는 크롬만 가능합니다.</div>
</template>

<script>
export default {
  name: "BrowserLimit",
  data() {
    return {};
  },
  computed: {},
  methods: {}
};
</script>

<style lang="scss">
.browser-limit {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
}
</style>
