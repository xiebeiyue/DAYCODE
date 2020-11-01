<template>
  <div id="app">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    <Nav></Nav>
  </div>
</template>

<script>
  import Nav from './components/Nav'

export default {
  name: 'App',
  components: {
    Nav
}
}
</script>

<style lang="scss">
@import "./assets/css/element-ui-modify.scss";
@import "./assets/css/variable.scss";
#app {
  font-family: "Microsoft YaHei","微软雅黑",'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: $GobalFontSize;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  position: relative;
}
</style>
