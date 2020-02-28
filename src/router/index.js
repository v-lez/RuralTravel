// 配置路由的相关信息
import Vue from 'vue'
import VueRouter from 'vue-router'

// import Home from '../views/home/Home'
// 路由懒加载的使用，可以方便打包的时候分开打包，不至于调用大量路由的情况发生访问速度的问题
const Home = () => import('../views/home/Home.vue')
const City = () => import('../views/city/City.vue')
const Detail = () => import('../views/detail/Detail.vue')

// 1.通过Vue.use(插件：比如现在的vue-router) 在vue中任何的插件都要使用Vue.use()进行安装插件
Vue.use(VueRouter)

// 2.创建VueRouter对象
const routes = [
  // 重定向的重要性
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/city',
    component: City
  },
  {
    path: '/detail',
    component: Detail
  }
]
const router = new VueRouter({
  // routes对象：配置路由和组件之间的映射关系
  routes,
  // 使用模式的选择，去掉url中 # 的显示
  mode: 'history'
})

// 3.将router对象传入到vue实例中。才能使用路由功能
export default router
