<template>
  <div id="app">
    <nav-bar></nav-bar>
    <div class="content-fuces">
      <router-view></router-view>
    </div>
    <footer-app></footer-app>

  </div>
</template>

<script>
import NavBar from '@/components/partials/NavBar'
import FooterApp from '@/components/partials/FooterApp'
export default {
  name: 'app',
  components: {
    NavBar,
    FooterApp
  }
}
</script>

<style lang="scss">
  @import 'src/assets/css/main';
  .content-fuces {
    min-height: calc(100vh - 98px)
  }
</style>
