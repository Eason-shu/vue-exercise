/*
 * @Author: EasonShu
 * @Date: 2023-10-26 13:38:07
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-10-26 15:54:45
 * @FilePath: \vue-manger\src\router\index.js
 */
import Vue from "vue";
import VueRouter from "vue-router";
import LoginViewVue from "../views/LoginView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login",
    component: LoginViewVue,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
