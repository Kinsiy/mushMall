/*
 * @Date: 2021-04-12 18:02:17
 * @Author: Kinsiy
 * @LastEditors: Kinsiy
 * @LastEditTime: 2021-04-14 14:53:53
 * @FilePath: \Vue-project\src\network\detail.js
 */
import { request } from "./request";

export function getGoodDetail(iid) {
  return request({
    url: "/detail",
    params: {
      iid
    }
  });
}

export function getRecommendGoods() {
  return request({
    url: "/recommend"
  });
}

export class GoodInfo {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title;
    this.desc = itemInfo.desc;
    this.price = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice;
    this.disDesc = itemInfo.discountDesc;
    this.disColor = itemInfo.discountBgColor;
    this.columns = columns;
    this.services = services;
    this.nowPrice = itemInfo.highNowPrice;
  }
}
