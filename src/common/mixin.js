/*
 * @Date: 2021-04-14 15:43:33
 * @Author: Kinsiy
 * @LastEditors: Kinsiy
 * @LastEditTime: 2021-04-14 19:49:25
 * @FilePath: \Vue-project\src\common\mixin.js
 */
export const backTopMixin = {
  data() {
    return {
      backTopIsShow: false
    };
  },
  methods: {
    backTopClick() {
      this.$refs.scroll.scrollTo(0, 0);
    }
  }
};
