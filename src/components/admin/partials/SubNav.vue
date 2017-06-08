<template lang="html">
  <nav class="navbar navbar-default navbar-static-top subnav-gtask" role="navigation">
    <div class="container">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
      </div>

      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="navbar">
        <ul class="nav navbar-nav">
          <li v-bind:class="{ 'active': $route.fullPath === '/admin' }" >
            <router-link to="/admin">
              <i class="material-icons icon-subnav">dashboard</i>Dashboard
            </router-link>
          </li>
          <li v-bind:class="{ 'active': $route.fullPath === '/admin/eventos' }" >
            <router-link to="/admin/eventos">
              <i class="material-icons icon-subnav">date_range</i>Eventos
            </router-link>
          </li>
          <li v-bind:class="{ 'active': $route.fullPath === '/admin/cursos' }" >
            <router-link to="/admin/cursos">
              <i class="material-icons icon-subnav">school</i>Cursos
            </router-link>
          </li>
          <li v-bind:class="{ 'active': $route.fullPath === '/admin/configuracion' }" >
            <router-link to="/admin/configuracion">
              <i class="material-icons icon-subnav">settings</i>Configuracion
            </router-link>
          </li>
        </ul>
      </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
  </nav>
</template>

<script>
export default {
}
</script>

<style lang="scss">
  .subnav-gtask {
    height: 65px;
    margin-bottom: 0px;
    a {
      font-size: 16px !important;
      padding-left: 0px !important;
      padding-right: 0px !important;
      margin-right: 30px;
      padding-top: 21px !important;
      padding-bottom: 20px !important;
    }
    .icon-subnav {
      font-size: 18px !important;
      margin-right: 8px;
    }
    .navbar-nav > .active > a,
    {
      padding-bottom: 18px !important;
      color: #49A42E !important;
    }
    .navbar-nav > .active > a, .navbar-nav > .active > a:hover, .navbar-nav > .active > a:focus {
      background-color: #FFF;
      border-bottom: solid 1px #49A42E;
    }
    .navbar-brand {
      font-size: 20px !important;
    }
  }
</style>
