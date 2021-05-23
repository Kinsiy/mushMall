/*
 * @Date: 2021-04-08 14:03:29
 * @Author: Kinsiy
 * @LastEditors: Kinsiy
 * @LastEditTime: 2021-04-14 15:28:55
 * @FilePath: \Vue-project\src\network\home.js
 */
import { request } from "./request";

export function getHomeMultidata() {
  return request({
    url: "/home/multidata"
  });
}

export function getHomeGoodsData(type, page) {
  return request({
    url: "/home/data",
    params: {
      type,
      page
    }
  });
}

export class ClassGoodList {
  constructor(list, page) {
    this.goodLists = [];
    if (page == "home") {
      for (let item of list) {
        let obj = {};
        obj.img = item.show.img;
        obj.title = item.title;
        obj.price = item.price;
        obj.cfav = item.cfav;
        obj.iid = item.iid;
        this.goodLists.push(obj);
      }
    } else if (page == "recommend") {
      for (let item of list) {
        let obj = {};
        obj.img = item.image;
        obj.title = item.title;
        obj.price = item.price;
        obj.cfav = item.cfav;
        obj.iid = item.item_id;
        this.goodLists.push(obj);
      }
    }
  }
}
