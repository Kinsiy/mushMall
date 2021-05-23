<!--
 * @Date: 2021-04-12 17:37:11
 * @Author: Kinsiy
 * @LastEditors: Kinsiy
 * @LastEditTime: 2021-04-16 10:30:55
 * @FilePath: \Vue-project\src\views\detail\detail.vue
-->
<template>
  <div class="good-detail">
    <detail-nav-bar
      @centerClick="goTitleDocument"
      ref="navbar"
    ></detail-nav-bar>
    <scroll
      class="detail-scroll"
      :probeType="3"
      @scroll="scrollPos"
      ref="scroll"
    >
      <div class="detail-swiper">
        <detail-swiper :banners="detailBanner"></detail-swiper>
      </div>
      <detail-good-info :goodItem="goodInfo"></detail-good-info>
      <detail-shop :shopInfo="shopInfo"></detail-shop>
      <detail-good-intro :goodIntroInfo="goodIntroInfo"></detail-good-intro>
      <detail-param-info
        :itemParams="itemParams"
        ref="paramInfo"
      ></detail-param-info>
      <detail-comment
        :commentsInfo="commentsInfo"
        ref="comment"
      ></detail-comment>
      <good-list :goods="recommendGoods" ref="recommends"></good-list>
    </scroll>
    <backtop @click="backTopClick" v-show="backTopIsShow"></backtop>
    <detail-botton-bar @addShopCat="addShopCat"></detail-botton-bar>
  </div>
</template>

<script>
import { getCurrentInstance } from "vue";
import detailNavBar from "./childscompon/detailNavBar";
import detailSwiper from "./childscompon/detailSwiper.vue";
import detailGoodInfo from "./childscompon/detailGoodInfo";
import detailShop from "./childscompon/detailShop.vue";
import detailGoodIntro from "./childscompon/detailGoodIntro";
import detailParamInfo from "./childscompon/detailParamInfo.vue";
import detailComment from "./childscompon/detailComment";
import GoodList from "components/content/goods/GoodList.vue";
import Scroll from "components/common/scroll/scroll.vue";
import Backtop from "components/content/backtop/backtop.vue";
import detailBottonBar from "./childscompon/detailBottonBar";

import { backTopMixin } from "common/mixin.js";
import { debounce } from "@/common/utils.js";
import { getGoodDetail, GoodInfo, getRecommendGoods } from "network/detail.js";
import { ClassGoodList } from "network/home.js";

export default {
  name: "detail",
  mixins: [backTopMixin],
  data() {
    return {
      iid: "undefind",
      detailBanner: [],
      goodInfo: {},
      shopInfo: {},
      goodIntroInfo: [],
      itemParams: {},
      commentsInfo: {},
      recommendGoods: [],
      titleTopY: [0],
      getTitleTopY: null,
      correctIndex: 0
    };
  },
  components: {
    detailNavBar,
    detailSwiper,
    detailGoodInfo,
    detailShop,
    detailGoodIntro,
    detailParamInfo,
    detailComment,
    GoodList,
    Scroll,
    Backtop,
    detailBottonBar
  },
  methods: {
    goTitleDocument(index) {
      this.$refs.scroll.scrollTo(0, -this.titleTopY[index]);
    },
    scrollPos(position) {
      this.backTopIsShow = position.y < -1000;
      for (let i = 0; i < this.titleTopY.length - 1; i++) {
        if (
          this.$refs.navbar &&
          this.correctIndex != i &&
          -position.y >= this.titleTopY[i] &&
          -position.y < this.titleTopY[i + 1]
        ) {
          this.$refs.navbar.correctIndex = i;
        }
      }
    },
    getGoodDetail(iid) {
      getGoodDetail(iid).then(res => {
        const data = res.result;
        this.detailBanner = data.itemInfo.topImages;
        this.goodInfo = new GoodInfo(
          data.itemInfo,
          data.columns,
          data.shopInfo.services
        );
        this.shopInfo = data.shopInfo;
        this.goodIntroInfo = data.detailInfo;
        this.itemParams = data.itemParams;
        this.commentsInfo = data.rate;
      });
    },
    getRecommendGoods() {
      getRecommendGoods().then(res => {
        // console.log(res);
        const goods = new ClassGoodList(res.data.list, "recommend");
        this.recommendGoods = goods.goodLists;
      });
    },
    addShopCat() {
      const payload = {};
      payload.iid = this.iid;
      payload.image = this.detailBanner[0];
      payload.title = this.goodInfo.title;
      payload.price = this.goodInfo.nowPrice;
      payload.desc = this.goodInfo.desc;
      payload.checked = true;
      this.$store.dispatch("addCartAction", payload);
    }
  },
  created() {
    this.iid = this.$route.params.iid;
    this.getGoodDetail(this.iid);
    this.getRecommendGoods();
    this.getTitleTopY = debounce(() => {
      this.titleTopY = [0];
      this.titleTopY.push(this.$refs.paramInfo.$el.offsetTop);
      this.titleTopY.push(this.$refs.comment.$el.offsetTop);
      this.titleTopY.push(this.$refs.recommends.$el.offsetTop);
      this.titleTopY.push(Number.MAX_VALUE);
    }, 200);
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 200);
    this.bus.on("detailImgLoad", () => {
      refresh();
      if (this.$refs.paramInfo && this.$refs.comment && this.$refs.recommends) {
        this.getTitleTopY();
      }
    });
  },
  setup() {
    const detail = getCurrentInstance(); //当前组件实例
    const bus = detail.appContext.config.globalProperties.$bus;
    return {
      bus
    };
  },
  computed: {}
};
</script>

<style scoped>
.good-detail {
  height: 100vh;
  position: relative;
  background-color: #fff;
  z-index: 4;
}

.detail-scroll {
  position: absolute;
  top: 3em;
  left: 0;
  right: 0;
  bottom: 3em;
  overflow: hidden;
}
</style>
