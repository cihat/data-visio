import 'ant-design-vue/dist/reset.css';
import "./assets/main.css"

import App from './App.vue'
import router from './router'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import HighchartsVue from 'highcharts-vue';
import Antd from 'ant-design-vue';

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(HighchartsVue)
app.use(Antd)

app.mount('#app')
