<!--
 * @Date: 2021-04-01 16:36:11
 * @Author: Kinsiy
 * @LastEditors: Kinsiy
 * @LastEditTime: 2021-04-15 10:30:20
 * @FilePath: \Vue-project\src\App.vue
-->
<template>
  <router-view v-slot="{ Component }">
    <transition name="router-fade" mode="out-in">
      <keep-alive exclude="detail">
        <component :is="Component" />
      </keep-alive>
    </transition>
  </router-view>
  <main-tab-bar class="main-tab-bar"></main-tab-bar>
</template>

<script>
import MainTabBar from "components/content/maintabbar/maintabbar.vue";
export default {
  name: "App",
  components: {
    MainTabBar
  }
};
</script>

<style scoped>
@import "./assets/css/base.css";
@import "./assets/font-awesome-4.7.0/css/font-awesome.min.css";

.main-tab-bar {
  height: 3em;
}
</style>
