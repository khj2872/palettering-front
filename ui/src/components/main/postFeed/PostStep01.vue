<template>
  <div class="post-opt-cont step01">
    <h3 class="post-opt-tit">사진 선택</h3>
    <el-upload
      action="#"
      :file-list="picture"
      list-type="picture-card"
      :auto-upload="false"
      :limit="10"
      multiple
      accept="image/png, image/jpeg, video/webm, video/ogg"
      class="post-picture-upload"
      :on-change="change"
      :on-remove="change"
    >
      <span v-if="picture.length === 10">더이상 추가할 수 없습니다.</span>
      <i slot="trigger" class="el-icon-plus" v-else />
    </el-upload>
    <ui-button class="btn-delete-all" v-if="picture.length >= 1" @click="allRemove">모두 삭제</ui-button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import * as post from "@/store/modules/post";

export default {
  name: "PostStep01",
  props: ["getChildProps"],
  data: () => ({
    picture: []
  }),
  methods: {
    ...mapActions({
      a_setData: post.SET_DATA,
      a_setPictures: post.SET_PICTURES
    }),
    change(file, fileList) {
      this.getChildProps("pictures", fileList);
      // this.picture = fileList;
      // this.a_setPictures(fileList);
    },
    allRemove() {
      // this.picture = [];
      // this.a_setPictures(fileList);
    }
  }
};
</script>

<style lang="scss">
.post-opt-cont {
  &.step01 {
    .post-picture-upload {
      display: flex;
      flex-direction: column;

      .el-upload-list {
        flex: 0 0 100%;
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;

        .el-upload-list__item {
          width: 19%;
          height: 190px;
          margin: 0 0.55% 1%;

          &:nth-of-type(5n) {
            margin-right: 0;
          }

          img {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: auto;
            height: 100%;
          }
        }
      }

      .el-upload {
        width: 100%;
        height: 250px;
        line-height: normal;
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }
    }

    .btn-delete-all {
      width: 100%;
      margin-top: 1%;
      height: 40px;
    }
  }
}
</style>