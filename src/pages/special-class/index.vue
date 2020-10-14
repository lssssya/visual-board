<template>
  <div class="special-class">
    <common-title
      title="专递课堂"
      direction="left"
      :long="true"
    />
    <div class="main">
      <left-chart ref="leftChart"></left-chart>
      <right-video></right-video>
    </div>
  </div>
</template>

<script>
import LeftChart from './left-chart'
import RightVideo from './right-video'

export default {
  name: 'SpecialClass',
  components: {
    LeftChart,
    RightVideo
  },
  data () {
    return {
    }
  },
  methods: {

  },
  mounted () {

  }
}
</script>

<style lang="scss" scoped>
.special-class {
  // 盒子设计合理的情况下 高度会根据每个盒子自行撑开
  // height:324px;
  width: 888px;
  .main {
    display: flex;
  }
}
</style>
