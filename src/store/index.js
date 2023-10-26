/*
 * @Author: EasonShu
 * @Date: 2023-10-26 13:38:07
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-10-26 16:56:47
 * @FilePath: \vue-manger\src\store\index.js
 */
import Vue from "vue";
import Vuex from "vuex";
import user from "./modules/user";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user,
  },
});
