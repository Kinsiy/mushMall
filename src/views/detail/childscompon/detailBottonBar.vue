<!--
 * @Date: 2021-04-15 10:33:01
 * @Author: Kinsiy
 * @LastEditors: Kinsiy
 * @LastEditTime: 2021-04-15 11:51:15
 * @FilePath: \Vue-project\src\views\detail\childscompon\detailBottonBar.vue
-->
<template>
  <div class="detail-bar">
    <div class="detail-bar-info">
      <button class="customer-service">
        <i class="fa fa-commenting-o" aria-hidden="true"></i>
        <span>客服</span>
      </button>
      <button class="shop">
        <i class="fa fa-ravelry" aria-hidden="true"></i>
        <span>店铺</span>
      </button>
      <button class="collect" @click="changeCollect">
        <i
          :class="{
            fa: true,
            'fa-star': !isO,
            'fa-star-o': isO,
            collecting: !isO
          }"
          aria-hidden="true"
        ></i>
        <span :class="{ collecting: !isO }">收藏</span>
      </button>
      <button class="shopCart" @click="addShopCat">
        <!-- <i class="fa fa-cart-arrow-down" aria-hidden="true"></i> -->
        <span>加入购物车</span>
      </button>
      <button class="buy-now">
        <!-- <i class="fa fa-money" aria-hidden="true"></i> -->
        <span>立即购买</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "detailBottonBar",
  data() {
    return {
      isO: true
    };
  },
  methods: {
    changeCollect() {
      this.isO = !this.isO;
    },
    addShopCat() {
      this.$emit("addShopCat");
    }
  }
};
</script>

<style scoped>
.detail-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 3em;
}

.detail-bar-info {
  display: flex;
  height: 100%;
}

.detail-bar-info button {
  flex: 1;
  min-width: max-content;
  border: none;
  outline: none;
}

.shopCart {
  background-color: rgb(247, 192, 55);
}

.buy-now {
  background-color: hotpink;
}

.collecting {
  color: mediumorchid;
}
</style>
