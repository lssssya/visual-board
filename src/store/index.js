import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

import areaBg from '@/assets/images/app-background/bg_shadow_map.png'

Vue.use(Vuex)

const state = {
  backgroundImg: areaBg
}

export default new Vuex.Store({
  state,
  actions,
  mutations,
  modules: {}
})
