<template>
  <div class="myProfileFeed-wrap">
    <div class="profile-box">
      <div class="photo-area">
        <ui-button class="photo" type="secondary">
          <img src="/images/main/no-picture.png" />
        </ui-button>
      </div>
      <div class="status-area">
        <div class="id-status">
          <div class="id-name">my_id</div>
          <ui-button type="secondary" class="btn-pfopt">프로필 편집</ui-button>
          <ui-button type="secondary" class="btn-pfopt-more">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 377.22 377.22"
              width="19px"
            >
              <g>
                <g>
                  <path
                    d="M365.22,142.01h-38.8c-1.2-3.2-2-6-3.2-8.8c-1.2-2.8-2.4-6-4-8.8l27.6-27.6c4.8-4.8,4.8-12.4,0-16.8l-48.8-49.6 c-4.8-4.8-12.4-4.8-16.8,0l-27.6,27.6c-2.8-1.6-5.6-2.8-8.8-4c-2.8-1.2-6-2.4-8.8-3.2v-38.8c0-6.8-5.2-12-12-12h-70 c-6.8,0-12,5.2-12,12v38.8c-3.2,1.2-6,2-8.8,3.2c-2.8,1.2-6,2.4-8.8,4l-27.6-27.6c-4.8-4.8-12.4-4.8-16.8,0l-49.6,49.2 c-4.8,4.8-4.8,12.4,0,16.8l27.6,27.6c-1.6,2.8-2.8,5.6-4,8.8c-1.2,2.8-2.4,6-3.2,8.8h-38.8c-6.8,0-12,5.2-12,12v70 c-0.4,6.8,5.2,12,11.6,12h38.8c1.2,3.2,2,6,3.2,8.8c1.2,2.8,2.4,6,4,8.8l-27.2,27.6c-4.8,4.8-4.8,12.4,0,16.8l49.2,49.2 c4.8,4.8,12.4,4.8,16.8,0l27.6-27.6c2.8,1.6,5.6,2.8,8.8,4c2.8,1.2,6,2.4,8.8,3.2v38.8c0,6.8,5.2,12,12,12h70c6.8,0,12-5.2,12-12 v-38.8c3.2-1.2,6-2,8.8-3.2s6-2.4,8.8-4l27.6,27.6c4.8,4.8,12.4,4.8,16.8,0l49.2-49.2c4.8-4.8,4.8-12.4,0-16.8l-27.6-27.6 c1.6-2.8,2.8-5.6,4-8.8c1.2-2.8,2.4-6,3.2-8.8h38.8c6.8,0,12-5.2,12-12v-69.6C377.22,147.21,372.02,142.01,365.22,142.01z M354.02,210.81h-36c-5.6,0-10.4,4-11.6,9.6c-1.2,4.8-2.8,9.6-4.8,14.4c-2,5.2-4.4,9.6-6.8,14c-2.8,4.8-2,10.8,2,14.4l25.2,25.2 l-32.4,32.4l-25.2-25.2c-4-4-10.8-4.8-15.2-1.2c-4,2.4-8.4,4.4-13.2,6.4c-4.8,2-9.6,3.6-14.8,5.2c-5.2,1.6-8.8,6.4-8.8,11.6v36 h-46.4v-36c0-5.6-4-10.4-9.6-11.6c-4.8-1.2-9.6-2.8-14.4-4.8c-5.2-2-9.6-4.4-14-6.8c-4.8-2.8-10.8-2-14.4,2l-25.2,25.2l-32.4-32.4 l25.2-25.2c4-4,4.8-10.8,1.2-15.2c-2.4-4-4.4-8.4-6.4-13.2s-3.6-9.6-5.2-14.8c-1.6-5.2-6.4-8.8-11.6-8.8h-36v-46h0.4h36 c5.6,0,10.4-4,11.6-9.6c1.2-4.8,2.8-9.6,4.8-14.4c2-5.2,4.4-9.6,6.8-14c2.8-4.8,2-10.8-2-14.4l-25.2-25.2l32.4-32.4l25.2,25.2 c4,4,10.8,4.8,15.2,1.2c4-2.4,8.4-4.4,13.2-6.4c4.8-2,9.6-3.6,14.8-5.2c5.2-1.6,8.8-6.4,8.8-11.6v-36h46v36c0,5.6,4,10.4,9.6,11.6 c4.8,1.2,9.6,2.8,14.4,4.8c5.2,2,9.6,4.4,14,6.8c4.8,2.8,10.8,2,14.4-2l25.2-25.2l32.4,32.4l-25.2,25.2c-4,4-4.8,10.8-1.2,15.2 c2.4,4,4.4,8.4,6.4,13.2c2,4.8,3.6,9.6,5.2,14.8c1.6,5.2,6.4,8.8,11.6,8.8h36V210.81z"
                  />
                </g>
              </g>
              <g>
                <g>
                  <path
                    d="M238.82,138.41c-12.8-12.8-30.4-20.8-50-20.8c-19.6,0-37.2,8-50,20.8c-12.8,12.8-20.8,30.4-20.8,50c0,19.6,8,37.2,20.8,50 s30.4,20.8,50,20.8c19.6,0,37.2-8,50-20.8s20.8-30.4,20.8-50C259.62,168.81,251.62,151.21,238.82,138.41z M221.62,221.61 c-8.4,8.4-20,13.6-32.8,13.6s-24.4-5.2-32.8-13.6c-8.4-8.4-13.6-20-13.6-32.8c0-12.8,5.2-24.4,13.6-32.8 c8.4-8.4,20-13.6,32.8-13.6s24.4,5.2,32.8,13.6c8.4,8.4,13.6,20,13.6,32.8S230.02,213.21,221.62,221.61z"
                  />
                </g>
              </g>
            </svg>
          </ui-button>
        </div>
        <div class="follow-status">
          <div class="status">게시물<b>19</b></div>
          <ui-button type="secondary" class="status"
            >팔로워 <b>264</b></ui-button
          >
          <ui-button type="secondary" class="status"
            >팔로우 <b>223</b></ui-button
          >
        </div>
        <div class="intro-status">
          <div class="name">닉네임</div>
          <div class="intro">상태명</div>
          <div class="website">웹사이트</div>
        </div>
      </div>
    </div>
    <div class="cont-tab-box">
      <el-tabs v-model="tabActive" @tab-click="tabHandle" class="tab-area">
        <el-tab-pane name="posted">
          <span slot="label">
            <svg
              height="14"
              viewBox="0 0 24 24"
              width="14"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m23.649 4.778c-6.481-3.862-6.743-4.718-7.489-4.113l-4.162 3.346-4.16-3.346c-.747-.603-1.002.248-7.487 4.112-.442.278-.47.912-.059 1.229l3.806 2.936-3.806 2.937c-.413.319-.381.952.059 1.229l3.869 2.434c.563 5.167-2.45 1.99 7.423 7.86.236.134.518.13.746 0l7.017-4.031c.648-.372.268-1.026.376-3.83l3.867-2.432c.442-.278.47-.912.059-1.229l-3.807-2.937 3.807-2.936c.413-.318.382-.952-.059-1.229zm-11.653 1.056c2.648 1.505 4.215 2.508 5.185 3.11-.969.604-2.522 1.597-5.18 3.095-2.66-1.498-4.214-2.49-5.183-3.093.979-.626 2.535-1.655 5.178-3.112zm-4.681-3.665 3.373 2.713-5.306 3.156-3.323-2.563zm-1.935 7.678 5.308 3.157-3.373 2.712-5.256-3.306zm12.902 8.438-6.268 3.601-6.294-3.602v-1.799l1.25.786c.803.505 1.15-.487 5.03-3.396 3.937 2.95 4.234 3.894 5.03 3.396l1.252-.788zm-1.598-2.569-3.373-2.712 5.307-3.157 3.323 2.563zm1.935-7.679-5.308-3.156 3.373-2.711 5.257 3.306z"
              />
            </svg>
            게시물
          </span>
          <div class="tab-cont posted">
            게시물 내용
          </div>
        </el-tab-pane>
        <el-tab-pane name="saved">
          <span slot="label">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 512 512"
              height="14"
            >
              <g>
                <g>
                  <path
                    d="M391.416,0H120.584c-17.778,0-32.242,14.464-32.242,32.242v460.413c0,7.016,3.798,13.477,9.924,16.895 c2.934,1.638,6.178,2.45,9.421,2.45c3.534,0,7.055-0.961,10.169-2.882l138.182-85.312l138.163,84.693 c5.971,3.669,13.458,3.817,19.564,0.387c6.107-3.418,9.892-9.872,9.892-16.875V32.242C423.657,14.464,409.194,0,391.416,0z M384.967,457.453l-118.85-72.86c-6.229-3.817-14.07-3.798-20.28,0.032l-118.805,73.35V38.69h257.935V457.453z"
                  />
                </g>
              </g>
            </svg>
            저장됨
          </span>
          <div class="tab-cont saved">
            저장됨 내용
          </div>
        </el-tab-pane>
        <el-tab-pane name="tagged">
          <span slot="label">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="14"
              height="14"
              viewBox="0 0 44.502 44.502"
            >
              <g>
                <g>
                  <path
                    d="M9.862,35.638h24.779c0-5.546-3.863-10.203-9.113-11.604c2.75-1.248,4.668-4.013,4.668-7.229 c0-4.388-3.559-7.942-7.942-7.942c-4.387,0-7.943,3.557-7.943,7.942c0,3.219,1.916,5.98,4.668,7.229 C13.725,25.435,9.862,30.092,9.862,35.638z"
                  />
                  <path
                    d="M1.5,14.169c0.828,0,1.5-0.672,1.5-1.5V4.333h8.336c0.828,0,1.5-0.672,1.5-1.5c0-0.828-0.672-1.5-1.5-1.5H2.775 C1.244,1.333,0,2.577,0,4.108v8.561C0,13.497,0.67,14.169,1.5,14.169z"
                  />
                  <path
                    d="M41.727,1.333h-8.562c-0.827,0-1.5,0.672-1.5,1.5c0,0.828,0.673,1.5,1.5,1.5h8.336v8.336c0,0.828,0.673,1.5,1.5,1.5 s1.5-0.672,1.5-1.5v-8.56C44.502,2.579,43.256,1.333,41.727,1.333z"
                  />
                  <path
                    d="M43.002,30.333c-0.828,0-1.5,0.672-1.5,1.5v8.336h-8.336c-0.828,0-1.5,0.672-1.5,1.5s0.672,1.5,1.5,1.5h8.56 c1.53,0,2.776-1.246,2.776-2.776v-8.56C44.502,31.005,43.83,30.333,43.002,30.333z"
                  />
                  <path
                    d="M11.336,40.169H3v-8.336c0-0.828-0.672-1.5-1.5-1.5c-0.83,0-1.5,0.672-1.5,1.5v8.56c0,1.53,1.244,2.776,2.775,2.776h8.561 c0.828,0,1.5-0.672,1.5-1.5S12.165,40.169,11.336,40.169z"
                  />
                </g>
              </g>
            </svg>
            태그됨
          </span>
          <div class="tab-cont tagged">
            태그됨 내용
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyProfileFeed",
  data() {
    return {
      tabActive: "posted",
    };
  },
  computed: {},
  methods: {
    tabHandle(tab, e) {
      console.log(tab);
      console.log(e);
    },
  },
};
</script>

<style lang="scss">
.myProfileFeed-wrap {
  .profile-box {
    padding: 30px 0 0;
    display: flex;
    align-items: center;

    .photo-area {
      margin: 0 100px 0 70px;

      .photo {
        width: 150px;
        height: 150px;
        border-radius: 100%;
        padding: 0;
        min-width: auto;

        .ui-button__content {
          width: 150px;
          height: 150px;
          overflow: hidden;
        }

        &:hover {
          background: transparent;
        }

        img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
      }
    }

    .status-area {
      .id-status {
        display: flex;
        align-items: center;
        margin-bottom: 20px;

        .id-name {
          font-size: 28px;
          color: #262626;
          padding-right: 20px;
          font-weight: 300;
        }

        .btn-pfopt {
          min-width: auto;
          padding: 0;
          width: 94px;
          height: 30px;
          line-height: 28px;
          background-color: #ffffff;
          border: 1px solid #dbdbdb;
          font-size: 14px;
          color: #262626;

          &:hover {
            background: #ffffff;
          }
        }

        .btn-pfopt-more {
          margin-left: 15px;
          padding: 0;
          min-width: auto;
          height: 19px;

          .ui-ripple-ink {
            display: none !important;
          }

          &:hover {
            background: transparent;
          }
        }
      }

      .follow-status {
        display: flex;
        align-items: center;
        margin-bottom: 25px;

        .status {
          min-width: auto;
          padding: 0;
          height: auto;
          font-size: 16px;
          color: #262626;
          margin-right: 41px;
          font-weight: normal;

          .ui-ripple-ink {
            display: none !important;
          }

          b {
            padding-left: 5px;
          }

          &:hover {
            background: transparent;
          }
        }
      }

      .intro-status {
        font-size: 16px;
        color: #262626;

        > div {
          margin-bottom: 5px;
        }

        .name {
          font-weight: bold;
        }
      }
    }
  }

  .cont-tab-box {
    margin-top: 44px;

    .tab-area {
      .el-tabs__header {
        margin: 0;

        .el-tabs__nav-wrap {
          margin-bottom: 0;
          margin-top: -1px;

          &:after {
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 1px;
            background-color: #dbdbdb;
            z-index: 1;
          }
          .el-tabs__nav-scroll {
            display: flex;
            justify-content: center;

            .el-tabs__nav {
              .el-tabs__active-bar {
                position: absolute;
                top: 0;
                bottom: auto;
                height: 1px;
                background-color: #000000;
              }

              .el-tabs__item {
                padding: 0 30px;
                height: 52px;
                line-height: 52px;
                font-size: 12px;
                  font-weight: bold;
                color: #8e8e8e;

                &.is-active {
                  color: #262626;

                  > span {
                    svg {
                      fill: #262626;
                    }
                  }
                }

                > span {
                  display: flex;
                  align-items: center;

                  svg {
                    fill: #8e8e8e;
                    margin-right: 6px;
                  }
                }
              }
            }
          }
        }
      }

      .el-tabs__content {
      }
    }
  }
}
</style>
