<template>
  <div class="profile-area">
    <router-link to="/main/myProfileFeed" class="profile-link">
      <div class="profile-photo"></div>
      <div class="profile-info">
        <span class="id">{{ id }}</span>
        <span class="name">{{ name }}</span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "HomeFeedProfile",
  data() {
    return {
      id: "sdfds",
      name: "sdf",
    };
  },
  computed: {},
  methods: {},
};
</script>

<style lang="scss">
.mainFeed-wrap {
  .info-box {
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
  }
}
</style>
