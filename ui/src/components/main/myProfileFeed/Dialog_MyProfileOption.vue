<template>
  <el-dialog
    :visible.sync="isDialog"
    class="myprofileopt-dialog"
    width="20%"
    :before-close="handleClose"
    append-to-body
    :show-close="false"
  >
    <ul class="router-link-wrap">
      <li v-for="(item,index) in router" :key="item + index">
        <ui-button
          class="btn-profile-router"
          type="secondary"
          v-if="index === 9"
          @click="handleClose"
        >{{item.name}}</ui-button>
        <ui-button v-else class="btn-profile-router" type="secondary">{{item.name}}</ui-button>
      </li>
    </ul>
  </el-dialog>
</template>

<script>
export default {
  name: "DialogMyProfileOption",
  props: ["onDialog", "getChildProps"],
  data: () => ({
    isDialog: false,
    router: [
      {
        name: "비밀번호 변경"
      },
      {
        name: "네임 태그"
      },
      {
        name: "앱 및 웹사이트"
      },
      {
        name: "알림"
      },
      {
        name: "공개 범위 및 보안"
      },
      {
        name: "로그인 활동"
      },
      {
        name: "Instagram에서 보낸 이메일"
      },
      {
        name: "문제 신고"
      },
      {
        name: "로그아웃"
      },
      {
        name: "취소"
      }
    ]
  }),
  watch: {
    onDialog(val) {
      this.isDialog = val;
    }
  },
  methods: {
    handleClose() {
      this.isDialog = false;
      this.getChildProps(false);
    }
  }
};
</script>

<style lang="scss">
.myprofileopt-dialog {
  .el-dialog {
    border-radius: 10px;

    .el-dialog__header {
      display: none;
    }

    .el-dialog__body {
      padding: 0;

      .router-link-wrap {
        width: 100%;

        li {
          border-bottom: 1px solid #dddddd;

          .btn-profile-router {
            width: 100%;
            height: 48px;
            font-weight: normal;
          }

          &:first-child {
            .btn-profile-router {
              border-radius: 10px 10px 0 0;
            }
          }

          &:last-child {
          border-bottom: none;

            .btn-profile-router {
              border-radius: 0 0 10px 10px;
            }
          }
        }
      }
    }
  }
}
</style>