<!--
 * @Date: 2021-04-08 13:05:07
 * @Author: Kinsiy
 * @LastEditors: Kinsiy
 * @LastEditTime: 2021-04-08 13:39:42
 * @FilePath: \Vue-project\vue-project\src\components\context\maintabbar\maintabbar.vue
-->
<template>
  <tab-bar>
    <tab-bar-item path="/home">
      <template v-slot:img>
        <i class="fa fa-home"></i>
      </template>
      <template v-slot:desc>
        <span>首页</span>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <template v-slot:img>
        <i class="fa fa-th"></i>
      </template>
      <template v-slot:desc>
        <span>分类</span>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/shopcart">
      <template v-slot:img>
        <i class="fa fa-shopping-cart"></i>
      </template>
      <template v-slot:desc>
        <span>购物车</span>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <template v-slot:img>
        <i class="fa fa-user"></i>
      </template>
      <template v-slot:desc>
        <span>我的</span>
      </template>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import { TabBar, TabBarItem } from "components/common/tabbar";
export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem
  }
};
</script>

<style></style>
