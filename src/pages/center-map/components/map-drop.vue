<template>
  <div
    class="map-drop"
    :style="{'top': `${positionTop}px`,'left': `${positionLeft}px`}"
    @dblclick="handleExit"
  >
    <echarts-container
      ref="screenChart"
      :width="1000"
      :height="600"
      :option="mapOption"
    ></echarts-container>
  </div>
</template>

<script>
import echarts from 'echarts'
import MAPJSON_FUYANG from '@/assets/json/330111.json'
import CONFIG_STYLE from '../config/style.js'
import CONFIG_DATASET from '../config/data.js'
export default {
  name: 'MapScreen',
  data () {
    return {
      echartsInstance: null,
      mapOption: {},
      area: 'xindeng',
      positionTop: -12,
      positionLeft: -38
    }
  },
  props: {
    areaInfo: {
      type: String,
      default: '新登镇'
    },
    areaData: Object
  },
  watch: {
    areaInfo: {
      handler (newValue) {
        switch (newValue) {
          case '新登镇':
            this.area = 'xindeng'
            this.positionTop = 30
            this.positionLeft = -38
            break
          case '富春街道':
            this.area = 'fuchun'
            this.positionTop = 6
            this.positionLeft = -60
            break
          case '春江街道':
            this.area = 'chunjiang'
            this.positionTop = 32
            this.positionLeft = -104
            break
        }
      },
      immediate: true
    }

  },
  methods: {
    handleExit () {
      this.$emit('exit', true)
      this.$store.dispatch('setBackground')
    },
    initChart () {
      // 准备数据
      const mapJson = {
        type: 'FeatureCollection',
        name: this.areaInfo,
        crs: { type: 'name', properties: { name: 'urn:ogc:def:crs:OGC:1.3:CRS84' } },
        features: MAPJSON_FUYANG.features.filter(e => e.properties.name === this.areaInfo)
      }
      echarts.registerMap(this.areaInfo, mapJson)
      // 设置option
      this.setOption()
    },
    setOption () {
      const option = {
        geo: [
          {
            silent: true,
            z: 2,
            name: 'realViewLayer',
            show: true,
            map: this.areaInfo,
            mapType: 'map',
            hoverAnimation: true,
            zoom: 1.1,
            aspectScale: 1.25,
            label: {
              show: true,
              color: CONFIG_STYLE.normal.labelColor
            },
            itemStyle: {
              borderColor: CONFIG_STYLE.normal.borderColor,
              areaColor: CONFIG_STYLE.normal.areaRandom_2
            }
          }
        ],
        tooltip: {
          trigger: 'item',
          hideDelay: 500,
          extraCssText: 'transition: unset !important;',
          position: function (point, params, dom, rect, size) {
            // 让 tooltip 光在点上
            let mark = []
            if (params.data.detailData.type === 'count') {
              mark = [Math.floor(rect.x) - 78, Math.floor(rect.y) - 110]
            } else {
              mark = [Math.floor(rect.x) - 78, Math.floor(rect.y) - 150]
            }
            return mark
          }
        },
        series: [
          {
            name: 'main',
            type: 'scatter',
            coordinateSystem: 'geo',
            geoIndex: 0,
            z: 5,
            tooltip: {
              backgroundColor: 'rgba(255,255,255,0)',
              formatter: (params) => {
                return CONFIG_STYLE.scatterTooltipHtml(params)
              }
            },
            label: {
              show: false
            },
            itemStyle: {},
            symbolSize: [28.8, 35.2], // 80 percent symbolSize: [36, 44],
            data: []
          }
        ]
      }
      // 这里可能要处理一下 scatterData 的归属问题？是否聚合拆开
      CONFIG_DATASET.scatterData[this.area].map(e => {
        const dataObj = {
          ...e,
          symbol: `image://${CONFIG_STYLE.scatter[e.detailData.type]}`
        }
        option.series[0].data.push(dataObj)
      })

      this.mapOption = option
    }

  },
  mounted () {
    this.initChart()
  }
}
</script>

<style lang="scss" scoped>
.map-drop {
  cursor: pointer;
  position: absolute;
  // top: 24px;
  // left: -48px;
  // 富春的
  top: -12px;
  left: -38px;
  //
  width: 1000px;
  height: 600px;
}
</style>
