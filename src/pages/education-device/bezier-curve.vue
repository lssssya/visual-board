<template>
  <div class="bezier-curve">
    <canvas
      ref="bezier"
      width="176"
      height="150"
    ></canvas>
  </div>
</template>

<script>
import CONFIG_STYLE from './config/style.js'
export default {
  name: 'BezierCurve',
  data () {
    return {
      ctx: null,
      percent: 0,
      step: 90,
      a: -5,
      full: 1000
    }
  },
  methods: {
    createCurve ({ begin, processBezier, width, colors }) {
      this.ctx.beginPath()
      this.ctx.strokeStyle = colors
      this.ctx.lineWidth = width
      const curve = new Path2D()
      curve.moveTo(...begin)
      // bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y) 三次贝塞尔曲线
      curve.bezierCurveTo(...processBezier)
      this.ctx.stroke(curve)
    },
    linearGradient ({ position, colorStop }) {
      const lingrad = this.ctx.createLinearGradient(...position)
      lingrad.addColorStop(0, colorStop.start)
      lingrad.addColorStop(1, colorStop.end)
      return lingrad
    },
    startAnimate () {
      this.percent = 0
      this.step = 90
      this.animate()
    },
    animate () {
      // 要把全部的 curve 动画全部放在这里面
      // 相当于一帧
      if (this.percent > this.full) return
      this.ctx.clearRect(0, 0, 176, 150)
      // cp2y 75 -> 10
      // y 75 -> 10
      CONFIG_STYLE.bezierCurve.map(({ finalBezier, processBezier, width, colorType }) => {
        // 计算当前 processBezier cp2y y 的点位位置

        if (colorType === 'yellow') {
          // 黄色类型的 往上动
          // cp2y 75 -> 10
          // y 75 -> 10
          processBezier[3] = finalBezier[1] - ((Math.abs(finalBezier[1] - finalBezier[3])) / this.full * this.percent)
          processBezier[5] = finalBezier[1] - ((Math.abs(finalBezier[1] - finalBezier[5])) / this.full * this.percent)
        } else {
          // 蓝色类型的 往下动
          // cp2y 75 -> 140
          // y 75 -> 140
          processBezier[3] = finalBezier[1] + ((Math.abs(finalBezier[1] - finalBezier[3])) / this.full * this.percent)
          processBezier[5] = finalBezier[1] + ((Math.abs(finalBezier[1] - finalBezier[5])) / this.full * this.percent)
        }

        this.createCurve({
          begin: [0, 75],
          finalBezier,
          processBezier,
          width,
          colors: this.linearGradient({
            position: [0, 75, 176, 0],
            colorStop: CONFIG_STYLE.bezierColor[colorType]
          })
        })
      })
      // 这里可以处理速度 a是加速度
      this.step += this.a
      if (this.step < 10) this.step = 10
      this.percent += this.step

      window.requestAnimationFrame(this.animate)
    }
  },
  mounted () {
    this.ctx = this.$refs.bezier.getContext('2d')
    this.startAnimate()
  }
}
</script>

<style lang="scss" scoped>
.bezier-curve {
  width: 176px;
  height: 150px;
}
</style>
