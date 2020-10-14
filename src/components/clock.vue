<template>
  <div class="clock">
    <span class="time">{{time}}</span>
    <span class="day">{{day}}</span>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  name: 'Clock',
  data () {
    moment.locale('zh-cn')
    return {
      time: moment().format('LTS'),
      day: moment().format('YYYY/MM/DD dddd'),
      timer: null
    }
  },
  mounted () {
    const _this = this
    this.timer = setInterval(() => {
      _this.time = moment().format('LTS')
    }, 1000)
  },
  beforeDestroy () {
    if (this.timer) clearInterval(this.timer)
  }
}
</script>

<style lang="scss" scoped>
.clock {
  position: absolute;
  top:4px;
  right: 8px;
  color: rgba(255, 255, 255, 0.7);
  .time {
    margin-right: 8px;
    font-size: 16px;
  }
  .day {
    font-size: 14px;
  }
}
</style>
