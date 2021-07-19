import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/index.scss';
import "@/styles/color/index.scss";
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import { createI18n } from 'vue-i18n';
import messages from "@/utils/language";
const i18n = createI18n({
    locale: 'zh-CN',		//默认显示的语言 
      messages
  })
createApp(App)
.use(store)
.use(router)
.use(ElementPlus)
.use(i18n)
.mount('#app')
