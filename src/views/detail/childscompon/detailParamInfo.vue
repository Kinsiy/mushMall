<!--
 * @Date: 2021-04-14 11:57:48
 * @Author: Kinsiy
 * @LastEditors: Kinsiy
 * @LastEditTime: 2021-04-14 20:18:49
 * @FilePath: \Vue-project\src\views\detail\childscompon\detailParamInfo.vue
-->
<template>
  <div v-if="Object.keys(itemParams).length != 0" class="param-info">
    <div class="params-title">{{ itemParams.info.key }}</div>
    <table class="param-info-table">
      <tr v-for="(item, index) of itemParams.info.set" :key="index">
        <th>{{ item.key }}</th>
        <td>{{ item.value }}</td>
      </tr>
    </table>

    <div class="params-title">{{ itemParams.rule.key }}</div>
    <table class="param-rule-table">
      <tr v-for="(item, index) of itemParams.rule.tables[0]" :key="index">
        <th>{{ item[0] }}</th>
        <td v-for="i in item.length - 1" :key="i">{{ item[i] }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "detailParamInfo",
  props: {
    itemParams: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>

<style scoped>
.param-info {
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
}

.params-title {
  margin: 20px 0;
  font-size: 16px;
  font-weight: bold;
}

.param-info table {
  color: var(--color-high-text);
  border-collapse: collapse;
  width: 85%;
}

.param-info table tr {
  border-top: 1px solid;
  border-bottom: 1px solid;
  height: 30px;
}

.param-info table th {
  min-width: 4em;
}
</style>
