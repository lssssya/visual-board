<template>
  <div class="star-teacher">
    <common-title
      title="名师课堂"
      direction="left"
    />
    <common-stat
      ref="stat"
      :stat-data="statData"
    />
    <subject-stat ref="subjectStat"></subject-stat>
  </div>
</template>

<script>
import CONFIG_DATASET from './config/data.js'
import SubjectStat from './subject-stat'

export default {
  name: 'StarTeacher',
  components: {
    SubjectStat
  },
  data () {
    return {
      statData: CONFIG_DATASET.dataStat
    }
  },
  methods: {

  },
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
.star-teacher {
  // 盒子设计合理的情况下 高度会根据每个盒子自行撑开
  // height:324px;
  width: 456px;
}
</style>
