<template>
  <div class="post-wrap">
    <div class="post-inner">
      <PostStep01 v-show="postStep===1" :getChildProps="getChildProps" />
      <PostStep02 v-show="postStep===2" :getChildProps="getChildProps" />
    </div>
    <div class="post-footer">
      <ui-button type="primary" class="btn btn-next" @click="next">다음</ui-button>
      <ui-button type="primary" class="btn btn-prev" @click="cancle" v-show="postStep > 1">취소</ui-button>
    </div>
  </div>
</template>

<script>
import PostStep01 from "@/components/main/postFeed/PostStep01.vue";
import PostStep02 from "@/components/main/postFeed/PostStep02.vue";

import { mapActions, mapGetters } from "vuex";
import * as post from "@/store/modules/post";

export default {
  name: "Post",
  components: {
    PostStep01,
    PostStep02
  },
  data: () => ({
    postStep: 1,
    postResourse: {}
  }),
  computed: {
    ...mapGetters({
      g_data: post.DATA,
      g_pictures: post.PICTURES
    })
  },
  methods: {
    ...mapActions({
      a_setData: post.SET_DATA,
      a_setPictures: post.SET_PICTURES
    }),
    getChildProps(key, val) {
      this.postResourse[key] = val;
    },
    cancle() {
      const result = confirm("게시글을 취소하시겠습니까?");
      if (result) {
        this.$router.push({
          name: "homeFeed"
        });
      }
    },
    next() {
      if (
        Object.keys(this.postResourse).length > 0 &&
        this.postResourse["pictures"].length > 0
      ) {
        const payload = {
          pictures: this.postResourse["pictures"]
        };
        this.a_setData(payload);
        this.postStep++;
      } else {
        alert("사진이나 동영상을 선택해주세요.");
      }
    }
  }
};
</script>

<style lang="scss" >
.post-wrap {
  .post-inner {
    padding: 5% 0;

    .post-opt-cont {
      .post-opt-tit {
        font-size: 1.5rem;
        padding-bottom: 20px;
      }
    }
  }

  .post-footer {
    .btn {
      width: 100%;
      height: 40px;
      border: 1px solid #3897f0;
      margin-bottom: 0.5%;

      &.btn-next {
        background-color: #3897f0;
        color: #ffffff;

        &:hover {
          background-color: #3897f0 !important;
        }
      }

      &.btn-prev {
        background-color: #ffffff;
        color: #3897f0;

        &:hover {
          background-color: #ffffff !important;
        }
      }
    }
  }
}
</style>