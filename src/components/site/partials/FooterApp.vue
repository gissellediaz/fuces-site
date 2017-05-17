<template lang="html">
  <footer>
    <div class="container">
      <div class="row m-t-md">
        <div class="col-md-6">
          <ul class="links">
            <li v-bind:class="{ 'active': $route.fullPath === '/' }" ><router-link to="/">Inicio</router-link></li>
            <li v-bind:class="{ 'active': $route.fullPath === '/cursos' }"><router-link to="/cursos">Cursos</router-link></li>
            <li v-bind:class="{ 'active': $route.fullPath === '/eventos' }"><router-link to="/eventos">Eventos</router-link></li>
            <li v-bind:class="{ 'active': $route.fullPath === '/nosotros' }"><router-link to="/nosotros">Nosotros</router-link></li>
            <li v-bind:class="{ 'active': $route.fullPath === '/contacto' }"><router-link to="/contacto">Contacto</router-link></li>
          </ul>
        </div>
        <div class="col-md-6">
          <ul class="social">
            <li><i class="fa fa-envelope" aria-hidden="true"></i> fundaconcienciaecosocial@outlook.com</li>
            <li><i class="fa fa-phone" aria-hidden="true"></i> +584149993620</li>
            <li><a href="https://www.facebook.com/profile.php?id=100009200676561" target="_blank"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
            <li><a href="https://twitter.com/fundaecosocial1" target="_blank"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
          </ul>
        </div>
      </div>
      <hr>
      <div class="row">
        <div class="col-md-12">
          <p class="text-center"><i class="fa fa-copyright" aria-hidden="true"></i> Fundación Conciencia Ecosocial 2017</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
}
</script>

<style lang="scss">
  footer {
    color: lightgrey;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    ul {
      display: flex;
      list-style: none;
      padding-left: 0px;
      padding-right: 0px;
      li {
        margin-right: 15px;
        &:last-child {
          margin-right: 0px;
        }
        a {
          color: lightgrey;
        }
      }
    }
    .m-t-md {
      margin-top: 30px;
    }
    hr {
      margin-top: 5px;
      margin-bottom: 10px;
      border-top: 1px solid lightgrey;
    }
    .social {
      justify-content: flex-end;
    }
  }

  @media screen and (max-width: 991px) {
    .social {
      justify-content: center !important;
    }
    .links {
      justify-content: center;
    }
  }
</style>
