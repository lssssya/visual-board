<template>
  <div class="chart-wrap">
    <div class="left-wrap">
      <div
        :class="colorType"
        class="subject-info"
      >
        <span class="subject-name">{{currentData.subject}}</span>
        <span class="teacher-count">
          名师<span class="count">{{currentData.teacherNumber}}</span>人
        </span>
      </div>
      <div class="bar-list">
        <div
          v-for="(item,index) in barList"
          :key="item.key"
          class="bar-item"
        >
          <div class="label">
            <div
              class="title"
              :style="{'letter-spacing':computeLetterSpace(item.label.length)}"
            >{{item.label}}</div>
            <div class="unit">[{{item.unit}}]</div>
          </div>
          <pictorial-bar
            :colorType="colorType"
            :fullCount="item.value"
            :currentCount="currentData.barData[index].value"
            :order="index"
          ></pictorial-bar>
          <div class="count">{{currentData.barData[index].value}}</div>
        </div>
      </div>
    </div>
    <div class="right-wrap">
      <loop-wrap
        ref="loopWrap"
        @switchColor="handleSwitchColor"
      ></loop-wrap>
    </div>
  </div>
</template>

<script>
import CONFIG_DATASET from './config/data.js'
import LoopWrap from './components/loop'
import PictorialBar from './components/pictorial-bar'

export default {
  name: 'SubjectStat',
  components: {
    LoopWrap,
    PictorialBar
  },
  data () {
    return {
      colorType: 'blue',
      barList: CONFIG_DATASET.dataStat
    }
  },
  computed: {
    currentData () {
      return CONFIG_DATASET.dataset[this.colorType]
    }
  },
  methods: {
    handleSwitchColor (color) {
      this.colorType = color
    },
    computeLetterSpace (length) {
      switch (length) {
        case 3: return '15px'
        case 4: return '5px'
        default: return '0'
      }
    }
  },
  mounted () {

  }
}
</script>

<style lang="scss" scoped>
.chart-wrap {
  height: 200px;
  width: 456px;
  display: flex;
  position: absolute;
  .left-wrap {
    // width: 100px;
    // height: 100px;
    .subject-info {
      box-sizing: border-box;
      padding-top: 4px;
      padding-left: 18px;
      margin-left: -12px;
      width: 150px;
      height: 36px;
      &::after {
        content: '';
        position: absolute;
        top: 16px;
        left: 136px;
        width: 136px;
        height: 1px;
        z-index: 1;
      }
      &::before {
        content: '';
        position: absolute;
        top: 27px;
        left: 270px;
        width: 64px;
        height: 1px;
        -webkit-transform: rotate(7deg);
        transform: rotate(20deg);
        z-index: 1;
      }
      &.blue {
        &::after,
        &::before {
          background: #00e7ff;
        }
        background: url('../../assets/images/color-group/bg_subject_blue.png') no-repeat;
      }
      &.green {
        &::after,
        &::before {
          background: #02ffa8;
        }
        background: url('../../assets/images/color-group/bg_subject_green.png') no-repeat;
      }
      &.white {
        &::after,
        &::before {
          background: #ebffe6;
        }
        background: url('../../assets/images/color-group/bg_subject_white.png') no-repeat;
      }
      &.yellow {
        &::after,
        &::before {
          background: #ffed56;
        }
        background: url('../../assets/images/color-group/bg_subject_yellow.png') no-repeat;
      }
      .subject-name {
        font-family: MicrosoftYaHeiUI;
        font-size: 18px;
        color: #ffffff;
        margin-right: 6px;
      }
      .teacher-count {
        font-family: MicrosoftYaHeiUI;
        font-size: 14px;
        color: rgba(255, 255, 255, 0.7);
        letter-spacing: 0;
        line-height: 18px;
        .count {
          font-family: DINAlternate-Bold;
          font-size: 16px;
          color: #ffffff;
          margin: 0 4px;
        }
      }
    }
    .bar-list {
      box-sizing: border-box;
      width: 260px;
      .bar-item {
        display: flex;
        margin-top: 16px;
        .label {
          position: relative;
          font-family: MicrosoftYaHeiUI;
          font-size: 14px;
          line-height: 20px;
          color: rgba(255, 255, 255, 0.7);
          margin-right: 8px;
          .title {
            width: 95px;
          }
          .unit {
            position: absolute;
            right: 0;
            top: 0;
          }
        }
        .count {
          width: 36px;
          margin-left: 8px;
          font-family: DINAlternate-Bold;
          font-size: 16px;
          color: #f6ffff;
          text-align: left;
          line-height: 20px;
        }
      }
    }
  }
}
</style>
