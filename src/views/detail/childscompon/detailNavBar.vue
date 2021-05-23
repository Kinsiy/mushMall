<!--
 * @Date: 2021-04-12 18:34:59
 * @Author: Kinsiy
 * @LastEditors: Kinsiy
 * @LastEditTime: 2021-04-15 17:30:35
 * @FilePath: \Vue-project\src\views\detail\childscompon\detailNavBar.vue
-->
<template>
  <nav-bar @leftClick="goBack" class="detail-nav">
    <template v-slot:nav-left>
      <img src="~assets/img/common/back.svg" alt="" />
    </template>
    <template v-slot:nav-center>
      <div
        v-for="(item, index) of titles"
        :key="index"
        :id="index"
        @click="centerClick"
        :class="{ tabActive: correctIndex == index }"
      >
        {{ item }}
      </div>
    </template>
  </nav-bar>
</template>

<script>
import NavBar from "components/common/navbar/navBar.vue";
export default {
  name: "detailNavBar",
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      correctIndex: 0
    };
  },
  components: {
    NavBar
  },
  methods: {
    goBack() {
      this.$router.back();
    },
    centerClick(event) {
      this.correctIndex = event.target.id;
      this.$emit("centerClick", event.target.id);
    }
  }
};
</script>

<style scoped>
.tabActive {
  color: var(--color-high-text);
}

.detail-nav {
  background-color: rgba(0, 0, 0, 0);
  color: var(--color-text);
}
</style>
