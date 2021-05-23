<!--
 * @Date: 2021-04-08 14:51:19
 * @Author: Kinsiy
 * @LastEditors: Kinsiy
 * @LastEditTime: 2021-04-08 14:56:43
 * @FilePath: \Vue-project\vue-project\src\components\common\swiper\swiperItem.vue
-->
<template>
  <div class="slide">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Slide"
};
</script>

<style scoped>
.slide {
  width: 100%;
  flex-shrink: 0;
}
.slide img {
  width: 100%;
}
</style>
