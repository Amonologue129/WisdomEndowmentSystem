import { createApp } from 'vue'
// import './style.css'
import "./styles/index.css"
import App from './App.vue'
import Vant from "vant";        //导入vant
import "vant/lib/index.css";    //导入样式
import "amfe-flexible";         //导入，用于设置rem基准值
import router from "./router"; //导入路由对象
import "../src/assets/icon/iconfont.css"
createApp(App).use(Vant).use(router).mount("#app");
