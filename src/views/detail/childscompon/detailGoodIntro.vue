<!--
 * @Date: 2021-04-14 10:37:29
 * @Author: Kinsiy
 * @LastEditors: Kinsiy
 * @LastEditTime: 2021-04-14 11:55:00
 * @FilePath: \Vue-project\src\views\detail\childscompon\detailGoodIntro.vue
-->
<template>
  <div v-if="Object.keys(goodIntroInfo).length !== 0" class="good-intro">
    <div class="intro-desc">
      <div class="intro-desc-before"></div>
      <div class="desc">
        {{ goodIntroInfo.desc }}
      </div>
      <div class="intro-desc-after"></div>
    </div>
    <div class="intro-key">
      {{ goodIntroInfo.detailImage[0].key }}
    </div>

    <div class="intro-img">
      <img
        v-for="(img, index) of goodIntroInfo.detailImage[0].list"
        :src="img"
        :key="index"
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodIntro",
  props: {
    goodIntroInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>

<style scoped>
.good-intro {
  padding: 20px 0;
}
.intro-desc {
  padding: 0 15px;
}

.intro-desc .intro-desc-before,
.intro-desc .intro-desc-after {
  width: 40vw;
  height: 2px;
  background-color: #a3a3a5;
  position: relative;
}

.intro-desc .intro-desc-before {
  float: left;
}
.intro-desc .intro-desc-after {
  float: right;
}

.intro-desc .intro-desc-before::before,
.intro-desc .intro-desc-after::after {
  content: "";
  width: 5px;
  height: 5px;
  background-color: #333;
  position: absolute;
  bottom: 0;
}

.intro-desc .intro-desc-after::after {
  right: 0;
}

.intro-desc .desc {
  padding: 15px;
  font-size: 14px;
  color: #333;
}

.intro-key {
  padding: 10px;
  font-size: 20px;
}
</style>
