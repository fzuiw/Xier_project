import Vue from 'vue'
import VueRouter from 'vue-router'


import Login from '@/views/user/MyLogin.vue'
import AdLogin from '@/views/user/AdLogin.vue'
import Register from '@/views/user/Register.vue'
import Home from '@/views/home/MyHome.vue'
//import Project from '@/views/menus/Project.vue'
import User from '@/views/menus/User.vue'
// import Li from '@/views/test/listuuu.vue'
import ArticleDetail from '@/views/article-detail.vue'
import MyArticleDetail from '@/views/myarticle-detail.vue'
import Article from '@/views/menus/article.vue'
import HotArticle from '@/views/menus/hotarticle.vue'
import AddArticle from '@/views/menus/addarticle.vue'
import Adproject from '@/views/admenus/adproject.vue'
import Adiproject from '@/views/admenus/adiproject.vue'
import AdHome from '@/views/Admin/AdHome.vue'
import Admin from '@/views/admenus/Admin.vue'
import Upload from '@/views/menus/upload.vue'
import Edit from '@/views/menus/edit.vue'
import EditProject from '@/views/menus/editproject.vue'
import MyProject from '@/views/menus/myproject.vue'
import Search from '@/views/menus/searchhome.vue'
// import Q from '@/views/menus/qiandao2.vue'
// import Cal from '@/views/menus/rili.vue'
import { getToken } from '@/utils/token'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path:'/', redirect: '/login'},
    { path:'/login', component: Login },
    { path:'/regist', component: Register },
    { 
      path: '/home', 
      component: Home,
      redirect: '/home/project',
      children: [
        { path: 'project', component: Article },
        { path: 'hotproject', component: HotArticle },
        { path:'search', component: Search },
        { path: 'add', component: AddArticle },
        { path: 'user', component: User },
        
      ]
    },
    { path: '/edit', component: Edit },
    { path: '/editproject/:id', component: EditProject },
    // { path: '/editproject', component: EditProject },
    { path: '/myproject', component: MyProject },
    
    { path:'/adminLogin', component: AdLogin },
    { 
      path: '/admin', 
      component: AdHome,
      redirect: '/admin/project',
      children: [
        { path: 'iproject', component: Adiproject },
        { path: 'project', component: Adproject },
        { path: 'user', component: Admin },
      ]
    },
    { path:'/article-detail/:id', component: ArticleDetail },
    { path:'/myarticle-detail/:id', 
      component:  MyArticleDetail,
      // children: [
      //   { path: 'editproject', component: EditProject },
      // ]
    },
    // { path:'/test', component: Li },
    // { path:'/qiandao', component: Cal },
     { path:'/upload', component: Upload },
    
    
  ]
})

router.beforeEach((to, from, next) => {
  if(to.path === '/regist' || to.path === '/login' || to.path === '/adminLogin') {
    next()
  } else {
    if(getToken()) {
      next()
    }else {
      next('/login')
    }
  }
})
// router.beforeEach(function(to, from, next) {
//   if(pathArr.indexOf(to.path) !== -1) {
//       const token = localStorage.getItem('token')
//       if(token) {
//           next()
//       } else {
//           next('/login')
//       }
//   } else {
//       next()
//   }
// })
export default router
