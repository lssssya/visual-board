<template>
  <div class="loop-wrap">
    <div class="center">
      {{total}}
      <div class="label">名师总数[人]</div>
    </div>
    <echarts-container
      ref="loop"
      :width="224"
      :height="224"
      :option="option"
    />
  </div>
</template>

<script>
import CONFIG_STYLE from '../config/style.js'
import CONFIG_DATASET from '../config/data.js'

export default {
  name: 'LoopWrap',
  data () {
    return {
      option: {},
      pieData: []
    }
  },
  computed: {
    total () {
      return this.pieData.reduce((a, b) => a + b.teacherNumber, 0)
    }
  },
  methods: {
    highLight () {
      const echartsInstance = this.$refs.loop.getInstance()
      echartsInstance.dispatchAction({
        type: 'highlight',
        seriesIndex: 0,
        dataIndex: 0
      })
      echartsInstance.dispatchAction({
        type: 'downplay',
        seriesIndex: 0,
        dataIndex: 1
      })
    },
    switchColor () {
      // 这里取的是 option.series[0].data 最后的一个 pie 值
      // pop 出去然后 unshift 进来
      // 更换数据
      const lastSubject = this.option.series[0].data.pop()
      this.option.series[0].data.unshift(lastSubject)
      // 更换颜色
      const lastColor = this.option.color.pop()
      this.option.color.unshift(lastColor)
      this.$refs.loop.setInstanceOption(this.option)

      const color = lastSubject.colorType
      this.$emit('switchColor', color)
      this.highLight()
    },
    initChart () {
      // 准备数据
      this.pieData = Object.keys(CONFIG_DATASET.dataset).map(e => ({
        type: e,
        subject: CONFIG_DATASET.dataset[e].subject,
        teacherNumber: CONFIG_DATASET.dataset[e].teacherNumber
      }))
      // 设置option
      this.setOption()
      this.$nextTick(() => {
        this.highLight()
      })
    },
    setOption () {
      const option = {
        color: [...CONFIG_STYLE.pieColor],
        series: [{
          name: 'teacher',
          type: 'pie',
          clockwise: false,
          center: [114, 112],
          radius: [79 - 5, 79 + 5],
          hoverOffset: 5,
          avoidLabelOverlap: false,
          label: {
            show: false
          },
          labelLine: {
            show: false
          },
          data: []
        }]
      }
      option.series[0].data = this.pieData.map(({ type, teacherNumber, subject }, index) => ({
        colorType: type,
        value: teacherNumber,
        name: subject,
        itemStyle: {
          // 用 border 做间隔 borderColor 去取一个背景色 融入背景
          borderWidth: 4,
          borderColor: '#021720',
          shadowColor: CONFIG_STYLE.pieShadowColor[index],
          shadowBlur: 10,
          shadowOffsetY: 5,
          shadowOffsetX: 5
        }
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
.loop-wrap {
  position: relative;
  height: 224px;
  width: 224px;
  margin-top: -8px;
  margin-right: -4px;
  background: url('../../../assets/images/bg_pie_teacher.png') no-repeat;
  .center {
    position: absolute;
    top: 68px;
    left: 74px;
    font-family: DINAlternate-Bold;
    font-size: 48px;
    color: #ffffff;
    text-align: center;
    .label {
      font-family: MicrosoftYaHeiUI;
      font-size: 14px;
      color: rgba(255, 255, 255, 0.7);
    }
  }
}
</style>
