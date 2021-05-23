<!--
 * @Date: 2021-04-16 10:24:03
 * @Author: Kinsiy
 * @LastEditors: Kinsiy
 * @LastEditTime: 2021-04-16 11:21:48
 * @FilePath: \Vue-project\src\views\shopcart\childcomponents\totalPrice.vue
-->
<template>
  <div class="total-price-pos">
    <div class="total-price">
      <input
        type="checkbox"
        :checked="checkedAll"
        name=""
        id=""
        @change="allChange"
      />
      <span
        >总价格<span>￥{{ totalPrice }}</span></span
      >
      <button>去计算</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "totalPrice",
  props: {
    shopCarList: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  computed: {
    totalPrice() {
      return (this.shopCarList.length != 0
        ? this.shopCarList.reduce(
            (pre, curr, curr_i, arr) =>
              pre + (curr.checked ? curr.count * curr.price : 0),
            0
          )
        : 0
      ).toFixed(2);
    },
    checkedAll() {
      return this.shopCarList.every(e => e.checked);
    }
  },
  methods: {
    allChange(event) {
      let changeValue = event.target.checked;
      for (let item of this.shopCarList) {
        let payload = {
          iid: item.iid,
          changeValue
        };
        this.$store.dispatch("changeCheckAction", payload);
      }
    }
  }
};
</script>

<style>
.total-price-pos {
  position: fixed;
  bottom: 3em;
  left: 0;
  right: 0;
  height: 2em;
}

.total-price {
  display: flex;
  position: relative;
  height: 100%;
}

.total-price > input {
  width: 5vw;
  position: absolute;
  top: 50%;
  left: 0%;
  transform: translateY(-50%);
}

.total-price > span {
  flex: 1;
  text-align: start;
  position: absolute;
  top: 50%;
  left: 5%;
  transform: translateY(-50%);
  font-size: 24px;
}

.total-price > span > span {
  margin-left: 20px;
  background-color: pink;
}

.total-price > button {
  width: 20vw;
  height: 100%;
  position: absolute;
  top: 50%;
  right: 0%;
  transform: translateY(-50%);

  outline: none;
  border: none;
  background-color: orange;
}
</style>
