/*
 * @Date: 2021-04-08 13:09:39
 * @Author: Kinsiy
 * @LastEditors: Kinsiy
 * @LastEditTime: 2021-04-14 15:58:53
 * @FilePath: \Vue-project\vue.config.js
 */
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        assets: "@/assets",
        common: "@/common",
        components: "@/components",
        network: "@/network",
        views: "@/views"
      }
    }
  }
};
