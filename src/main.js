import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// 引入element-ui
import ElementUI from "element-ui";
// 引入element-ui样式
import "element-ui/lib/theme-chalk/index.css";
// 引入tailwindcss样式
import "../src/css/tailwindcss.css";
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  ElementUI,
  render: (h) => h(App),
}).$mount("#app");
