<!--
 * @Date: 2021-04-08 15:06:33
 * @Author: Kinsiy
 * @LastEditors: Kinsiy
 * @LastEditTime: 2021-04-12 22:24:58
 * @FilePath: \Vue-project\src\views\detail\childscompon\detailSwiper.vue
-->
<template>
  <swiper class="detail-swiper">
    <swiper-item v-for="(item, index) of banners" :key="index">
      <img :src="item" @load="imageload" />
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";
export default {
  name: "detailSwiper",
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

<style scoped>
.detail-swiper {
  height: 280px;
}

img {
  width: 100%;
}
</style>
