<template>
  <div class="header">
    <div class="logo-box">
      <router-link to="/main/home" class="router-list">
        <Logo :width="'110px'" />
      </router-link>
    </div>
    <div class="search-box">
      <el-input v-model="keyword" placeholder="검색" clearable>
        <div slot="prefix" class="search-icon">
          <img src="/images/main/header-search.png" />
        </div>
      </el-input>
    </div>
    <div class="router-box">
      <HeaderRouter />
    </div>
  </div>
</template>

<script>
import Logo from "@/components/common/Logo.vue";
import HeaderRouter from "@/components/common/HeaderRouter.vue";
export default {
  name: "Header",
  data() {
    return {
      keyword: ""
    };
  },
  components: { Logo, HeaderRouter },
  computed: {},
  methods: {}
};
</script>

<style lang="scss">
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 953px;
  height: 100%;
  margin: 0 auto;

  .logo-box {
    margin-top: 8px;
  }

  .search-box {
    .el-input {
      font-size: 14px;

      .el-input__inner {
        height: 28px;
        line-height: 28px;
        background-color: #fafafa;
        border-radius: 3px;
        width: 215px;
      }

      .el-input__prefix {
        left: 12px;

        .search-icon {
          margin-top: 8px;
        }
      }

      .el-input__suffix {
        .el-input__suffix-inner {
          .el-input__icon {
            line-height: 28px;
          }
        }
      }
    }
  }
}
</style>
