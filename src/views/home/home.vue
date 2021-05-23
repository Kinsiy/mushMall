<!--
 * @Date: 2021-04-05 01:56:48
 * @Author: Kinsiy
 * @LastEditors: Kinsiy
 * @LastEditTime: 2021-05-20 12:10:16
 * @FilePath: \Vue-project\src\views\home\home.vue
-->
<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:nav-center>
        <div>购物街</div>
      </template>
    </nav-bar>
    <tab-control
      class="tab-control"
      :titles="['流行', '新款', '精选']"
      v-if="tabControlIsShow"
      @tabClick="tabClick"
      ref="tabControl1"
    ></tab-control>
    <scroll
      class="scroll-context"
      :probeType="3"
      :pullUpLoad="true"
      @scroll="scrollPos"
      @pullingUp="loadMore"
      ref="scroll"
    >
      <home-swiper
        :banners="banners"
        class="banners"
        @swiperload="swiperload"
      ></home-swiper>
      <home-recommend :recommends="recommends"></home-recommend>
      <future-view></future-view>
      <tab-control
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
        ref="tabControl2"
      ></tab-control>
      <good-list :goods="showGoods"></good-list>
    </scroll>
    <backtop @click="backTopClick" v-show="backTopIsShow"></backtop>
  </div>
</template>

<script>
import { getCurrentInstance } from "vue";
import navBar from "components/common/navbar/navBar.vue";
import HomeSwiper from "./childscompon/HomeSwiper";
import HomeRecommend from "./childscompon/HomeRecommend";
import FutureView from "./childscompon/FutureView";
import TabControl from "components/content/tabcontrol/TabControl.vue";
import GoodList from "components/content/goods/GoodList.vue";
import Scroll from "components/common/scroll/scroll.vue";
import Backtop from "components/content/backtop/backtop.vue";

import {
  getHomeMultidata,
  getHomeGoodsData,
  ClassGoodList
} from "network/home.js";
import { backTopMixin } from "common/mixin.js";
import { debounce } from "@/common/utils.js";

export default {
  name: "home",
  components: {
    navBar,
    Scroll,
    HomeSwiper,
    HomeRecommend,
    FutureView,
    TabControl,
    GoodList,
    Backtop
  },
  mixins: [backTopMixin],
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: "pop",
      tabControlOffsetTop: 0,
      tabControlIsShow: false
    };
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    }
  },
  methods: {
    /*
     * 事件监听相关
     */

    tabClick(index) {
      switch (+index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      this.$refs.tabControl1.correctIndex = +index;
      this.$refs.tabControl2.correctIndex = +index;
    },
    scrollPos(position) {
      this.backTopIsShow = position.y < -1000;
      this.tabControlIsShow = -position.y > this.tabControlOffsetTop;
    },

    /*
     * 数据请求相关
     */

    getHomeMultidata() {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoodsData(type) {
      const page = this.goods[type].page + 1;
      getHomeGoodsData(type, page).then(res => {
        const goods = new ClassGoodList(res.data.list, "home");
        this.goods[type].list.push(...goods.goodLists);
        this.goods[type].page += 1;
        this.$refs.scroll && this.$refs.scroll.finishLoadUp();
      });
    },
    loadMore() {
      this.getHomeGoodsData(this.currentType);
    },
    swiperload() {
      this.tabControlOffsetTop = this.$refs.tabControl2.$el.offsetTop;
    }
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 200);
    this.bus.on("homeImgLoad", () => {
      refresh();
    });
  },
  created() {
    this.getHomeMultidata();

    this.getHomeGoodsData("pop");
    this.getHomeGoodsData("new");
    this.getHomeGoodsData("sell");
  },
  setup() {
    const home = getCurrentInstance(); //当前组件实例
    const bus = home.appContext.config.globalProperties.$bus;
    return {
      bus
    };
  }
};
</script>

<style scoped>
#home {
  position: relative;
  height: 100vh;
}

.tab-control {
  z-index: 2;
}

.home-nav {
  background-color: var(--color-tint);
  color: white;
}

.scroll-context {
  position: absolute;
  top: 3em;
  left: 0;
  right: 0;
  bottom: 3em;
  overflow: hidden;
}

.banners {
  margin-top: 3em;
}
</style>
