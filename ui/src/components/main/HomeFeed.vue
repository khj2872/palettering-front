<template>
  <div class="mainFeed-wrap">
    <!-- 피드 영역 -->
    <div class="feed-box">
      <div class="feed-list">
        <div class="list-head">
          <div class="id-area">
            <span class="id-profile">
              <img src="/images/main/nav-non-profile.png" />
            </span>
            <span class="id-txt">
              no_id
            </span>
          </div>
          <ui-button type="secondary" class="opt-area">
            <span class="dot" />
            <span class="dot" />
            <span class="dot" />
          </ui-button>
        </div>
        <div class="list-visual">
          <img src="/images/main/no-picture.png" class="img" />
        </div>
        <div class="list-cont">
          <div class="cont-head"></div>
          <div class="cont-like"></div>
          <div class="cont-txt"></div>
          <div class="cont-comd-wrap">
            <el-input
              class="comd"
              v-model="command"
              placeholder="댓글 달기..."
            />
            <ui-button type="secondary" class="comd-btn">게시</ui-button>
          </div>
        </div>
      </div>
      <div class="feed-list">
        <div class="list-head">
          <div class="id-area">
            <span class="id-profile">
              <img src="/images/main/nav-non-profile.png" />
            </span>
            <span class="id-txt">
              no_id
            </span>
          </div>
          <ui-button type="secondary" class="opt-area">
            <span class="dot" />
            <span class="dot" />
            <span class="dot" />
          </ui-button>
        </div>
        <div class="list-visual">
          <img src="/images/main/no-picture.png" class="img" />
        </div>
        <div class="list-cont">
          <div class="cont-head"></div>
          <div class="cont-like"></div>
          <div class="cont-txt"></div>
          <div class="cont-comd-wrap">
            <el-input
              class="comd"
              v-model="command"
              placeholder="댓글 달기..."
            />
            <ui-button type="secondary" class="comd-btn">게시</ui-button>
          </div>
        </div>
      </div>
      <div class="feed-list">
        <div class="list-head">
          <div class="id-area">
            <span class="id-profile">
              <img src="/images/main/nav-non-profile.png" />
            </span>
            <span class="id-txt">
              no_id
            </span>
          </div>
          <ui-button type="secondary" class="opt-area">
            <span class="dot" />
            <span class="dot" />
            <span class="dot" />
          </ui-button>
        </div>
        <div class="list-visual">
          <img src="/images/main/no-picture.png" class="img" />
        </div>
        <div class="list-cont">
          <div class="cont-head"></div>
          <div class="cont-like"></div>
          <div class="cont-txt"></div>
          <div class="cont-comd-wrap">
            <el-input
              class="comd"
              v-model="command"
              placeholder="댓글 달기..."
            />
            <ui-button type="secondary" class="comd-btn">게시</ui-button>
          </div>
        </div>
      </div>
    </div>
    <!-- 정보 영역 -->
    <div class="info-box">
      <div class="profile-area">
        <router-link to="/main/myProfileFeed" class="profile-link">
          <div class="profile-photo"></div>
          <div class="profile-info">
            <span class="id">{{ id }}</span>
            <span class="name">{{ name }}</span>
          </div>
        </router-link>
      </div>
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
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeFeed",
  props: [],
  components: {},
  data() {
    return {
      id: "sdfds",
      name: "sdf",
      command: "",
    };
  },
  created() {},
  destroyed() {},
  mounted() {},
  watch: {},
  computed: {},
  methods: {},
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

    .feed-list {
      width: 100%;
      height: auto;
      background-color: #ffffff;
      border: 1px solid #dbdbdb;
      margin-bottom: 60px;

      .list-head {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 61px;
        padding: 0 16px;

        .id-area {
          display: flex;
          align-items: center;

          .id-profile {
            display: block;
            margin-right: 16px;
            width: 32px;
            height: 32px;

            img {
              width: 32px;
              height: 32px;
            }
          }

          .id-txt {
            font-size: 14px;
            color: #262626;
          }
        }

        .opt-area {
          display: flex;
          justify-content: space-around;
          width: 15px;
          min-width: auto;

          &:hover {
            background-color: transparent;
          }

          .dot {
            width: 3px;
            height: 3px;
            background-color: #262626;
            border-radius: 100%;
            display: block;
            margin: 0 2px;
          }
        }
      }

      .list-visual {
        min-height: 500px;
        background-color: #f1f1f1;
        display: flex;
        justify-content: center;
        align-items: center;

        .img {
        }
      }

      .list-cont {
        .cont-comd-wrap {
          height: 56px;
          padding: 0 20px 0 16px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 1px solid #efefef;

          .comd {
            .el-input__inner {
              border: none;
              padding: 0;
              height: 55px;
              line-height: 55px;
              color: #222222;
              font-size: 14px;
              border-radius: 0;
            }

            &::placeholder {
              font-size: 14px;
              color: #999999;
            }
          }

          .comd-btn {
            color: #3897f0;
            font-size: 14px;
            padding: 0 4px;
            min-width: auto;

            &:hover {
              background-color: transparent;
            }

            &.disabled {
              opacity: 0.3;
            }
          }
        }
      }
    }
  }

  // 아이디,스토리,추천 부분
  .info-box {
    width: 292px;
    position: relative;

    .profile-area {
      height: 61px;
      margin-bottom: 9px;

      .profile-link {
        display: flex;
        align-items: center;
        height: 61px;

        .profile-photo {
          margin: 0 14px 0 5px;
          width: 50px;
          height: 50px;
          background: url("/images/main/nav-non-profile.png") no-repeat center;
          background-size: cover;
        }

        .profile-info {
          display: flex;
          flex-direction: column;

          .id {
            font-size: 14px;
            color: #262626;
            margin-bottom: 4px;
          }

          .name {
            font-size: 12px;
            color: #999999;
          }
        }
      }
    }

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
