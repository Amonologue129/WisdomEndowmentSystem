<template>
  <div>
    <!--展示子路由-->
    <router-view></router-view>
    <van-tabbar v-model="active" route>
      <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="location-o" to="/location">位置</van-tabbar-item>
      <van-tabbar-item icon="like-o" to="/like">收藏</van-tabbar-item>
      <van-tabbar-item class="iconfont icon-tongzhi" style="font-size:20px" to="/message"><font style="font-size: 12px;">消息</font></van-tabbar-item>
      <van-tabbar-item icon="bars" to="/my" @click="showPopup">个人中心</van-tabbar-item>
    </van-tabbar>
    <!--弹出层-->
    <van-popup
        v-model:show="show"
        closeable
        position="right"
        :style="{ width: '80%',height: '100%' }"
    >
      <!--使用弹出层内容组件-->
      <popup-content></popup-content>
    </van-popup>
  </div>
</template>

<script>
import { ref } from 'vue';
import PopupContent from '../my/components/popup-content.vue'
export default {
  // 注册组件
  components: {
    PopupContent,
  },
  setup() {
    const show = ref(false);
    const showPopup = () => {
      show.value = true;
    };
    const active = ref(0);
    return {
      active,
      show,
      showPopup,
    }
  },
};
</script>

<style >
.van-tabbar{
  height: 156px;
}

</style>