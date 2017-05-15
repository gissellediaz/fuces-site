<template>
  <div>
    <nav-bar></nav-bar>
    <div class="content-fuces">
      <router-view></router-view>
    </div>
    <footer-app></footer-app>
  </div>
</template>

<script>
import NavBar from '@/components/site/partials/NavBar'
import FooterApp from '@/components/site/partials/FooterApp'
export default {
  components: {
    NavBar,
    FooterApp
  }
}
</script>

<style lang="scss">
  .content-fuces {
    margin-top: 70px;
    min-height: calc(100vh - 98px - 70px)
  }
</style>
