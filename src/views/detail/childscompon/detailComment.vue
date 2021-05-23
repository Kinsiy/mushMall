<!--
 * @Date: 2021-04-14 12:41:57
 * @Author: Kinsiy
 * @LastEditors: Kinsiy
 * @LastEditTime: 2021-04-16 12:14:35
 * @FilePath: \Vue-project\src\views\detail\childscompon\detailComment.vue
-->
<template>
  <div v-if="Object.keys(commentsInfo).length != 0" class="deatil-commment">
    <div class="comment-head"><span>用户评价</span><span>更多</span></div>
    <div v-if="commentsInfo.list != undefined">
      <div class="user-icon">
        <img :src="commentsInfo.list[0].user.avatar" alt="用户头像" />
        <span>{{ commentsInfo.list[0].user.uname }}</span>
      </div>
      <div class="comment-desc">{{ commentsInfo.list[0].content }}</div>
      <div class="comment-extr-info">
        <span>{{ showDate }}</span
        ><span>{{ commentsInfo.list[0].style }}</span>
      </div>
      <div v-show="commentsInfo.list[0].images" class="comment-img">
        <img
          v-for="(src, index) of commentsInfo.list[0].images"
          :key="index"
          :src="src"
          alt="评论图片"
        />
      </div>
    </div>
    <div v-else class="no-comment">暂无评论</div>
  </div>
</template>

<script>
import { formatDate } from "@/common/utils.js";

export default {
  name: "detailComment",
  props: {
    commentsInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  computed: {
    showDate() {
      const date = this.commentsInfo.list[0].created
        ? new Date(this.commentsInfo.list[0].created * 1000)
        : "";
      return date ? formatDate(date, "yyyy-MM-dd hh:mm:ss") : "";
    }
  }
};
</script>

<style scoped>
.comment-head {
  margin: 20px 0 0;
  padding: 15px 25px;
  box-shadow: 0 -4px #b9b9b9;
}

.comment-head > span:last-child {
  float: right;
}

.user-icon {
  position: relative;
  margin: 0px 0 10px;
  padding: 10px 10px 0;
  box-shadow: 0 -4px #b9b9b9;
}

.deatil-commment .user-icon > span {
  position: absolute;
  top: 50%;
  left: 20%;
  transform: translateY(-50%);
  font-size: 18px;
  font-weight: bold;
}

.deatil-commment .user-icon img {
  width: 60px;
  border-radius: 50%;
}

.comment-desc {
  padding: 0px 10px 10px;
  font-size: 16px;
}

.comment-extr-info {
  margin: 0 10px 10px;
}
.comment-extr-info > span:last-child {
  padding-left: 10px;
}

.comment-img {
  width: 20vw;
  height: 20vw;
  overflow: hidden;
}

.no-comment {
  padding: 10px 10px 20px;
  text-align: center;
}
</style>
