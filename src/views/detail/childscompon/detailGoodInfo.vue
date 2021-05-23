<!--
 * @Date: 2021-04-12 19:25:04
 * @Author: Kinsiy
 * @LastEditors: Kinsiy
 * @LastEditTime: 2021-04-14 20:36:28
 * @FilePath: \Vue-project\src\views\detail\childscompon\detailGoodInfo.vue
-->
<template>
  <div class="good-info">
    <h2>{{ goodItem.title }}</h2>
    <div class="good-price">
      <span id="price">{{ goodItem.price }}</span
      ><span id="oldPrice">{{ goodItem.oldPrice }}</span
      ><span id="disDesc" :style="{ backgroundColor: goodItem.disColor }">{{
        goodItem.disDesc
      }}</span>
    </div>
    <ul class="good-note">
      <li v-for="(li, index) of goodItem.columns" :key="index">{{ li }}</li>
    </ul>
    <ul class="good-ext-info">
      <li v-for="(item, index) of goodItem.services" :key="index">
        <img :src="item.icon" alt="" /><span>{{ item.name }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "DetailGoodInfo",
  props: {
    goodItem: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>

<style scoped>
.good-info > h2 {
  font-size: 20px;
  margin: 10px 0;
}

#price {
  color: var(--color-high-text);
  font-size: 22px;
}

#oldPrice {
  font-size: 14px;
  text-decoration-line: line-through;
  margin-left: 4px;
  /* vertical-align: sub; */
}

#disDesc {
  color: aliceblue;
  margin-left: 4px;
  vertical-align: top;
  border-radius: 5px;
}

.good-note,
.good-ext-info {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.good-note {
  line-height: 0%;
  padding: 10px 0 3px 0;
  box-shadow: 0 3px rgba(214, 213, 213, 0.7);
}

.good-ext-info {
  padding: 10px 0;
  box-shadow: 0 5px rgba(214, 213, 213, 0.7);
}

.good-note > li,
.good-ext-info > li {
  min-width: max-content;
  list-style: none;
  margin: 7px 0;
}

.good-ext-info {
  padding: 8px 0;
}

.good-ext-info img {
  width: 1em;
  vertical-align: text-bottom;
}

.good-ext-info span {
  font-size: 16px;
}
</style>
