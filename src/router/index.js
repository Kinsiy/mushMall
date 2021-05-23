/*
 * @Date: 2021-04-01 16:36:11
 * @Author: Kinsiy
 * @LastEditors: Kinsiy
 * @LastEditTime: 2021-04-12 18:01:13
 * @FilePath: \Vue-project\src\router\index.js
 */
import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/home/home.vue";
import category from "../views/category/category.vue";
import shopcart from "../views/shopcart/shopcart.vue";
import profile from "../views/profile/profile.vue";
import detail from "../views/detail/detail.vue";

const routes = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    name: "Home",
    component: Home
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: "/category",
    name: "Category",
    component: category
  },
  {
    path: "/shopcart",
    name: "Shopcart",
    component: shopcart
  },
  {
    path: "/profile",
    name: "Profile",
    component: profile
  },
  {
    path: "/detail/:iid",
    name: "detail",
    component: detail
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
