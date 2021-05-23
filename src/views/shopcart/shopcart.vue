<!--
 * @Date: 2021-04-05 01:59:45
 * @Author: Kinsiy
 * @LastEditors: Kinsiy
 * @LastEditTime: 2021-04-16 12:40:04
 * @FilePath: \Vue-project\src\views\shopcart\shopcart.vue
-->
<template>
  <div class="shop-car">
    <nav-bar class="shop-car-bar">
      <template v-slot:nav-center>
        <div>购物车({{ shopCartLength }})</div>
      </template>
    </nav-bar>
    <scroll
      :probeType="3"
      class="good-lists-scorll"
      @scroll="scrollPos"
      ref="scroll"
    >
      <cart-good-lists :shopCarList="shopCarList"></cart-good-lists>
    </scroll>
    <backtop
      @click="backTopClick"
      v-show="backTopIsShow"
      class="back-top"
    ></backtop>
    <total-price :shopCarList="shopCarList"></total-price>
  </div>
</template>

<script>
import { getCurrentInstance } from "vue";
import NavBar from "components/common/navbar/navBar.vue";
import cartGoodLists from "./childcomponents/cartGoodLists";
import TotalPrice from "./childcomponents/totalPrice.vue";
import Scroll from "components/common/scroll/scroll.vue";
import Backtop from "components/content/backtop/backtop.vue";
import { backTopMixin } from "common/mixin.js";
import { mapGetters } from "vuex";
import { debounce } from "@/common/utils.js";
export default {
  name: "shoppcart",
  mixins: [backTopMixin],
  data() {
    return {
      backTopIsShow: false
    };
  },
  components: {
    NavBar,
    cartGoodLists,
    TotalPrice,
    Scroll,
    Backtop
  },
  methods: {
    scrollPos(position) {
      this.backTopIsShow = position.y < -200;
      // console.log(this.backTopIsShow);
    }
  },
  computed: {
    ...mapGetters(["shopCartLength", "shopCarList"])
  },
  setup() {
    const detail = getCurrentInstance(); //当前组件实例
    const bus = detail.appContext.config.globalProperties.$bus;
    return {
      bus
    };
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 200);
    this.bus.on("shopcartImgLoad", () => {
      refresh();
    });
  }
};
</script>

<style scoped>
.shop-car {
  position: relative;
  height: 100vh;
}

.shop-car-bar {
  background-color: var(--color-tint);
  color: #fff;
  /* font-weight: bold; */
}

.good-lists-scorll {
  position: absolute;
  top: 3em;
  left: 0;
  right: 0;
  bottom: 5em;
  overflow: hidden;
}

.back-top {
  transform: translateY(-75%);
}
</style>
