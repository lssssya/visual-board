import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 全局组件
import axios from 'axios'
import VueAxios from 'vue-axios'
import EchartsContainer from '@/components/echarts-container'
import CommonStat from '@/components/common-stat'
import CommonLegend from '@/components/common-legend'
import CommonTitle from '@/components/common-title'

Vue.use(VueAxios, axios)
Vue.component('EchartsContainer', EchartsContainer)
Vue.component('CommonStat', CommonStat)
Vue.component('CommonLegend', CommonLegend)
Vue.component('CommonTitle', CommonTitle)

// 全局 utils

// 全局过滤-千分位分割
const thousandsReg = /(?!^)(?=(\d{3})+$)/g
Vue.filter('thousands', value => String(value).replace(thousandsReg, ','))

// 全局过滤-ellipsis
Vue.filter('ellipsis', (value, digit) => value.length >= digit ? `${value.slice(0, digit)}…` : value)

// 搜索高亮的directive
Vue.directive('highlight', function (el, binding) {
  const innerTextStr = el.innerText || ''
  const domInnerTexts = innerTextStr ? innerTextStr.split(binding.value) : ''
  binding.value === ''
    ? el.innerHTML = innerTextStr
    : el.innerHTML = domInnerTexts.join(`<span style="color:#0EA469;">${binding.value}</span>`)
})

Vue.config.productionTip = false

async function initApp (Vue) {
  try {
    // 请求userInfo
    new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  } catch (error) {
    // 错误处理
    console.log('error', error)
  }
}

initApp(Vue)
