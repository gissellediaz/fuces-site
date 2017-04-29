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
          <img class="img-responsive logo-img" src="../../assets/images/logo.png" alt="">
        </a>
        <a class="navbar-brand navbar-brand-txt" href="#">
          <span class="">Fuces</span>
        </a>
      </div>

      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="navbar">
        <ul class="nav navbar-nav navbar-right">
          <li class="active"><a href="#">Inicio</a></li>
          <li class=""><a href="#">Cursos</a></li>
          <li class=""><a href="#">Eventos</a></li>
          <li class=""><a href="#">Historia</a></li>
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
      font-size: 1.8em;
      margin-left: 2px !important;
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
