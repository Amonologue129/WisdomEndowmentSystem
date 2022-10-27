<template>
  <div>
    <van-nav-bar title="欢迎注册" class="page-nav-bar">
      <template #left>
        <van-icon name="cross" size="18" @click="this.$router.back()" />
      </template>
    </van-nav-bar>
    <van-form @submit="onSubmit">
      <van-field
          name="userName"
          placeholder="请输入用户名"
          left-icon="manager"
          v-model="userName"
          :rules="userFormRules.userName"
      />
      <van-field
          type="password"
          name="userPwd"
          placeholder="请输入密码"
          left-icon="lock"
          v-model="userPwd"
          :rules="userFormRules.userPwd"
      />
      <van-field
          name="userPhone"
          placeholder="请输入手机号码"
          left-icon="phone"
          v-model="userPhone"
          :rules="userFormRules.userPhone"
      />
      <div style="margin: 16px;">
        <van-button round block type="primary" native-type="submit">
          立即注册
        </van-button>
      </div>
    </van-form>
    <p style="font-size: 16px;text-align: center">
      <router-link to="login">已账号？立即登录</router-link>
    </p>
  </div>
</template>

<script>
// 1.构建登录请求
// 2.获取用户名和密码发送到服务端
import {reactive, toRefs} from "vue"
//import {login} from "../../api/user.js"
import {Toast} from "vant";
//import {useStore} from "vuex"
import router from "../../router";
function userSubmit(user){
  // 调用useStore()方法拿到store容器
  // const store = useStore();
  const onSubmit = async () => {
    // 在网速比较慢的时候显示
    Toast.loading({
      message: '注册中...',
      forbidClick: true,
    });
    // 调用登录请求
    const res = await login(user);
    // 对后端返回的结果进行判断
    if (res.data.code === 0){
      //console.log("登录成功！");
      Toast.success("登录成功！");
      // 将登录成功的数据存储到store中
      store.commit("setUser", res.data);
      // 跳转到我的页面
      router.push('/my')
    }else {
      //console.log("用户名或密码错误！");
      Toast.fail("用户名或密码错误！");
    }
  };
  // 定义表单的校验规则
  const userFormRules = {
    userName: [{required: true, message: "请输入用户名"}],
    userPwd: [
      {
        required: true, message: "请输入密码"
      },
      {
        pattern: /^\d{6}$/,     //校验密码的正则表达式
        message: "密码格式错误！"
      }],
    userPhone:  [{required: true, message: "请输入手机号码"}],
  };
  return {
    onSubmit,
    userFormRules,
  }
}
export default {
  //name: "index",
  setup(){
    // 创建响应式对象
    const user = reactive({
      userName: '',
      userPwd: ''
    });
    return {
      ...toRefs(user),
      ...userSubmit(user),
    }
  }
}
</script>

<style scoped>

</style>