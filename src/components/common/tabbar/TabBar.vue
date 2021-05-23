<!--
 * @Date: 2021-04-01 16:48:19
 * @Author: Kinsiy
 * @LastEditors: Kinsiy
 * @LastEditTime: 2021-04-12 12:50:02
 * @FilePath: \Vue-project\src\components\common\tabbar\TabBar.vue
-->
<template>
  <div class="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar"
};
</script>

<style>
.tab-bar {
  display: flex;
  justify-content: space-around;

  position: fixed;
  top: auto;
  bottom: 0;
  left: 0;
  right: 0;

  background-color: rgba(255, 250, 240, 0.9);

  box-shadow: 0 -1px rgba(192, 192, 192, 0.1);
}
</style>
