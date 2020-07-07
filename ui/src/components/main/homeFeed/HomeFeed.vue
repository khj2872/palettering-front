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
            <span class="id-txt">no_id</span>
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
          <div class="cont-head">
            <div class="l-head">
              <button>
                <svg viewBox="0 -28 512.001 512" xmlns="http://www.w3.org/2000/svg" height="22px">
                  <path
                    d="m256 455.515625c-7.289062 0-14.316406-2.640625-19.792969-7.4375-20.683593-18.085937-40.625-35.082031-58.21875-50.074219l-.089843-.078125c-51.582032-43.957031-96.125-81.917969-127.117188-119.3125-34.644531-41.804687-50.78125-81.441406-50.78125-124.742187 0-42.070313 14.425781-80.882813 40.617188-109.292969 26.503906-28.746094 62.871093-44.578125 102.414062-44.578125 29.554688 0 56.621094 9.34375 80.445312 27.769531 12.023438 9.300781 22.921876 20.683594 32.523438 33.960938 9.605469-13.277344 20.5-24.660157 32.527344-33.960938 23.824218-18.425781 50.890625-27.769531 80.445312-27.769531 39.539063 0 75.910156 15.832031 102.414063 44.578125 26.191406 28.410156 40.613281 67.222656 40.613281 109.292969 0 43.300781-16.132812 82.9375-50.777344 124.738281-30.992187 37.398437-75.53125 75.355469-127.105468 119.308594-17.625 15.015625-37.597657 32.039062-58.328126 50.167969-5.472656 4.789062-12.503906 7.429687-19.789062 7.429687zm-112.96875-425.523437c-31.066406 0-59.605469 12.398437-80.367188 34.914062-21.070312 22.855469-32.675781 54.449219-32.675781 88.964844 0 36.417968 13.535157 68.988281 43.882813 105.605468 29.332031 35.394532 72.960937 72.574219 123.476562 115.625l.09375.078126c17.660156 15.050781 37.679688 32.113281 58.515625 50.332031 20.960938-18.253907 41.011719-35.34375 58.707031-50.417969 50.511719-43.050781 94.136719-80.222656 123.46875-115.617188 30.34375-36.617187 43.878907-69.1875 43.878907-105.605468 0-34.515625-11.605469-66.109375-32.675781-88.964844-20.757813-22.515625-49.300782-34.914062-80.363282-34.914062-22.757812 0-43.652344 7.234374-62.101562 21.5-16.441406 12.71875-27.894532 28.796874-34.609375 40.046874-3.453125 5.785157-9.53125 9.238282-16.261719 9.238282s-12.808594-3.453125-16.261719-9.238282c-6.710937-11.25-18.164062-27.328124-34.609375-40.046874-18.449218-14.265626-39.34375-21.5-62.097656-21.5zm0 0"
                  />
                </svg>
              </button>
              <button>
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 67.429 67.429"
                  xml:space="preserve"
                  height="22px"
                >
                  <g>
                    <path
                      d="M33.468,67.184C15.014,67.184,0,52.17,0,33.715S15.014,0.246,33.468,0.246c18.455,0,33.469,15.014,33.469,33.469 c0,5.621-1.421,11.161-4.116,16.076l4.608,17.2L50.58,62.475C45.408,65.559,39.511,67.184,33.468,67.184z M33.468,4.246 C17.219,4.246,4,17.466,4,33.715s13.219,29.469,29.468,29.469c5.582,0,11.021-1.574,15.729-4.554l0.74-0.468l11.835,3.171 l-3.243-12.1l0.419-0.72c2.609-4.484,3.988-9.602,3.988-14.799C62.936,17.466,49.717,4.246,33.468,4.246z"
                    />
                  </g>
                </svg>
              </button>
              <button>
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 512.001 512.001"
                  xml:space="preserve"
                  height="21px"
                >
                  <g>
                    <g>
                      <path
                        d="M507.608,4.395c-4.243-4.244-10.609-5.549-16.177-3.321L9.43,193.872c-5.515,2.206-9.208,7.458-9.42,13.395 c-0.211,5.936,3.101,11.437,8.445,14.029l190.068,92.181l92.182,190.068c2.514,5.184,7.764,8.455,13.493,8.455 c0.178,0,0.357-0.003,0.536-0.01c5.935-0.211,11.189-3.904,13.394-9.419l192.8-481.998 C513.156,15.001,511.851,8.638,507.608,4.395z M52.094,209.118L434.72,56.069L206.691,284.096L52.094,209.118z M302.883,459.907 l-74.979-154.599l228.03-228.027L302.883,459.907z"
                      />
                    </g>
                  </g>
                </svg>
              </button>
            </div>
            <div class="r-head">
              <button>
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 512 512"
                  xml:space="preserve"
                  height="24px"
                >
                  <g>
                    <g>
                      <path
                        d="M391.416,0H120.584c-17.778,0-32.242,14.464-32.242,32.242v460.413c0,7.016,3.798,13.477,9.924,16.895 c2.934,1.638,6.178,2.45,9.421,2.45c3.534,0,7.055-0.961,10.169-2.882l138.182-85.312l138.163,84.693 c5.971,3.669,13.458,3.817,19.564,0.387c6.107-3.418,9.892-9.872,9.892-16.875V32.242C423.657,14.464,409.194,0,391.416,0z M384.967,457.453l-118.85-72.86c-6.229-3.817-14.07-3.798-20.28,0.032l-118.805,73.35V38.69h257.935V457.453z"
                      />
                    </g>
                  </g>
                </svg>
              </button>
            </div>
          </div>
          <div class="cont-like">
            <span>좋아요</span>
            <span class="like-count">10</span>
            <span>개</span>
          </div>
          <div class="cont-txt">
            <div class="own-area">
              <div class="own-speech">
                <span class="own-id">my_id</span>
                <span class="own-txt">아무것도 입력할 수가 없네</span>
              </div>
            </div>
            <!-- <div class="follow-area"></div> -->
            <div class="feed-time">1일 전</div>
          </div>
          <div class="cont-comd-wrap">
            <el-input class="comd" v-model="command" placeholder="댓글 달기..." />
            <ui-button type="secondary" class="comd-btn" @click="dd">게시</ui-button>
          </div>
        </div>
      </div>
      <ul>
        <li v-for="item in list" :key="item">{{item}}</li>
      </ul>
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
import HomeFeedProfile from "@/components/main/homeFeed/HomeFeedProfile.vue";
import HomeFeedStory from "@/components/main/homeFeed/HomeFeedStory.vue";
import HomeFeedRec from "@/components/main/homeFeed/HomeFeedRec.vue";

export default {
  name: "HomeFeed",
  props: [],
  components: { HomeFeedProfile, HomeFeedStory, HomeFeedRec },
  data() {
    return {
      command: "",
      list: { message: "Foo", dd: "Foo2", zz: "Foo3" }
    };
  },
  created() {},
  destroyed() {},
  mounted() {},
  watch: {},
  computed: {},
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
      }

      .list-cont {
        .cont-head {
          display: flex;
          justify-content: space-between;
          padding: 0 16px;
          height: 40px;
          align-items: center;

          .l-head {
            button {
              margin-right: 17px;
            }
          }
        }

        .cont-like {
          padding: 0 16px;
          margin-bottom: 10px;
          color: #000000;
          font-size: 14px;

          .like-count {
            padding-left: 3px;
          }
        }

        .cont-txt {
          padding: 0 16px 15px;
          font-size: 14px;

          .own-area {
            .own-speech {
              color: #000000;

              .own-id {
                padding-right: 10px;
              }
            }
          }

          .feed-time {
            margin-top: 10px;
            color: #999999;
            font-size: 10px;
          }
        }

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
  }
}
</style>
