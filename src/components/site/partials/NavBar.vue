<template lang="html">
  <nav class="navbar navbar-default navbar-fixed-top navbar-fuces" role="navigation">
    <div class="container">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand navbar-brand-logo" href="#">
          <img class="img-responsive logo-img" src="../../../assets/images/logo.png" alt="">
        </a>
        <a class="navbar-brand navbar-brand-txt" href="#">
          <span class="">Fundación Conciencia Ecosocial</span>
        </a>
      </div>

      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="navbar">
        <ul class="nav navbar-nav navbar-right">
          <li v-bind:class="{ 'active': $route.fullPath === '/' }" ><router-link to="/">Inicio</router-link></li>
          <li v-bind:class="{ 'active': $route.fullPath === '/cursos' }"><router-link to="/cursos">Cursos</router-link></li>
          <li v-bind:class="{ 'active': $route.fullPath === '/eventos' }"><router-link to="/eventos">Eventos</router-link></li>
          <li v-bind:class="{ 'active': $route.fullPath === '/nosotros' }"><router-link to="/nosotros">Nosotros</router-link></li>
          <li v-bind:class="{ 'active': $route.fullPath === '/contacto' }"><router-link to="/contacto">Contacto</router-link></li>
        </ul>
      </div><!-- /.navbar-collapse -->
    </div><!-- /.container -->
  </nav>
</template>

<script>
export default {
}
</script>

<style lang="scss">
  .navbar-fuces {
    .navbar-brand-logo {
      margin-top: 0px;
      padding: 0px;
    }
    .navbar-brand-txt {
      margin-top: 8px;
      padding-left: 0px;
      margin-left: 2px !important;
      font-size: 1.2em;
    }
    .active a {
      border-bottom: 3px #5dc83d solid;
      padding-bottom: 22px;
      background-color: transparent !important;
    }
    height: 70px;
    li a {
      padding: 23px;
    }
  }
  .logo-img {
    height: 70px;
    margin-top: 1px;
  }
</style>
