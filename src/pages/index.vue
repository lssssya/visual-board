<template>
  <div
    class="board-container"
    :style="`background:url(${backgroundImg}) no-repeat;background-size:100%;`"
  >
    <div class="board-header"></div>
    <!-- <div class="board-header">
      <clock></clock>
    </div> -->
    <div class="board-main">
      <div class="left-chunk">
        <education-device ref="educationDevice"></education-device>
        <education-resource
          ref="educationResource"
          style="margin-top:12px"
        ></education-resource>
      </div>
      <div class="center-chunk">
        <map-wrap ref="mapWrap"></map-wrap>
      </div>
      <div class="right-chunk">
        <user-notify ref="userNotify"></user-notify>
        <patrol-stat
          ref="patrolStat"
          style="margin-top:12px"
        ></patrol-stat>
      </div>
    </div>
    <div class="board-bottom">
      <special-class ref="specialClass"></special-class>
      <star-teacher ref="starTeacher"></star-teacher>
      <star-school ref="starSchool"></star-school>
    </div>
  </div>
</template>
<script>
import MapWrap from '@/pages/center-map'

import EducationResource from '@/pages/education-resource'
import EducationDevice from '@/pages/education-device'

import PatrolStat from '@/pages/patrol-stat'
import UserNotify from '@/pages/user-notify'
import StarSchool from '@/pages/star-school'
import StarTeacher from '@/pages/star-teacher'

import SpecialClass from '@/pages/special-class'

// import Clock from '@/components/clock'

import { mapState } from 'vuex'
export default {
  name: 'BoardIndex',
  components: {
    EducationResource,
    EducationDevice,
    UserNotify,
    PatrolStat,
    StarTeacher,
    StarSchool,
    MapWrap,
    // Clock
    SpecialClass
  },
  computed: {
    ...mapState(['backgroundImg'])
  },
  data () {
    return {
      currentLoopIndex: 0
    }
  },
  mounted () {
    document.onmousedown = function () {
      if (event.button === 2) {
        event.preventDefault()
        return false
      }
    }
    this.animate()
  },
  methods: {
    animate () {
      setInterval(() => {
        // this.$refs.userNotify.animate()
        // this.$refs.educationDevice.$refs.chart.startAnimate()
        // this.$refs.starTeacher.$refs.subjectStat.$refs.loopWrap.switchColor()
        // this.showMapScatter()
        this.showAllCharts()
      }, 5000)
      setInterval(() => {
        this.$refs.educationDevice.$refs.chart.startAnimate()
      }, 10000)
      setInterval(() => {
        this.$refs.userNotify.animate()
      }, 4000)
      setInterval(() => {
        this.$refs.starTeacher.$refs.subjectStat.$refs.loopWrap.switchColor()
      }, 3000)
      setInterval(() => {
        this.showMapScatter()
      }, 6000)
    },
    showMapScatter () {
      if (this.$refs.mapWrap.$refs.map) {
        this.$refs.mapWrap.$refs.map.animate()
      }
    },
    showAllCharts () {
      this.currentLoopIndex === 5 ? this.currentLoopIndex = 0 : this.currentLoopIndex++
      this.$refs.educationResource.$refs.chart.showtip(this.currentLoopIndex)
      this.$refs.specialClass.$refs.leftChart.$refs.chart.showtip(this.currentLoopIndex)
      this.$refs.patrolStat.$refs.chart.showtip(this.currentLoopIndex)
      this.$refs.starSchool.$refs.chart.showtip(this.currentLoopIndex)
    }
  }

}
</script>
<style lang="scss" scoped>
.board-container {
  overflow: hidden;
  width: 1920px;
  height: 1080px;
  background: url('../assets/images/app-background/bg_shadow_map.png') no-repeat;
  background-size: 100%;
  .board-main,
  .board-bottom {
    box-sizing: border-box;
    padding: 0 24px;
    display: flex;
    justify-content: space-between;
  }
  .board-header {
    box-sizing: border-box;
    width: 100%;
    height: 64px;
    margin-bottom: 20px;
    background: url('../assets/images/bg_header.png') no-repeat;
  }
  .board-main {
    width: 100%;
    height: 620px;
    margin-bottom: 32px;
    .left-chunk {
      width: 456px;
      height: 100%;
    }
    .right-chunk {
      width: 456px;
      height: 100%;
    }
    .center-chunk {
      width: 920px;
      height: 100%;
    }
  }
  .board-bottom {
    width: 100%;
  }
}
</style>
