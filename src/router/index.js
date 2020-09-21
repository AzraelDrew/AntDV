/*
 * @Author       : yznaisy
 * @Date         : 2020-08-15 17:36:58
 * @LastEditors  : yznaisy
 * @LastEditTime : 2020-08-17 11:18:19
 * @FilePath     : \antdv\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import("../views/Home")
const Layout = () => import("../views/Layout")
const UserList = () => import("../views/User/UserList")
const WorkOrder = () => import("../views/Work/WorkOrder")
const Login = () => import("../views/User/Login")
const Error404 = () => import("../views/Error404")
Vue.use(VueRouter)

const routes = [{
    path: '/login',
    component: Login,
    meta: {
      title: "登录"
    }
  }, {
    path: '/',
    component: Layout,
    children: [
      // {
      //   path: '',
      //   redirect: "home"
      // }, 
      {
        path: '',
        component: Home,
        meta: {
          title: "数据驾驶舱"
        }
      },
      {
        path: 'userlist',
        component: UserList,
        meta: {
          model: "用户管理",
          title: "员工列表"
        }

      }, {
        path: 'orderlist',
        component: WorkOrder,
        meta: {
          model: "业务管理",
          title: "工单列表"
        }
      }
    ]
  },
  {
    path: '*',
    component: Error404
  }

]

const router = new VueRouter({
  routes
})

// 导航守卫
router.beforeEach((to, form, next) => {
  document.title = `AntDV-${to.meta.title}`;
  next()
})
export default router