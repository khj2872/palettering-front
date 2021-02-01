// 로그인 전
import LoginView from '@/views/login/LoginView.vue'
import PasswdFindView from '@/views/login/PasswdFindView.vue'
import JoinView from '@/views/login/JoinView.vue'
// 로그인 후
import PostView from '@/views/main/PostView.vue'
import MainView from '@/views/main/MainView.vue'
import HomeFeedView from '@/views/main/HomeFeedView.vue'
import FindFeedView from '@/views/main/FindFeedView.vue'
import MyProfileFeedView from '@/views/main/MyProfileFeedView.vue'

// 브라우저 제한 및 주소 제한
import NotFound from '@/views/NotFound.vue';
import BrowserLimit from '@/views/BrowserLimit.vue';

export const routes = [{
  path: '/',
  redirect: {
    name: 'login'
  }
},
// 로그인
{
  path: '/login',
  name: "login",
  component: LoginView,
  meta: {
    title: "palettering :: 로그인",
  }
},
// 비밀번호찾기
{
  path: '/login/passwdFind',
  name: "passwdFind",
  component: PasswdFindView,
  meta: {
    title: "palettering :: 비밀번호찾기",
  }
},
// 가입하기
{
  path: '/login/join',
  name: "join",
  component: JoinView,
  meta: {
    title: "palettering :: 가입하기",
  }
},
// 메인
{
  path: '/main',
  component: MainView,
  children: [
    {
      path: '/',
      redirect: {
        name: 'homeFeed'
      }
    },
    {
      path: 'post',
      name: 'post',
      component: PostView,
      meta: {
        title: "palettering :: 게시글작성",
      }
    },
    {
      path: 'home',
      name: 'homeFeed',
      component: HomeFeedView,
      meta: {
        title: "palettering :: 홈피드",
      }
    },
    {
      path: 'find',
      name: 'findFeed',
      component: FindFeedView,
      meta: {
        title: "palettering :: 탐색",
      }
    },
    {
      path: 'myProfile',
      name: 'myProfileFeed',
      component: MyProfileFeedView,
      meta: {
        title: "palettering :: 내프로필",
      }
    },
  ]
},
{
  path: '/limit',
  name: 'browserLimit',
  component: BrowserLimit,
  meta: {
    title: "palettering :: 제한 브라우저",
    // metaTags: [{
    //   name: 'description',
    //   content: 'The home page of our example app.'
    // }, ]
  }
},
{
  path: '*',
  name: 'notFound',
  component: NotFound,
  meta: {
    title: "palettering :: 페이지를 찾을 수 없습니다",
    // metaTags: [{
    //   name: 'description',
    //   content: 'The home page of our example app.'
    // }, ]
  }
}
]