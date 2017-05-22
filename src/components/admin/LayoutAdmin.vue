<template lang="html">
  <div class="admin">
    <nav-admin></nav-admin>
    <sub-nav></sub-nav>
    <div class="content-admin">
      <router-view></router-view>
    </div>
    <footer-admin></footer-admin>
  </div>
</template>

<script>
import NavAdmin from '@/components/admin/partials/NavAdmin'
import SubNav from '@/components/admin/partials/SubNav'
import FooterAdmin from '@/components/admin/partials/FooterAdmin'

export default {
  components: {
    NavAdmin,
    SubNav,
    FooterAdmin
  }
}
</script>

<style lang="scss">
  .content-admin {
    display: flex;
    min-height: calc(100vh - 140px - 50px);
    width: 100%;
    flex: 1;
  }
</style>
