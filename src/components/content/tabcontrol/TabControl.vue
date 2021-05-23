<!--
 * @Date: 2021-04-08 22:40:11
 * @Author: Kinsiy
 * @LastEditors: Kinsiy
 * @LastEditTime: 2021-04-11 11:55:39
 * @FilePath: \Vue-project\src\components\content\tabcontrol\TabControl.vue
-->
<template>
  <div class="tab-control" @click="tabClick">
    <div
      v-for="(item, index) of titles"
      :key="index"
      :index="index"
      :class="{ tabActive: correctIndex == index }"
    >
      <span :index="index">{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      correctIndex: 0
    };
  },
  methods: {
    tabClick(event) {
      this.correctIndex = event.target.getAttribute("index");
      this.$emit("tabClick", event.target.getAttribute("index"));
    }
  }
};
</script>

<style>
.tab-control {
  display: flex;
  /* margin-bottom: 13px; */
  justify-content: space-around;

  background-color: var(--color-background);
  height: 2em;
  position: sticky;
  top: 3em;
}

.tab-control > div {
  flex: 1;
  text-align: center;
}

.tab-control span {
  padding: 0 5px 3px 5px;
}

.tabActive > span {
  color: var(--color-high-text);
  border-bottom: var(--color-high-text) solid 2px;
}
</style>
