<template>
  <div class="education-device">
    <common-title
      title="教育装备"
      direction="left"
    />
    <common-stat
      ref="stat"
      :stat-data="statData"
    />
    <div class="chart">
      <div class="label">单位[套]</div>
      <div class="total">
        <div>
          <div class="text">装备建设总数</div>
          <div class="value">{{total}}</div>
        </div>
      </div>
      <bezier-curve ref="chart"></bezier-curve>
      <div class="disperse">
        <div
          v-for="(info,key) in deviceData"
          :key="key"
          class="disperse-item"
        >
          <div
            class="text"
            :style="{'letter-spacing':computeLetterSpace(info.label.length)}"
          >{{info.label}}</div>
          <div
            class="value"
            :class="{'light-color':key === 2 || key === 3}"
          >{{info.value}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CONFIG_DATASET from './config/data.js'
import BezierCurve from './bezier-curve'
export default {
  name: 'EducationDevice',
  components: {
    BezierCurve
  },
  data () {
    return {
      statData: CONFIG_DATASET.dataStat,
      deviceData: CONFIG_DATASET.dataset,
      total: CONFIG_DATASET.total
    }
  },
  methods: {
    computeLetterSpace (length) {
      switch (length) {
        case 6: return '2.6px'
        default: return '0'
      }
    }
  },
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
.text {
  width: 100px;
  display: flex;
  justify-content: space-between;
  font-family: MicrosoftYaHeiUI;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);
}
.education-device {
  // 盒子设计合理的情况下 高度会根据每个盒子自行撑开
  // height: 268px;
  width: 456px;
  .chart {
    position: relative;
    box-sizing: border-box;
    height: 204px;
    padding-top: 16px;
    display: flex;
    .label {
      position: absolute;
      top: 12px;
      left: 0;
      font-size: 12px;
      color: rgba(243, 250, 255, 0.7);
      letter-spacing: 0;
      line-height: 18px;
    }
    .total {
      height: 150px;
      max-width: 100px;
      display: flex;
      align-items: center;
      .value {
        font-family: DINAlternate-Bold;
        font-size: 48px;
        // color: #ffffff;
        background-image: -webkit-linear-gradient(right, #ffdd5d, #ff8613);
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
    }
    .disperse {
      height: 150px;
      width: 130px;
      margin-left: 20px;
      margin-top: -8px;
      .disperse-item {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        margin-bottom: 20px;
        .value {
          font-family: DINAlternate-Bold;
          font-size: 20px;
          background-image: -webkit-linear-gradient(right, #ffdd5d, #ff8613);
          -webkit-text-fill-color: transparent;
          background-clip: text;
          &.light-color {
            background-image: -webkit-linear-gradient(left, #ffb400, #9ffbdc);
          }
        }
      }
    }
  }
}
</style>
