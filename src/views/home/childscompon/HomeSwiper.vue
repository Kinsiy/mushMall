<!--
 * @Date: 2021-04-08 15:06:33
 * @Author: Kinsiy
 * @LastEditors: Kinsiy
 * @LastEditTime: 2021-04-12 14:28:05
 * @FilePath: \Vue-project\src\views\home\childscompon\HomeSwiper.vue
-->
<template>
  <swiper>
    <swiper-item v-for="(item, index) in banners" :key="index">
      <a :href="item.link">
        <img :src="item.image" @load="imageload" />
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";
export default {
  name: "HomeSwiper",
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      }
    }
  },

  methods: {
    imageload() {
      if (!this.isLoad) {
        this.$emit("swiperload");
        this.isLoad = true;
      }
    },
    stopTimer() {
      this.$refs.swiper.stopTimer();
    },
    startTimer() {
      if (this.$refs.swiper) {
        this.$refs.swiper.startTimer();
      }
    }
  },
  data() {
    return {
      isLoad: false
    };
  }
};
</script>

<style>
img {
  width: 100%;
}
</style>
