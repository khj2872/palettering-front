<template>
  <div class="post-opt-cont step02">
    <h3 class="post-opt-tit">게시글 작성</h3>
    <div class="select-picture-box">
      <div class="picture-item" v-for="item in g_pictures" :key="item.uid">
        <img :src="item.url" />
        <ui-button class="btn-tag" type="secondary">사람 태그하기</ui-button>
      </div>
      <span class="picture-count">
        {{g_pictures.length}}
      </span>
    </div>
    <div class="post-cont">
      <ui-button class="btn-location" type="secondary">위치 추가</ui-button>
      <el-input v-model="postTxt" type="textarea" placeholder="게시글을 작성해주세요" :rows="10" />
    </div>
  </div>
</template>

<script>

import { mapActions, mapGetters } from "vuex";
import * as post from "@/store/modules/post";

export default {
  name: "PostStep02",
  props: ["getChildProps"],
  data: () => ({
    // pictureData: g_pictures,
    postTxt: "",
    carouselSettings: {
      dots: false,
      arrows: true,
      touchMove: true,
      autoplay: true,
      autoplaySpeed: 3000
    }
  }),
  computed: {
    ...mapGetters({
      g_data: post.DATA,
      g_pictures: post.PICTURES
    })
  },
  created() {
    this.a_initData();
  },
  methods: {
    ...mapActions({
      a_initData: post.SET_INITIAL_DATA
    })
  }
};
</script>

<style lang="scss">
.post-opt-cont {
  &.step02 {
    .select-picture-box {
      display: flex;
      flex-wrap: wrap;

      .slick-slider {
        .slick-list {
          width: 1100px;
        }
      }

      .picture-item {
        flex: 1 1 100%;
        width: 100%;
        max-height: 1000px;
        min-height: 500px;
        margin: 0 0.5% 1%;
        overflow: hidden;
        border: 1px dashed #cccccc;
        position: relative;

        &:nth-of-type(5n) {
          margin-right: 0;
        }

        img {
          width: auto;
          height: auto;
          max-height: 100%;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
    }

    .post-cont {
      .el-textarea {
        .el-textarea__inner {
          padding: 20px 20px;
        }
      }
    }
  }
}
</style>