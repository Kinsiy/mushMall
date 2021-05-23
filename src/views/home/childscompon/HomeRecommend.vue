<!--
 * @Date: 2021-04-08 18:17:31
 * @Author: Kinsiy
 * @LastEditors: Kinsiy
 * @LastEditTime: 2021-04-15 09:43:40
 * @FilePath: \Vue-project\src\views\home\childscompon\HomeRecommend.vue
-->
<template>
  <div id="animation-test">
    <div class="home-recommend home-recommend-left">
      <div v-for="(recommend, index) of recommends" :key="index">
        <a :href="recommend.link">
          <img :src="recommend.image" alt="" />
          <span>{{ recommend.title }}</span>
        </a>
      </div>
    </div>
    <div class="home-recommend home-recommend-right">
      <div v-for="(recommend, index) of recommends" :key="index">
        <a :href="recommend.link">
          <img :src="recommend.image" alt="" />
          <span>{{ recommend.title }}</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      parent
    };
  },
  mounted() {},
  methods: {}
};
</script>

<style scoped>
.home-recommend {
  display: flex;
  justify-content: space-around;
  padding-bottom: 10px;
  border-bottom: 8px #eeeeee solid;
}

.home-recommend > div {
  width: 25vw;
  text-align: center;
}

.home-recommend img {
  width: 70px;
}

.home-recommend span {
  display: block;
}

@keyframes move_in_place {
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(-100%);
  }
}

.home-recommend-left,
.home-recommend-right {
  animation-name: move_in_place;
  animation-duration: 5s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

#animation-test {
  display: flex;
  flex-wrap: nowrap;
}
</style>
