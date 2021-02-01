<template>
  <div class="mainFeed-wrap">
    <!-- 피드 영역 -->
    <div class="feed-box">
      <HomeFeedList v-for="(item, index) in 10" :key="index" />
    </div>
    <!-- 오른쪽 정보 영역 -->
    <div class="info-box">
      <HomeFeedProfile />
      <HomeFeedStory />
      <HomeFeedRec />
    </div>
  </div>
</template>

<script>
import HomeFeedList from "@/components/main/homeFeed/HomeFeedList.vue";
import HomeFeedProfile from "@/components/main/homeFeed/HomeFeedProfile.vue";
import HomeFeedStory from "@/components/main/homeFeed/HomeFeedStory.vue";
import HomeFeedRec from "@/components/main/homeFeed/HomeFeedRec.vue";

export default {
  name: "HomeFeed",
  props: [],
  components: { HomeFeedList, HomeFeedProfile, HomeFeedStory, HomeFeedRec },
  data() {
    return {
      command: ""
    };
  },
  methods: {
    dd() {
      // console.log(Vue)
      // vm.$set(vm.items, indexOfItem, newValue)
      // set(this.list, "message", "Foo2");
    }
  }
};
</script>

<style lang="scss">
.mainFeed-wrap {
  margin-top: 30px;
  display: flex;
  justify-content: space-between;

  // 피드부분
  .feed-box {
    width: 616px;
  }

  // 아이디,스토리,추천 부분
  .info-box {
    width: 292px;
    position: relative;
  }
}
</style>
