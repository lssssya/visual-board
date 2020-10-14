<template>
  <div class="map-container">
    <!-- 地图边缘装饰物 -->
    <div class="decorate-left"></div>
    <div class="decorate-right"></div>
    <echarts-container
      ref="chart"
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
  name: 'Map',
  data () {
    return {
      echartsInstance: null,
      mapOption: {},
      scatterIndex: 0
    }
  },
  methods: {
    eventClickListening () {
      const echartsInstance = this.$refs.chart.getInstance()
      echartsInstance.on('dblclick', (params) => {
        if (params.seriesType === 'map' && params.data) {
          this.$store.dispatch('setBackground', params.data.name)
          this.$emit('showGeoDetail', params)
        }
      })
    },
    animate () {
      this.scatterIndex === CONFIG_DATASET.scatterData.allScatter.length - 1
        ? this.scatterIndex = 0
        : this.scatterIndex++
      this.$refs.chart.showtip(this.scatterIndex)
    },
    initChart () {
      // 准备数据
      echarts.registerMap('fuyang', MAPJSON_FUYANG)
      // 设置option
      this.setOption()
      this.eventClickListening()
    },
    setOption () {
      const visualMap = new Map([
        [1, CONFIG_STYLE.normal.areaRandom_1],
        [2, CONFIG_STYLE.normal.areaRandom_2],
        [3, CONFIG_STYLE.normal.areaRandom_3]
      ])
      const regions = MAPJSON_FUYANG.features.map(e => ({
        name: e.properties.name,
        itemStyle: {
          borderColor: CONFIG_STYLE.normal.borderColor,
          areaColor: visualMap.get(CONFIG_DATASET.randomArea.get(e.properties.name))
        },
        emphasis: {
          itemStyle: {
            areaColor: {
              image: CONFIG_STYLE.emphasis.areaColor,
              repeat: 'repeat'
            },
            borderWidth: 3,
            borderType: 'solid',
            borderColor: CONFIG_STYLE.emphasis.borderColor,
            shadowBlur: 1,
            shadowColor: 'rgba(246,255,101,0.3)',
            shadowOffsetX: 0,
            shadowOffsetY: 10
          }
        }
      }))
      const option = {
        geo: [
          {
            z: 2,
            name: 'realViewLayer',
            show: true,
            map: 'fuyang',
            mapType: 'map',
            hoverAnimation: true,
            zoom: 1.1,
            aspectScale: 1.25,
            label: {
              show: true,
              color: CONFIG_STYLE.normal.labelColor,
              fontWeight: 'normal',
              fontSize: 12
            },
            emphasis: {
              label: {
                color: CONFIG_STYLE.emphasis.labelColor,
                fontWeight: 'bold',
                fontSize: 14
              }
            },
            regions
          }
        ],
        tooltip: {
          triggerOn: 'click',
          trigger: 'item',
          hideDelay: 500,
          extraCssText: 'transition: unset !important;',
          position: function (point, params, dom, rect, size) {
            // 让 tooltip 光在点上
            let mark = []
            if (params.seriesType === 'map') {
              // mark = [Math.floor(rect.x), Math.floor(rect.y)]
              mark = [point[0] - 40, point[1] - 20]
              // mark = [Math.floor(rect.x), Math.floor(rect.y) - 110]
            }
            if (params.seriesType === 'scatter') {
              if (params.data.detailData.type === 'count') {
                mark = [rect.x - 81, rect.y - 120]
              } else {
                mark = [rect.x - 81, rect.y - 155]
              }
            }
            return mark
          }
        },
        animation: false,
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
          }, {
            name: 'area',
            type: 'map',
            coordinateSystem: 'geo',
            geoIndex: 0,
            z: 5,
            tooltip: {
              backgroundColor: 'rgba(255,255,255,0)',
              formatter: (params) => {
                return CONFIG_STYLE.areaTooltipHtml(params)
              }
            },
            data: CONFIG_DATASET.areaData
          }
        ]
      }
      CONFIG_DATASET.scatterData.allScatter.map(e => {
        const dataObj = {
          ...e,
          symbol: `image://${CONFIG_STYLE.scatter[e.detailData.type]}`
        }
        if (e.detailData.type === 'count') {
          dataObj.symbolSize = [28.8, 64.8] // 80 percent symbolSize: [36, 81],
          dataObj.label = {
            show: true,
            position: 'insideBottom',
            distance: 40,
            fontSize: 14,
            color: '#fff',
            formatter: () => e.detailData.count
          }
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
.map-container {
  position: absolute;
  top: 50px;
  left: -40px;
  width: 920px;
  height: 600px;
  .decorate-left {
    z-index: 2;
    width: 380px;
    height: 108px;
    position: absolute;
    top: 64px;
    left: 60px;
    background: url('../../../assets/images/decoration_map_left.png') no-repeat;
  }
  .decorate-right {
    z-index: 2;
    width: 140px;
    height: 160px;
    position: absolute;
    top: 166px;
    right: -36px;
    color: #2c3120;
    background: url('../../../assets/images/decoration_map_right.png') no-repeat;
  }
}
</style>
