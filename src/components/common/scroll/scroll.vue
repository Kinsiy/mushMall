<!--
 * @Date: 2021-04-11 23:26:35
 * @Author: Kinsiy
 * @LastEditors: Kinsiy
 * @LastEditTime: 2021-04-14 20:24:36
 * @FilePath: \Vue-project\src\components\common\scroll\scroll.vue
-->
<template>
  <div ref="bscroll">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "Scroll",
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      scroll: null
    };
  },
  methods: {
    scrollTo(x, y, time = 500) {
      this.scroll.scrollTo(x, y, time);
    },
    refresh() {
      this.scroll.refresh();
    },
    finishLoadUp() {
      this.scroll && this.scroll.finishPullUp();
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.bscroll, {
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
      mouseWheel: true
    });
    if (this.probeType == 2 || this.probeType == 3) {
      this.scroll.on("scroll", position => {
        this.$emit("scroll", position);
      });
    }

    if (this.pullUpLoad) {
      this.scroll.on("pullingUp", () => {
        this.$emit("pullingUp");
      });
    }
  }
};
</script>

<style></style>
