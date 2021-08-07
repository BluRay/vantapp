import { createApp } from 'vue'
import App from './App.vue'
import store from "./store";
import { router } from './router'
import Vant from 'vant';
import Highcharts from 'highcharts'
import HighchartsVue from 'highcharts-vue'
import HighchartsChartTem  from 'highcharts/themes/dark-unica'
import 'vant/lib/index.css';
HighchartsChartTem(Highcharts)
const app = createApp(App)
app.use(store)
app.use(router)
app.use(Vant)
app.use(HighchartsVue)
app.mount('#app')
