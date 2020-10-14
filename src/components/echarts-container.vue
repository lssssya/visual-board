<template>
  <div
    class="echarts-container"
    :style="{'width':`${width}px`,'height':`${height}px`}"
  >
    <div
      class="chart-wrap"
      ref="echartsWrap"
    ></div>
    <div
      class="image-wrap"
      ref="echartsImage"
    ></div>
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  name: 'EchartsContainer',
  props: {
    option: Object,
    width: Number,
    height: Number
  },
  data () {
    return {
      echartInstance: null
    }
  },
  watch: {
    option (value) {
      if (this.echartInstance) {
        this.echartInstance.setOption(value)
      }
    }
  },
  methods: {
    init () {
      const _param = {}
      if (this.width) {
        _param.width = this.width
      }
      if (this.height) {
        _param.height = this.height
      }

      this.echartInstance = echarts.init(this.$refs.echartsWrap, '', _param)
      if (this.option) {
        this.echartInstance.setOption(this.option, true)
      }
    },
    resize () {
      this.echartInstance && this.echartInstance.resize()
    },
    getInstance () {
      return this.echartInstance
    },
    setInstanceOption (newOption) {
      this.echartInstance.setOption(newOption)
    },
    showtip (i) { // 手动展示tooltip
      // const _this = this
      this.echartInstance.dispatchAction({
        type: 'showTip',
        seriesIndex: 0,
        dataIndex: i
      })
    }
  },
  mounted () {
    this.init()
    window.addEventListener('resize', this.resize)
  },
  beforeDestroy () {
    if (this.echartInstance) {
      const _img = this.echartInstance.getDataURL({
        type: 'png'
      })
      this.$refs.echartsImage.style['background-image'] = `url("${_img}")`
      this.echartInstance.dispose()
    }
    window.removeEventListener('resize', this.resize)
  }
}
</script>

<style lang="scss" scoped>
.echarts-container {
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 100;
  .chart-wrap {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 101;
  }
  .image-wrap {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    position: absolute;
  }
}
</style>
