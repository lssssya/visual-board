import * as types from './mutation-types'

export default {
  setBackground ({ commit }, areaInfo) {
    commit(types.SET_BACKGROUND, areaInfo)
  }
}
