/*
 * @Date: 2021-04-08 13:47:35
 * @Author: Kinsiy
 * @LastEditors: Kinsiy
 * @LastEditTime: 2021-04-15 13:57:20
 * @FilePath: \Vue-project\src\store\index.js
 */
// import Vuex from "vuex";
import { createStore } from "vuex";
import mutations from "@/store/mutations.js";
import actions from "@/store/actions.js";
import getters from "@/store/getters.js";

// Vue.config.devtools = process.env.NODE_ENV === "development";
const state = {
  shopCarList: []
};

const store = createStore({
  state,
  mutations,
  actions,
  getters
});

export default store;
