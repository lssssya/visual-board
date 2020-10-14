<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      height: ''
    }
  },
  async mounted () {

  },
  methods: {

  }
}
</script>
<style lang="scss">
@import '~@/style/font/font.css';
@import '~@/style/index.scss';
body {
  margin: 0;
  padding: 0;
  background: #040d13;
}
#app {
  // font-family: PingFangSC-Reg, Helvetica, Arial, sans-serif;
  // -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;
  // // color: #2c3e50;
  font-size: 14px;
}
</style>
