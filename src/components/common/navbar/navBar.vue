<!--
 * @Date: 2021-04-08 14:06:04
 * @Author: Kinsiy
 * @LastEditors: Kinsiy
 * @LastEditTime: 2021-04-15 18:05:03
 * @FilePath: \Vue-project\src\components\common\navbar\navBar.vue
-->
<template>
  <div class="nav-bar">
    <div class="nav-left" @click="leftClick">
      <slot name="nav-left"></slot>
    </div>
    <div class="nav-center">
      <slot name="nav-center"></slot>
    </div>
    <div class="nav-right">
      <slot name="nav-right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "navBar",
  methods: {
    leftClick() {
      this.$emit("leftClick");
    }
  }
};
</script>

<style>
.nav-bar {
  display: flex;
  /* background-color: var(--color-tint); */
  text-align: center;
  align-items: center;
  line-height: 3em;
  height: 3em;
}

.nav-left {
  flex: 1.5;
  display: flex;
  justify-content: center;
  height: 100%;
}

.nav-left > img {
  width: 50%;
}

.nav-center {
  /* color: white; */
  flex: 7;
  display: flex;
  justify-content: space-around;
}
.nav-right {
  flex: 1.5;
}
</style>
