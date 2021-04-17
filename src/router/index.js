import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: "home",
    component: Home
  }, {
    path: "/home/detail/:id",
    name: "homeDetail",
    component: () => import("../views/home-detail")
  },
  // {
  //   path: "/home1",
  //   name: "home1",
  //   redirect: {
  //     name: "home1Detail"
  //   },
  //   component: Home,
  //   children: [
  //     {
  //       path: "index",
  //       name: "home1Index",
  //       component: () => import("..views/Home")
  //     },
  //     {
  //       path: "detail/:id",
  //       name: "home1Detail",
  //       component: () => import("../views/home-detail")
  //     }
  //   ]
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
