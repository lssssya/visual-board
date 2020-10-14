<template>
  <div class="pictorial-bar-wrap">
    <echarts-container
      ref="bar"
      :width="120"
      :height="20"
      :option="option"
    />
  </div>
</template>

<script>
import CONFIG_STYLE from '../config/style.js'

export default {
  name: 'PictorialBarWrap',
  data () {
    return {
      option: {}
    }
  },
  props: {
    colorType: {
      type: String,
      default: 'blue'
    },
    fullCount: {
      type: Number,
      default: 100
    },
    currentCount: {
      type: Number,
      default: 0
    },
    order: {
      type: Number,
      default: 0
    }

  },
  watch: {
    colorType (newColor) {
      this.option.series = this.option.series.map(e => ({
        ...e,
        type: 'pictorialBar',
        symbolRepeat: 6,
        symbolMargin: '20%',
        symbolSize: '100%',
        symbolClip: true,
        symbol: `image://${CONFIG_STYLE.imgGroup[newColor][this.order]}`
      }))
      this.$refs.bar.setInstanceOption(this.option)
    },
    currentCount (newCount) {
      this.option.series[0].data = [newCount]
      this.$refs.bar.setInstanceOption(this.option)
    }
  },
  methods: {
    initChart () {
      // 准备数据
      // 设置option
      this.setOption()
    },
    setOption () {
      const option = {
        grid: {
          left: 0,
          right: 0,
          bottom: 0,
          top: 0,
          containLabel: true
        },
        xAxis: {
          type: 'value',
          max: this.fullCount,
          axisTick: { show: false },
          axisLine: { show: false },
          axisLabel: { show: false },
          splitLine: { show: false }
        },
        yAxis: {
          type: 'category',
          axisTick: { show: false },
          axisLine: { show: false },
          axisLabel: { show: false },
          splitLine: { show: false }
        },
        series: [{
          // current
          type: 'pictorialBar',
          data: [this.currentCount]
        }, {
          // full
          itemStyle: {
            normal: { opacity: 0.2 }
          },
          animationDuration: 0,
          data: [this.fullCount]
        }]
      }
      // 同一套配置
      option.series = option.series.map(e => ({
        ...e,
        type: 'pictorialBar',
        symbolRepeat: 'fixed',
        symbolMargin: '20%',
        symbolSize: 16,
        symbolClip: true,
        symbolBoundingData: this.fullCount,
        symbol: `image://${CONFIG_STYLE.imgGroup[this.colorType][this.order]}`
      }))
      this.option = option
    }
  },
  mounted () {
    this.initChart()
  }
}
</script>

<style lang="scss" scoped>
.pictorial-bar-wrap {
  height: 20px;
  width: 120px;
}
</style>
