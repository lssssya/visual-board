<template>
  <div class="stat-container">
    <div
      v-for="item in statData"
      :key="item.key"
      class="stat-item"
    >
      <div class="label">{{item.label}}</div>
      <span
        class="value"
        v-if="item.value !== ''"
      >
        <count-to
          :startVal="0"
          :endVal="Number(item.value)"
          :duration="3000"
        ></count-to>
        <div :style="`right: -${item.unit.length * 14}px;`">{{item.unit}}</div>
      </span>
    </div>
  </div>
  <!-- <countTo :startVal='startVal' :endVal='endVal' :duration='3000'></countTo> -->
</template>

<script>
import countTo from 'vue-count-to'
export default {
  name: 'CommonStat',
  components: {
    countTo
  },
  data () {
    return {}
  },
  props: {
    statData: Array
  },
  methods: {
  },
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
.stat-container {
  width: 100%;
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
  .stat-item {
    min-width: 72px;
    padding-right: 16px;
    .label {
      color: rgba(255, 255, 255, 0.7);
      font-family: MicrosoftYaHeiUI;
      font-size: 14px;
      margin-bottom: 2px;
    }
    .value {
      position: relative;
      font-family: DINAlternate-Bold;
      font-size: 28px;
      color: #78ebff;
      div {
        position: absolute;
        bottom: 5px;
        right: -14px;
        font-size: 12px;
      }
    }
  }
}
</style>
