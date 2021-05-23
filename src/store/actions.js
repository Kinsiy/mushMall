/*
 * @Date: 2021-04-08 13:49:11
 * @Author: Kinsiy
 * @LastEditors: Kinsiy
 * @LastEditTime: 2021-04-16 12:40:21
 * @FilePath: \Vue-project\src\store\actions.js
 */
export default {
  addCartAction(content, payload) {
    let oldGood = content.state.shopCarList.find(
      (e, i, a) => e.iid == payload.iid
    );
    if (oldGood) {
      content.commit("addCount", oldGood);
    } else {
      payload.count = 1;
      content.commit("addNewGood", payload);
    }
  },
  changeCheckAction(content, payload) {
    // console.log(payload.changeValue);
    content.commit("changeCheck", payload);
  }
};
