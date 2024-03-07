import 'ant-design-vue/dist/reset.css';
// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import HighchartsVue from 'highcharts-vue';

import {
  Button,
  Input,
  Layout,
  Row,
  Col,
  Comment,
  Tooltip,
  Avatar,
  Card,
  Tag,
  Radio,
  Menu,
  Form,
  Alert,
  Empty,
  Tabs,
  Pagination,
  Space,
  Breadcrumb,
} from 'ant-design-vue'

const components = [
  Button,
  Input,
  Layout,
  Row,
  Col,
  Comment,
  Tooltip,
  Avatar,
  Card,
  Tag,
  Radio,
  Menu,
  Form,
  Alert,
  Empty,
  Tabs,
  Pagination,
  Space,
  Breadcrumb,
]


import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(HighchartsVue)
components.forEach(c => app.use(c))

app.mount('#app')
