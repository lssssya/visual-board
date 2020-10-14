<template>
  <div class="user">
    <common-title
      title="用户动态"
      direction="right"
    />
    <transition-group
      name="scorll"
      class="scorll-wrap"
    >
      <div
        class="notify-list"
        v-for="(item) in notifyList"
        :key="item.content"
      >
        <div class="notify-item">
          <div class="avatar">
            <img
              :src="item.avatar"
              alt=""
            >
          </div>
          <div class="title">
            <span>{{item.teacher}}</span>
            <span>{{item.org}}</span>
            <span>{{item.time}}</span>
          </div>
          <div class="content">
            <img
              :src="item.icon"
              alt=""
            >
            <span>开设了{{getLabel(item.type)}}《{{item.content}}》</span>
          </div>
        </div>
      </div>
    </transition-group>
  </div>
</template>

<script>
import moment from 'moment'
import CONFIG_DATASET from './config/data.js'
export default {
  name: 'UserNotify',
  data () {
    return {
      notifyAllList: CONFIG_DATASET.dataset
    }
  },
  computed: {
    notifyList () {
      return this.notifyAllList.slice(0, 3)
    }
  },
  methods: {
    getLabel (type) {
      switch (type) {
        case 'interact': return '互动'
        case 'live': return '录播'
        case 'evaluate': return '评课'
      }
    },
    queenSwitch () {
      const temp = this.notifyAllList.pop()
      temp.time = moment().format('MM/DD HH:mm')
      this.notifyAllList.unshift(temp)
    },
    animate () {
      this.queenSwitch()
    }
  },
  mounted () {
  }
}
</script>
<style lang="scss" scoped>
// scorll
.scorll-move {
  transition: transform 1s;
}
.scorll-enter-active {
  animation-name: selfFadeInDown;
  animation-duration: 1s;
}
.scorll-leave-active {
  animation-name: selfFadeOut;
  animation-duration: 1s;
}
.user {
  // 盒子设计合理的情况下 高度会根据每个盒子自行撑开
  // height: 268px;
  width: 456px;
  height: 330px;
  overflow: hidden;
  .scorll-wrap {
    width: 100%;
    height: 304px;
    .notify-list {
      width: 100%;
      .notify-item {
        width: 100%;
        height: 72px;
        margin-bottom: 16px;
        position: relative;
        .title {
          display: flex;
          margin-left: 116px;
          margin-bottom: 8px;
          font-family: MicrosoftYaHeiUI;
          font-size: 12px;
          color: rgba(255, 255, 255, 0.7);
          > span:first-child {
            margin-right: 8px;
          }
          > span:last-child {
            margin-left: auto;
          }
        }
        .content {
          box-sizing: border-box;
          height: 46px;
          padding-left: 114px;
          padding-top: 12px;
          display: flex;
          background: url('../../assets/images/bg_user_list.png') no-repeat;
          > img {
            display: inline-block;
            width: 32px;
            height: 18px;
            margin-right: 8px;
          }
          > span {
            line-height: 42px;
            font-family: MicrosoftYaHei;
            font-size: 16px;
            color: #f6faff;
            letter-spacing: 0;
            line-height: 16.8px;
          }
        }
        .avatar {
          position: absolute;
          top: 0;
          left: 40px;
          width: 56px;
          height: 56px;
          border-radius: 8px;
          border: 1px solid #08ebf5;
          > img {
            display: inline-block;
            width: 56px;
            height: 56px;
            border-radius: 8px;
          }
        }
      }
    }
  }
}
</style>
