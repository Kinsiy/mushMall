/*
 * @Date: 2021-04-08 13:48:47
 * @Author: Kinsiy
 * @LastEditors: Kinsiy
 * @LastEditTime: 2021-04-16 11:15:59
 * @FilePath: \Vue-project\src\store\mutations.js
 */

export default {
  addCount(state, payload) {
    payload.count++;
  },
  addNewGood(state, payload) {
    state.shopCarList.push(payload);
  },
  changeCheck(state, payload) {
    for (let item of state.shopCarList) {
      if (payload.changeValue == undefined && item.iid == payload.iid) {
        item.checked = !item.checked;
        break;
      } else if (payload.changeValue != undefined) {
        item.checked = payload.changeValue;
      }
    }
  }
};
