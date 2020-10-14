<template>
  <div class="legend-item">
    <div class="icon">
      <div
        v-if="legend.type === 'color'"
        :class="legend.icon"
      ></div>
      <img
        v-if="legend.type === 'symbol'"
        :src="getImgSrc(legend.icon)"
      >
    </div>
    <div class="label">
      {{legend.label}}
      <span v-if="legend.unit">[{{legend.unit}}]</span>
    </div>
  </div>
</template>

<script>
import legendSymbelBlue from '@/assets/images/legend_symbol_blue.png'
import legendSymbelGreen from '@/assets/images/legend_symbol_green.png'
import legendSymbelWhite from '@/assets/images/legend_symbol_white.png'
import legendSymbelYellow from '@/assets/images/legend_symbol_yellow.png'

export default {
  name: 'CommonLegend',
  data () {
    return {}
  },
  props: {
    legend: Object
  },
  methods: {
    getImgSrc (color) {
      switch (color) {
        case 'green': return legendSymbelGreen
        case 'blue': return legendSymbelBlue
        case 'yellow': return legendSymbelYellow
        case 'white': return legendSymbelWhite
      }
    }
  },
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
.legend-item {
  margin-bottom: 4px;
  position: relative;
  margin-left: 12px;
  .icon {
    > div {
      position: absolute;
      top: 4px;
      left: -10px;
      width: 4px;
      height: 10px;
      &.blue {
        background-image: linear-gradient(0, rgba(77, 227, 255, 1), rgba(8, 136, 245, 1));
      }
      &.green {
        background-image: linear-gradient(0, rgba(91, 205, 135, 1), rgba(30, 194, 148, 1));
      }
      &.yellow {
        background-image: linear-gradient(0, rgba(255, 221, 93, 1), rgba(255, 134, 19, 1));
      }
      &.white {
        background-image: linear-gradient(0, rgba(255, 255, 255, 1), rgba(177, 232, 255, 1));
      }
    }
    img {
      position: absolute;
      top: 6px;
      left: -16px;
    }
  }
  .label {
    font-size: 12px;
    color: rgba(243, 250, 255, 0.7);
    letter-spacing: 0;
    line-height: 18px;
  }
}
</style>
