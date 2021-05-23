<!--
 * @Date: 2021-04-12 22:25:55
 * @Author: Kinsiy
 * @LastEditors: Kinsiy
 * @LastEditTime: 2021-04-13 00:04:03
 * @FilePath: \Vue-project\src\views\detail\childscompon\detailShop.vue
-->
<template>
  <div class="shop-info">
    <div class="shop-name-info">
      <img :src="shopInfo.shopLogo" alt="shop-icon" />
      <span>{{ shopInfo.name }}</span>
    </div>
    <div class="shop-extr-info">
      <div class="shop-sales">
        <span>{{ shopInfo.cSells }}</span
        ><span>总销量</span>
      </div>
      <div class="shop-commodity-num">
        <span>{{ shopInfo.cGoods }}</span
        ><span>全部宝贝</span>
      </div>
      <div class="shop-score">
        <ul>
          <li v-for="(scroe, index) of shopInfo.score" :key="index">
            <span>{{ scroe.name }}</span
            ><span :class="{ 'hight-scroe': scroe.isBetter }">{{
              scroe.score
            }}</span
            ><span :class="{ 'hight-scroe': scroe.isBetter }">{{
              descIsBetter(scroe.isBetter)
            }}</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="go-shop">
      <button><a :href="shopInfo.shopUrl">进店逛逛</a></button>
    </div>
  </div>
</template>

<script>
export default {
  name: "detailShop",
  props: {
    shopInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    descIsBetter(isBetter) {
      return isBetter ? "高" : "低";
    }
  }
};
</script>

<style scoped>
.shop-info {
  box-shadow: 0 5px rgba(214, 213, 213, 0.7);
}

.shop-name-info {
  display: flex;
  margin-top: 20px;
}

.shop-name-info > span {
  font-size: 24px;
  line-height: 80px;
  margin-left: 10px;
}

.shop-name-info img {
  border-radius: 50%;
  width: 60px;
  margin: 10px 0 10px 10px;
}

.shop-extr-info {
  display: flex;
  justify-content: space-around;
  text-align: center;
}

.shop-sales {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.shop-sales > span:first-child,
.shop-commodity-num > span:first-child {
  font-size: 24px;
}

.shop-commodity-num {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.shop-score {
  flex: 1.5;
}
.shop-info li {
  list-style: none;
}

.shop-sales span,
.shop-commodity-num span {
  display: block;
}
.shop-score > ul > li {
  display: flex;
  text-align: start;
}

.shop-score > ul > li > span {
  flex: 1;
  color: green;
}

.shop-score > ul > li > span:first-child {
  flex: 2;
  color: inherit;
}

.hight-scroe {
  color: red !important;
}

.go-shop {
  text-align: center;
}

.go-shop > button {
  margin: 10px 0;
  padding: 10px 30px;
  border-radius: 10px;
  border: none;
}

.go-shop > button:focus {
  outline: none;
  color: var(--color-tint);
}
</style>
