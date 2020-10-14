<template>
  <div :class="{
    'common-title':true,
    'right':direction === 'right',
    'long-title':long
  }">
    <div class="label">{{title}}</div>
  </div>
</template>

<script>
export default {
  name: 'CommonTitle',
  data () {
    return {}
  },
  props: {
    title: String,
    long: {
      type: Boolean,
      default: false
    },
    direction: {
      type: String,
      default: 'left'
    }
  },
  methods: {
  },
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
.common-title {
  position: relative;
  width: 100%;
  height: 40px;
  margin-bottom: 16px;
  background: url('../assets/images/bg_title_left.png') no-repeat;
  &.right {
    background: url('../assets/images/bg_title_right.png') no-repeat;
    > .label {
      left: unset;
      right: 38px;
    }
  }
  &.long-title {
    background: url('../assets/images/bg_title_left_long.png') no-repeat;
  }
  .label {
    position: absolute;
    top: 8px;
    left: 38px;
    right: unset;
    font-family: MicrosoftYaHeiUI-Bold;
    font-size: 16px;
    color: rgba(255, 255, 255, 0.9);
  }
}
</style>
