<template>
  <div class="findFeed-wrap">
    <div class="title-area">
      <h2 class="title">팔로우할 만한 계정 둘러보기
        <a class="look-all" href="#">모두 보기</a>
      </h2>
    </div>
    <div class="slide-area">
    <VueSlickCarousel :arrows="true">
      <div class="card">
        <div class="card-item">
          <ul>
            <li class="item-image"><a href=""><img /></a></li>
            <li class="item-id"><a href="">abcd</a></li>
            <li class="item-content">bb님 외 2명이 팔로우합니다</li>
            <li class="item-button"><button>팔로우</button></li>
          </ul>
        </div>
        <div class="card-item">
          <ul>
            <li><a href="" class="item-image"><img /></a></li>
            <li class="item-id">abcd</li>
            <li class="item-content">bb님 외 2명이 팔로우합니다</li>
            <li class="item-button"><button>팔로우</button></li>
          </ul>
        </div>
        <div class="card-item">
          <ul>
            <li><a href="" class="item-image"><img /></a></li>
            <li class="item-id">abcd</li>
            <li class="item-content">bb님 외 2명이 팔로우합니다</li>
            <li class="item-button"><button>팔로우</button></li>
          </ul>
        </div>
        <div class="card-item">
          <ul>
            <li><a href="" class="item-image"><img /></a></li>
            <li class="item-id">abcd</li>
            <li class="item-content">bb님 외 2명이 팔로우합니다</li>
            <li class="item-button"><button>팔로우</button></li>
          </ul>
        </div>
      </div>
      <div class="card">2</div>
    </VueSlickCarousel>
  </div>
  <div class="title-area">
    <h2 class="title">탐색 탭</h2>
  </div>
  <div class="research-area">
    <div class="research-content">
      <div class="research-image">
        <a href=""><img src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/93989635_234080394506384_2662523410979459209_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=1&_nc_ohc=cx1jxYVRHXgAX-6amyi&oh=2fb5ebab3864e20b109f8ca831411d3d&oe=5ECE4667&ig_cache_key=MjI5NDIzMDI3MzAzMTk4NzU4Mg%3D%3D.2"></a>
        <div class="hover-image"></div>
      </div>
      <div class="research-image">
        <a href=""><img src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/93989635_234080394506384_2662523410979459209_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=1&_nc_ohc=cx1jxYVRHXgAX-6amyi&oh=2fb5ebab3864e20b109f8ca831411d3d&oe=5ECE4667&ig_cache_key=MjI5NDIzMDI3MzAzMTk4NzU4Mg%3D%3D.2"></a>
      </div>
      <div class="research-image">
        <a href=""><img src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/93989635_234080394506384_2662523410979459209_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=1&_nc_ohc=cx1jxYVRHXgAX-6amyi&oh=2fb5ebab3864e20b109f8ca831411d3d&oe=5ECE4667&ig_cache_key=MjI5NDIzMDI3MzAzMTk4NzU4Mg%3D%3D.2"></a>
      </div>
    </div>
    <div class="research-content">
      <div class="research-image">
        <a href=""><img src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/94269256_3802933746443593_9201545759239189593_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=101&_nc_ohc=DIEkyewnMnYAX_G5WX4&oh=f8411a42ea5202d9e6b4b94452608735&oe=5ECDC249&ig_cache_key=MjI5NTY3NDg4OTAwNzc3MjM1Mg%3D%3D.2"></a>
      </div>
      <div class="research-image">
        <a href=""><img src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s750x750/94365305_2549598895356858_1177959310947225753_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=1&_nc_ohc=9SrPkIwFI_YAX9wtxIJ&oh=60ca1ef5345d5262cb418f1554cef781&oe=5ECFD166&ig_cache_key=MjI5NTY4MTk5NDEyNTAxNjQ2MA%3D%3D.2"></a>
      </div>
      <div class="research-image">
        <a href=""><img src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/93989635_234080394506384_2662523410979459209_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=1&_nc_ohc=cx1jxYVRHXgAX-6amyi&oh=2fb5ebab3864e20b109f8ca831411d3d&oe=5ECE4667&ig_cache_key=MjI5NDIzMDI3MzAzMTk4NzU4Mg%3D%3D.2"></a>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'

  export default {
    name: 'FindFeed',
    components: {
      VueSlickCarousel
    },
    data() {
      return {
        carouselSettings: {
          dots: false,
          arrows: true,
          touchMove: true,
          autoplay: true,
          autoplaySpeed: 3000,
        }
      }
    }
  }
</script>

<style lang="scss">
  .findFeed-wrap {
    margin-top: 30px;

    .title-area {
      margin-bottom: 16px;
    }

    .title {
      color: #8e8e8e;
      font-size: 14px;
      font-weight: 600;
      line-height: 18px;
      text-align: left;
    }

    .look-all {
      display: block;
      -webkit-box-flex: 0;
      -webkit-flex-grow: 0;
      -ms-flex-positive: 0;
      flex-grow: 0;
      float: right;
      font-size: 14px;
      font-weight: 600;
      color: #0095f6;
    }

    &:visited {
      color: #0095f6;
    }

    .slide-area {
      width: 953px;
      padding: 0 24px;
      margin-bottom: 80px;

      .card {
        display: flex;
        .card-item {
          height: 198px;
          width: 176px;
          padding: 20px;
          border: 1px solid #dbdbdb;
          border-radius: 4px;
          display: inline-block;
          margin-right: 25px;
          text-align: center;
        }
        .item-image {
          width: 56px;
          height: 56px;
          border: 1px solid #dbdbdb;
          border-radius: 50%;
          display: block;
          margin: 0 auto;
        }
        .item-id {
          margin-top: 16px;
          margin-bottom: 8px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          font-size: 14px;
        }
        .item-content {
          color: #8e8e8e;
          font-size: 12px;
          margin-bottom: 8px;
        }
        .item-button button {
          width: 56px;
          height: 30px;
          border: 1px solid transparent;
          background-color: #0095f6;
          border-radius: 4px;
          color: #fff;
          font-size: 14px;
        }
      }

      .slick-prev:before, .slick-next:before {
        color: gray;
      }
    }

    .research-area {
      width: 100%;
      .research-content {
        flex-direction: column;
        -webkit-box-flex: 0;
        -webkit-flex: 0 0 auto;
        -ms-flex: 0 0 auto;
        flex: 0 0 auto;
        width: 100%;
      }
      .research-image {
        position: relative;
        width: calc(33.3333% - 28px);
        display: block;
        float: left;
        margin: 0 42px 28px 0;
        overflow: hidden;
        &:last-child {
          margin: 0;
          float: right;
        }
        img {
          width: 292px;
          height: 292px;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
          object-fit: cover;
        }
      }
    }
  }
</style>