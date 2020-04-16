<template>
  <div class="rec-area">
    <div class="rec-head">
      <span class="rec-tit">회원님을 위한 추천</span>
      <span class="rec-txt">모두보기</span>
    </div>
    <div class="rec-cont">
      <div class="cont-list">
        <div class="list-info">
          <div class="info-status"></div>
          <div class="info-txt">
            <span class="id">id</span>
            <span class="txt">누구누구님이 팔로우합니다</span>
          </div>
        </div>
        <ui-button type="secondary" class="list-follow">팔로우</ui-button>
      </div>
      <div class="cont-list">
        <div class="list-info">
          <div class="info-status"></div>
          <div class="info-txt">
            <span class="id">id</span>
            <span class="txt">누구누구님이 팔로우합니다</span>
          </div>
        </div>
        <ui-button type="secondary" class="list-follow">팔로우</ui-button>
      </div>
      <div class="cont-list">
        <div class="list-info">
          <div class="info-status"></div>
          <div class="info-txt">
            <span class="id">id</span>
            <span class="txt">누구누구님이 팔로우합니다</span>
          </div>
        </div>
        <ui-button type="secondary" class="list-follow">팔로우</ui-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeFeedRec",
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
    .rec-area {
      height: 198px;
      border: 1px solid #dbdbdb;
      background: #ffffff;
      border-radius: 3px;
      padding: 0 17px;

      .rec-head {
        height: 42px;
        align-items: center;
        display: flex;
        justify-content: space-between;

        .rec-tit {
          font-size: 16px;
          letter-spacing: -1.2px;
          color: #999999;
        }

        .rec-txt {
          font-size: 14px;
          color: #262626;
          letter-spacing: -1.2px;
        }
      }

      .rec-cont {
        .cont-list {
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin: 12px 0;

          .list-info {
            display: flex;
            align-items: center;

            .info-status {
              background: url("/images/main/nav-non-profile.png") no-repeat
                center;
              background-size: 27px 27px;
              height: 30px;
              width: 30px;
              margin-right: 12px;
            }

            .info-txt {
              display: flex;
              flex-direction: column;

              .id {
                font-size: 14px;
                color: #262626;
                letter-spacing: -1px;
                margin-bottom: 3px;
              }

              .txt {
                font-size: 11px;
                color: #999999;
                letter-spacing: -0.75px;
              }
            }
          }

          .list-follow {
            font-size: 12px;
            color: #3897f0;
            font-weight: bold;
            min-width: 0px;
            height: 20px;
            padding: 0 0.3rem;

            &:hover {
              background: transparent;
            }
          }
        }
      }
    }
  }
}
</style>
