/*
 * @Date: 2021-04-08 13:48:58
 * @Author: Kinsiy
 * @LastEditors: Kinsiy
 * @LastEditTime: 2021-04-15 15:13:18
 * @FilePath: \Vue-project\src\store\getters.js
 */
export default {
  shopCartLength(state) {
    return state.shopCarList.length;
  },
  shopCarList(state) {
    return state.shopCarList;
  }
};
