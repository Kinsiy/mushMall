<!--
 * @Date: 2021-04-05 00:58:05
 * @Author: Kinsiy
 * @LastEditors: Kinsiy
 * @LastEditTime: 2021-04-12 12:52:02
 * @FilePath: \Vue-project\src\components\common\tabbar\TabBarItem.vue
-->
<template>
  <div class="tab-bar-item" @click="ItemClick">
    <div class="img" :class="{ active: isActive }">
      <slot name="img"></slot>
      <slot name="act-img"></slot>
    </div>
    <div class="name" :class="{ active: isActive }">
      <slot name="desc"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBar-Item",
  props: {
    path: String
  },
  methods: {
    ItemClick() {
      return this.$router.replace(this.path);
    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle() {
      this.isActive ? { color: "pink" } : { color: "black" };
    }
  }
};
</script>

<style>
.tab-bar-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}

.tab-bar-item .name {
  display: block;
}

.tab-bar-item .active {
  color: salmon;
}
</style>
