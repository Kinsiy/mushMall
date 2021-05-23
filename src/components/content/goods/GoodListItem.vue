<!--
 * @Date: 2021-04-10 22:27:04
 * @Author: Kinsiy
 * @LastEditors: Kinsiy
 * @LastEditTime: 2021-04-14 17:57:01
 * @FilePath: \Vue-project\src\components\content\goods\GoodListItem.vue
-->
<template>
  <div class="good-item">
    <img :src="goodItem.img" alt="" @load="ImgLoad" @click="itemClick" />
    <div class="item-info">
      <p>{{ goodItem.title }}</p>
      <span class="price">{{ goodItem.price }}</span>
      <span class="collect">{{ goodItem.cfav }}</span>
    </div>
  </div>
</template>

<script>
import { getCurrentInstance } from "vue";
export default {
  name: "GoodListItem",
  props: {
    goodItem: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    itemClick() {
      this.$router.push({ name: "detail", params: { iid: this.goodItem.iid } });
    },
    ImgLoad() {
      let path = this.$route.path;
      this.homeImgLoad.call(this, path);
    }
  },
  setup() {
    const internalInstance = getCurrentInstance();
    const bus = internalInstance.appContext.config.globalProperties.$bus;
    function homeImgLoad(path) {
      // console.log(internalInstance);
      if (path.indexOf("home") != -1) {
        bus.emit("homeImgLoad"); //事件触发
      } else if (path.indexOf("detail") != -1) {
        bus.emit("detailImgLoad");
      }
    }
    return {
      homeImgLoad
    };
  }
};
</script>

<style>
.good-item {
  /* flex: auto; */
  width: 48%;
}

.good-item > img {
  width: 100%;
  height: 88%;
  border-radius: 10px;
}
.item-info {
  font-size: 15px;
}

.item-info p {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
}

.item-info .price::before {
  content: "￥";
}

.item-info .price {
  color: var(--color-high-text);
}

.item-info .collect {
  padding-left: 20px;
  margin-left: 10px;
  background-image: url(~assets/img/common/collect.svg);
  background-size: contain;
  background-repeat: no-repeat;
}
</style>
