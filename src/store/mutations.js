import * as types from './mutation-types'

import xindeng from '@/assets/images/app-background/xindeng.png'
import fuchun from '@/assets/images/app-background/fuchun.png'
import chunjiang from '@/assets/images/app-background/chunjiang.png'
import areaBg from '@/assets/images/app-background/bg_shadow_map.png'

export default {
  [types.SET_BACKGROUND] (state, areaInfo) {
    switch (areaInfo) {
      case '新登镇': state.backgroundImg = xindeng; break
      case '富春街道': state.backgroundImg = fuchun; break
      case '春江街道': state.backgroundImg = chunjiang; break
      default: state.backgroundImg = areaBg
    }
    // state.backgroundImg = backgroundImg
  }
}
