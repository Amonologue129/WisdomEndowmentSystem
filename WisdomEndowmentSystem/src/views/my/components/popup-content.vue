<template>
  <div class="my-container">
    <div class="my-content">
      <div class="nav">
        <van-image
            round
            width="75px"
            height="75px"
            src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
        />
        <van-cell class="reg_login" title="注册/登录"  url="#/login"/>
      </div>

      <van-cell title="消息" icon="envelop-o" clickable>
        <!-- 使用 right-icon 插槽来自定义右侧图标 -->
        <template #right-icon>
          <van-badge :content="20" />
        </template>
      </van-cell>
      <van-cell title="设置" icon="setting-o" clickable>
      </van-cell>
      <van-cell clickable>
        <!-- 使用 title 插槽来自定义标题 -->
        <template #title>
          <van-icon name="icon-tuichu" class="iconfont icon-tuichu" style="font-size: 23px" />
          <span class="custom-title">退出</span>
        </template>
      </van-cell>
<!--      <van-cell title="退出" class="iconfont icon-tuichu" style="font-size: 22px" clickable>
      </van-cell>-->

    </div>

  </div>
</template>

<script>
export default {
  name: "popup-content"
}
</script>

<style scoped>
.my-container{
  width: 100%;
  height: 100%;
  background-color: #393939;
  z-index: 1000;
}
.my-container .my-content{
  width: 90%;
  margin-left: 20px;

}
.my-container .my-content .nav{
  display: flex;
  color: white;

}
.my-container .my-content .van-image{
  margin-top: 15px;
}
.my-container .my-content .nav .reg_login{
  width: 230px;
  margin-top: 50px;
  font-size: 35px;
  color: white;

}
.van-badge{
  width: 70px;
  height: 40px;
  line-height: 40px;
  color: white;

}
.van-cell {
  background-color: #393939;
  color: white;
  border-bottom: none;
  border-top: none;

}
.van-cell::after{
  border-bottom: none;
}

</style>