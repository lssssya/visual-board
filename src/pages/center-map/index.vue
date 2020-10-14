<template>
  <div class="center-map">
    <div class="statistic-total">
      <div
        class="statistic-item"
        v-for="item in dataStat"
        :key="item.key"
      >
        <div class="title">{{item.label}}<span>[{{item.unit}}]</span></div>
        <div class="count">
          <scroll-number
            :number="figure"
            v-for="(figure,index) in item.figure"
            :key="index"
          ></scroll-number>
        </div>
      </div>
    </div>
    <transition name="mask">
      <map-wrap
        ref="map"
        v-if="!showGeoScreen"
        @showGeoDetail="handleShowGeo"
      ></map-wrap>
    </transition>
    <transition name="mask">
      <map-drop
        v-if="showGeoScreen"
        :areaInfo="currentAreaInfo"
        :areaData="currentAreaParams"
        @exit="showGeoScreen = false"
      ></map-drop>
    </transition>
    <div class="map-legend">
      <div>图例</div>
      <div class="icon-main">
        <div class="icon-main-item">
          <div class="icon"></div>
          主讲校
        </div>
        <div class="icon-main-item">
          <div class="icon"></div>
          帮扶校
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CONFIG_DATASET from './config/data.js'
import MapWrap from './components/map'
import MapDrop from './components/map-drop'
import ScrollNumber from './components/number'

export default {
  name: 'CenterMap',
  components: {
    MapWrap,
    MapDrop,
    ScrollNumber
  },
  data () {
    return {
      dataStat: CONFIG_DATASET.dataStat,
      currentAreaInfo: {},
      currentAreaParams: {},
      showGeoScreen: false // 遮罩层地图展示 visible
    }
  },
  methods: {
    handleShowGeo (params) {
      this.showGeoScreen = true
      this.currentAreaInfo = params.data.name
      this.currentAreaParams = params
    }
  },
  mounted () {
    this.dataStat = this.dataStat.map(e => ({
      ...e,
      figure: String(e.value).split('')
    }))
  }
}
</script>

<style lang="scss" scoped>
.mask-enter-active {
  animation-name: selfFadeIn;
  animation-duration: 0.5s;
}
.mask-leave-active {
  animation-name: selfFadeOut;
  animation-duration: 0.5s;
}
.center-map {
  width: 920px;
  height: 620px;
  position: relative;
  .statistic-total {
    box-sizing: border-box;
    width: 100%;
    height: 100px;
    padding: 0 120px;
    display: flex;
    justify-content: space-between;
    .statistic-item {
      .title {
        font-family: PingFangSC-Regular;
        font-size: 18px;
        color: #f6faff;
        letter-spacing: 0;
        line-height: 21px;
        > span {
          font-size: 12px;
        }
      }
      .count {
        display: flex;
      }
    }
  }
  .map-legend {
    position: absolute;
    left: 24px;
    bottom: 33px;
    box-sizing: border-box;
    padding: 12px 24px 0;
    width: 204px;
    height: 80px;
    border: 1px solid rgba(151, 151, 151, 0.2);
    font-family: MicrosoftYaHeiUI;
    font-size: 14px;
    color: #ffffff;
    .icon-main {
      display: flex;
      justify-content: space-between;
      .icon-main-item {
        display: flex;
        margin-top: 10px;
        align-items: center;
        font-family: MicrosoftYaHeiUI;
        font-size: 14px;
        color: rgba(255, 255, 255, 0.7);
        .icon {
          width: 24px;
          height: 24px;
          margin-right: 2px;
        }
        &:first-child > .icon {
          background: url('../../assets/images/scatter_point_chief.png') no-repeat;
          background-size: 20px;
        }
        &:last-child > .icon {
          background: url('../../assets/images/scatter_point_help.png') no-repeat;
          background-size: 20px;
        }
      }
    }
  }
}
</style>
