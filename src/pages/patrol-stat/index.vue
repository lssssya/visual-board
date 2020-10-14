<template>
  <div class="patrol-stat">
    <common-title
      title="巡课统计"
      direction="right"
    />
    <common-stat
      ref="stat"
      :stat-data="statData"
    />
    <div class="legend-container">
      <common-legend
        v-for="legend in legendGroup"
        :key="legend.key"
        :legend="legend"
      ></common-legend>
    </div>
    <echarts-container
      ref="chart"
      :width="456"
      :height="124"
      :option="option"
    />
  </div>
</template>

<script>
import { calculateEstimation } from '@/utils/math.js'
import CONFIG_STYLE from './config/style.js'
import CONFIG_DATASET from './config/data.js'
export default {
  name: 'PatorlStat',
  data () {
    return {
      legendGroup: CONFIG_DATASET.legendGroup,
      option: {},
      statData: CONFIG_DATASET.dataStat
    }
  },
  methods: {
    initChart () {
      // 准备数据
      // 设置option
      this.setOption()
      this.$nextTick(() => {
        this.$refs.chart.showtip(0)
      })
    },
    setOption () {
      // 比较 bar 和 line 之间数值的步长谁的格子数更多
      const splitNumber = 4
      const { max: axisLeftMax } = calculateEstimation(CONFIG_DATASET.dataset.map(e => e.value))
      const { max: axisRightMax } = calculateEstimation(CONFIG_DATASET.dataset.map(e => e.rate))

      const leftInterval = axisLeftMax / splitNumber

      const option = {
        dataset: {
          source: CONFIG_DATASET.dataset
        },
        grid: {
          left: 10,
          right: 10,
          bottom: 0,
          top: 10,
          containLabel: true
        },
        tooltip: {
          show: true,
          trigger: 'axis',
          confine: true,
          backgroundColor: CONFIG_STYLE.opacity,
          borderWidth: 0,
          axisPointer: {
            lineStyle: {
              color: CONFIG_STYLE.grid.axisPointerColor
            }
          },
          formatter: (params) => {
            return CONFIG_STYLE.tooltipHtml(params, this.legendGroup)
          }
        },
        yAxis: [
          {
            position: 'left',
            min: 0,
            max: axisLeftMax,
            interval: leftInterval
          },
          {
            position: 'right',
            min: 92,
            max: 100,
            interval: 2
          }
        ],
        xAxis: {
          type: 'category',
          axisTick: { show: false },
          axisLine: {
            lineStyle: {
              color: CONFIG_STYLE.grid.markLineColor
            }
          },
          splitLine: { show: false },
          axisLabel: {
            margin: 15,
            verticalAlign: 'middle',
            color: CONFIG_STYLE.grid.axisLabelColor
          }
        },
        series: [
          {
            type: 'bar',
            yAxisIndex: 0,
            encode: {
              x: 'date',
              y: 'value'
            },
            itemStyle: {
              normal: {
                opacity: 0.9,
                color: CONFIG_STYLE.normal.barColor
              }
            },
            barWidth: 8
          },
          {
            type: 'line',
            yAxisIndex: 1,
            encode: {
              x: 'date',
              y: 'rate'
            },
            symbol: `image://${CONFIG_STYLE.grid.symbol}`,
            symbolSize: 4,
            showSymbol: false,
            smooth: true,
            lineStyle: {
              color: CONFIG_STYLE.normal.lineColor,
              width: 2,
              shadowColor: CONFIG_STYLE.normal.lineShadowColor,
              shadowBlur: 2,
              shadowOffsetY: 5
            }
          }
        ]
      }
      // yAxis 通用配置
      option.yAxis = option.yAxis.map(e => ({
        ...e,
        type: 'value',
        axisLabel: {
          show: true,
          interval: 0,
          color: CONFIG_STYLE.grid[e.position].axisLabelColor,
          fontSize: 12,
          fontFamily: 'DIN-Light',
          formatter: e.position === 'left' ? '{value}' : '{value}%'
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: CONFIG_STYLE.grid.splitColor,
            width: 1,
            type: 'solid'
          }
        },
        axisLine: { show: false },
        axisTick: {
          alignWithLabel: true,
          inside: true,
          length: 10,
          lineStyle: {
            color: CONFIG_STYLE.grid[e.position].axisTickColor,
            width: 1
          }
        }
      }))
      // 把装饰物的 series 放在最后
      option.series.push({
        data: CONFIG_DATASET.dataset.map(e => Math.max(axisLeftMax, axisRightMax)),
        type: 'line',
        silent: true,
        animation: false,
        hoverAnimation: false,
        symbolOffset: [0, 3],
        symbolSize: [13, 6],
        symbol: function (params) {
          return `image://${CONFIG_STYLE.grid.axisLineDecorate}`
        },
        label: {
          show: false,
          position: 'top',
          color: '#fff',
          fontFamily: 'Bender',
          fontSize: 18
        },
        lineStyle: {
          show: false,
          normal: {
            width: 1,
            color: CONFIG_STYLE.opacity
          }
        },
        // 仿辅助线
        markLine: {
          silent: true,
          symbol: 'none',
          label: { show: false },
          lineStyle: {
            type: 'solid',
            color: CONFIG_STYLE.grid.markLineColor
          },
          data: CONFIG_DATASET.dataset.map((e, i) => ({ xAxis: i }))
        }
      })
      this.option = option
    }
  },
  mounted () {
    this.initChart()
  }
}
</script>

<style lang="scss" scoped>
.patrol-stat {
  // 盒子设计合理的情况下 高度会根据每个盒子自行撑开
  // height: 268px;
  width: 456px;
  // 每个 legend 有自己的位置安排 所以放这里完成布局
  .legend-container {
    display: flex;
    justify-content: space-between;
    > div:last-child {
      margin-right: 14px;
    }
    > div:first-child {
      margin-left: 16px;
    }
  }
}
</style>
