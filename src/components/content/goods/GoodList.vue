<!--
 * @Date: 2021-04-10 22:26:52
 * @Author: Kinsiy
 * @LastEditors: Kinsiy
 * @LastEditTime: 2021-04-12 17:53:57
 * @FilePath: \Vue-project\src\components\content\goods\GoodList.vue
-->
<template>
  <div class="good-list">
    <good-list-item
      v-for="(item, index) of goods"
      :goodItem="item"
      :key="index"
    ></good-list-item>
  </div>
</template>

<script>
import GoodListItem from "./GoodListItem.vue";
export default {
  name: "GoodList",
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: { GoodListItem },
  methods: {}
};
</script>

<style>
.good-list {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
</style>
