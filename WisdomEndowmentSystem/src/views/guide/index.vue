<template>
  <div class="guide-content">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>1 欢迎使用XX系统</van-swipe-item>
        <van-swipe-item>2 你可以进行以下设置</van-swipe-item>
        <van-swipe-item>3 设置你自己喜欢的额页面</van-swipe-item>
        <van-swipe-item>
          4 欢迎开启全新的体验
          <br>
          <van-button type="primary" to="/home">现在开启全新体验吧</van-button>
        </van-swipe-item>
      </van-swipe>
<!--      <div class="vanBtn">
        <button @click="prev">prev</button>
        <button @click="next">next</button>
      </div>-->
  </div>
</template>

<script>
import { ref } from 'vue';

/*function prev(){
    this.$refs.swiper.prev();
}
function next(){
    this.$refs.swiper.next();
}*/

export default {
  setup() {
    const show = ref(false);
    return { show };
  },

};

</script>

<style>

.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 667px;
  height: 1300px;
  text-align: center;
  background-color: #39a9ed;
}

</style>