<template>
  <div class="patrol-stat">
    <common-title
      title="教育资源"
      direction="left"
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
  name: 'EducationResource',
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
      const axisLeftMax = Math.max(
        calculateEstimation(CONFIG_DATASET.dataset.map(e => e.microCourse)).max,
        calculateEstimation(CONFIG_DATASET.dataset.map(e => e.courseWare)).max,
        calculateEstimation(CONFIG_DATASET.dataset.map(e => e.coursePlan)).max,
        calculateEstimation(CONFIG_DATASET.dataset.map(e => e.learningPlan)).max
      )
      const leftInterval = axisLeftMax / splitNumber

      const option = {
        dataset: {
          source: CONFIG_DATASET.dataset
        },
        grid: {
          left: 10,
          right: 2,
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
            type: 'shadow',
            shadowStyle: {
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
            offset: 10,
            min: 0,
            max: axisLeftMax,
            interval: leftInterval,
            type: 'value',
            axisLabel: {
              show: true,
              interval: 0,
              color: CONFIG_STYLE.grid.axisLabelColor,
              fontSize: 12,
              fontFamily: 'DIN-Light'
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
                color: CONFIG_STYLE.grid.axisTickColor,
                width: 1
              }
            }
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
          splitLine: {
            show: true,
            lineStyle: {
              color: CONFIG_STYLE.grid.markLineColor,
              width: 1,
              type: 'solid'
            }
          },
          axisLabel: {
            margin: 15,
            verticalAlign: 'middle',
            color: CONFIG_STYLE.grid.axisLabelColor
          }
        },
        series: [
          {
            type: 'bar',
            encode: {
              x: 'date',
              y: 'microCourse' // 微课
            },
            itemStyle: {
              normal: {
                opacity: 0.9,
                color: CONFIG_STYLE.normal.barColor.green
              }
            },
            barWidth: 6.4
          },
          {
            type: 'bar',
            encode: {
              x: 'date',
              y: 'courseWare' // 课件
            },
            itemStyle: {
              normal: {
                opacity: 0.9,
                color: CONFIG_STYLE.normal.barColor.blue
              }
            },
            barWidth: 6.4
          },
          {
            type: 'bar',
            encode: {
              x: 'date',
              y: 'coursePlan' // 教案
            },
            itemStyle: {
              normal: {
                opacity: 0.9,
                color: CONFIG_STYLE.normal.barColor.yellow
              }
            },
            barWidth: 6.4
          },
          {
            type: 'bar',
            encode: {
              x: 'date',
              y: 'learningPlan' // 学案
            },
            itemStyle: {
              normal: {
                opacity: 0.9,
                color: CONFIG_STYLE.normal.barColor.lightBlue
              }
            },
            barGap: '45%',
            barWidth: 6.4
          }
        ]
      }
      // 把装饰物的 series 放在最后
      option.series.push({
        data: CONFIG_DATASET.dataset.map(e => axisLeftMax).slice(1),
        type: 'line',
        silent: true,
        animation: false,
        hoverAnimation: false,
        symbolOffset: [34, 3],
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
  color: rgba(3, 18, 25, 0.76);
  // 每个 legend 有自己的位置安排 所以放这里完成布局
  .legend-container {
    display: flex;
    justify-content: space-between;
    > div:first-child {
      width: 240px;
      margin-left: 4px;
    }
  }
}
</style>
