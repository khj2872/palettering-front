<template>
  <div class="story-area">
    <div class="story-head">
      <span class="head-tit">스토리</span>
      <span class="head-txt">모두보기</span>
    </div>
    <perfect-scrollbar class="story-cont">
      <div class="cont-list">
        <div class="list-status"></div>
        <div class="list-info">
          <span class="id">id</span>
          <span class="time">몇시간전</span>
        </div>
      </div>
      <div class="cont-list">
        <div class="list-status"></div>
        <div class="list-info">
          <span class="id">id</span>
          <span class="time">몇시간전</span>
        </div>
      </div>
      <div class="cont-list">
        <div class="list-status"></div>
        <div class="list-info">
          <span class="id">id</span>
          <span class="time">몇시간전</span>
        </div>
      </div>
      <div class="cont-list">
        <div class="list-status"></div>
        <div class="list-info">
          <span class="id">id</span>
          <span class="time">몇시간전</span>
        </div>
      </div>
      <div class="cont-list">
        <div class="list-status"></div>
        <div class="list-info">
          <span class="id">id</span>
          <span class="time">몇시간전</span>
        </div>
      </div>
    </perfect-scrollbar>
  </div>
</template>

<script>
export default {
  name: "HomeFeedStory",
  data() {
    return {};
  },
  computed: {},
  methods: {},
};
</script>

<style lang="scss">
.mainFeed-wrap {
  .info-box {
    .story-area {
      height: 223px;
      border: 1px solid #dbdbdb;
      background: #ffffff;
      border-radius: 3px;
      padding: 0 17px;
      margin-bottom: 12px;

      .story-head {
        display: flex;
        height: 42px;
        align-items: center;
        justify-content: space-between;

        .head-tit {
          font-size: 16px;
          letter-spacing: -1.2px;
          color: #999999;
        }

        .head-txt {
          font-size: 14px;
          color: #262626;
          letter-spacing: -1.2px;
        }
      }

      .story-cont {
        height: 179px;

        .cont-list {
          height: 40px;
          display: flex;
          align-items: center;

          .list-status {
            width: 42px;
            height: inherit;
            background: url("/images/main/nav-non-profile.png") no-repeat center;
            background-size: 27px 27px;
            background-color: #ffffff;
            margin-right: 9px;
          }

          .list-info {
            display: flex;
            flex-direction: column;

            .id {
              font-size: 14px;
              color: #262626;
              letter-spacing: -1px;
              margin-bottom: 3px;
            }

            .time {
              font-size: 10px;
              color: #999999;
              letter-spacing: -0.75px;
            }
          }
        }
      }
    }
  }
}
</style>
