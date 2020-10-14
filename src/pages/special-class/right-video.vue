<template>
  <div class="right-wrap">
    <div class="main">
      <div class="title">
        <span class="class-info">{{classInfo}}</span>
        <span class="in-class">
          <span>{{inClass}}</span>个班级正在上课
          <!-- <span class="decoration"></span> -->
        </span>

      </div>
      <div class="video-wrap">
        <video
          ref="video"
          controls="controls"
          controlsList="nodownload"
          autoplay
          muted
          width="398"
          height="218"
          :src="videoUrl"
          @ended="carousel"
        />
      </div>
    </div>
  </div>
</template>
<script>
import CONFIG_DATASET from './config/data.js'

export default {
  name: 'RightVideo',
  data () {
    return {
      videoList: CONFIG_DATASET.videoList,
      classInfo: '富阳中学-三年(2)班',
      videoUrl: '',
      index: 0,
      inClass: 6
    }
  },
  methods: {
    handleVideoSwitch (i, first = false) {
      this.videoUrl = this.videoList[i].videoUrl
      // 为了解决 The play() request was interrupted by a new load request 的问题
      if (!first) {
        this.$refs.video.play()
      }
      this.classInfo = this.videoList[i].className
    },
    carousel () {
      this.index++
      if (this.index === 6) this.index = 0
      this.handleVideoSwitch(this.index)
    }
  },
  mounted () {
    this.handleVideoSwitch(0, true)
  }
}
</script>

<style lang="scss" scoped>
.right-wrap {
  // 盒子设计合理的情况下 高度会根据每个盒子自行撑开
  // height:324px;
  width: 434px;
  height: 292px;
  margin-top: -28px;
  // 每个 legend 有自己的位置安排 所以放这里完成布局
  background: url('../../assets/images/bg_video.png') no-repeat;
  background-position-x: left;
  background-size: 107%;
  .main {
    padding-left: 24px;
    .title {
      box-sizing: border-box;
      width: 100%;
      margin-top: 32px;
      margin-bottom: 8px;
      padding-left: 20px;
      .class-info {
        position: relative;
        font-family: MicrosoftYaHeiUI;
        font-size: 16px;
        color: rgba(255, 255, 255, 0.9);
        margin-right: 16px;
        &::after {
          position: absolute;
          top: 6px;
          right: -12px;
          content: '';
          width: 100%;
          height: 12px;
          border-right: 1px solid rgb(160, 249, 225);
        }
      }

      .in-class {
        position: relative;
        font-family: MicrosoftYaHeiUI;
        font-size: 14px;
        color: #a0f9e1;
        > span {
          margin: 0 4px;
          font-family: DINAlternate-Bold;
          font-size: 20px;
        }
        .decoration {
          position: absolute;
          display: inline-block;
          top: 4px;
          right: -24px;
          width: 16px;
          height: 16px;
          background: url('../../assets/images/decoration_arrow_go.png') no-repeat;
        }
      }
    }
    .video-wrap {
      padding: 0 4px;
      box-sizing: border-box;
      width: 100%;
      height: 220px;
      > video {
        mix-blend-mode: screen;
      }
    }
  }
}
</style>
