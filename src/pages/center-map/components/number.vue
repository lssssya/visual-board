<template>
  <div class="scroll-number">
    <div class="value">{{randomNumber}}</div>
  </div>
</template>

<script>
export default {
  name: 'Number',
  props: {
    number: String
  },
  data () {
    return {
      finalTimes: 100,
      times: 0,
      randomNumber: 0
    }
  },

  methods: {
    random (bezier) {
      setTimeout(() => {
        if (this.finalTimes === this.times) {
          this.randomNumber = this.number
          return
        }

        this.randomNumber = Math.floor(Math.random() * 10)
        if (this.randomNumber === 10) this.randomNumber = 0
        this.times += 2

        this.random(this.times)
      }, bezier)
    }
  },
  mounted () {
    this.random()
  }
}
</script>

<style lang="scss" scoped>
.scroll-number {
  width: 50px;
  height: 64px;
  background: url('../../../assets/images/bg_number.png') no-repeat center;
  margin: 0 2px;
  .value {
    font-family: DINAlternate-Bold;
    color: #fff;
    font-size: 38px;
    text-align: center;
    height: 64px;
    line-height: 64px;
  }
}
</style>
