/*
 * @Date: 2021-04-01 16:36:11
 * @Author: Kinsiy
 * @LastEditors: Kinsiy
 * @LastEditTime: 2021-04-16 12:59:50
 * @FilePath: \Vue-project\src\main.js
 */
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import mitt from "mitt";
import store from "./store";
// import hooks from "@u3u/vue-hooks";

const app = createApp(App);
app.config.globalProperties.$bus = new mitt(); //绑定事件总线
app
  .use(router)
  .use(store)
  .mount("#app");
