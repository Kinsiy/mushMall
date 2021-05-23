<!--
 * @Date: 2021-04-15 18:37:12
 * @Author: Kinsiy
 * @LastEditors: Kinsiy
 * @LastEditTime: 2021-04-16 11:55:49
 * @FilePath: \Vue-project\src\views\shopcart\childcomponents\cartGoodLists.vue
-->
<template>
  <div class="cart-good-list">
    <ul>
      <li
        class="cart-good-list-item"
        v-for="(item, index) of shopCarList"
        :key="index"
      >
        <input
          type="checkbox"
          :checked="item.checked"
          name=""
          id=""
          @change="checkChange(item.iid)"
        />
        <img :src="item.image" alt="商品图片" @load="cartImgload" />
        <div class="good-detail-info">
          <div class="good-detail-title">{{ item.title }}</div>
          <div class="good-detail-desc">{{ item.desc }}</div>
          <div class="good-detail-extr">
            <span>{{ item.price }}</span
            ><span>{{ item.count }}</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { getCurrentInstance } from "vue";
export default {
  name: "cartGoodLists",
  props: {
    shopCarList: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    checkChange(iid) {
      this.$store.dispatch("changeCheckAction", {
        iid: iid,
        changeValue: undefined
      });
    },
    cartImgload() {
      // console.log(this.$route.path);
      this.cartImgLoad(this.$route.path);
    }
  },
  setup() {
    const internalInstance = getCurrentInstance();
    const bus = internalInstance.appContext.config.globalProperties.$bus;
    function cartImgLoad(path) {
      // console.log(internalInstance);
      if (path.indexOf("shopcart") != -1) {
        bus.emit("shopcartImgLoad"); //事件触发
      }
    }
    return {
      cartImgLoad
    };
  }
};
</script>

<style>
.cart-good-list {
  padding: 10px 0;
}

.cart-good-list-item {
  display: flex;
  margin: 10px 10px;
  padding-bottom: 15px;
  position: relative;
  border-bottom: pink solid 2px;
}

.cart-good-list-item input {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.cart-good-list-item img {
  width: 20vw;
  height: 25vw;
  object-fit: cover;
  margin-left: 20px;
}
.good-detail-info {
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding-left: 15px;
  justify-content: space-between;
}

.good-detail-info > div:first-child {
  font-size: 20px;
}

.good-detail-title {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.good-detail-desc {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
}

.good-detail-extr {
  display: flex;
  justify-content: space-between;
}

.good-detail-extr > span:first-child {
  color: var(--color-high-text);
}

.good-detail-extr > span:first-child::before {
  content: "￥";
  color: var(--color-high-text);
}

.good-detail-extr > span::before {
  content: "x";
  color: var(--color-text);
}
</style>
