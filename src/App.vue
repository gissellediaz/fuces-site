<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
  }
}
</script>

<style lang="scss">
  @import 'src/assets/css/main';
  .content-fuces {
    margin-top: 70px;
    min-height: calc(100vh - 98px - 70px)
  }
</style>
