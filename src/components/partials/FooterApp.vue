<template lang="html">
  <footer>
    <div class="container">
      <div class="row m-t-md">
        <div class="col-md-6">
          <ul class="links">
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Cursos</a></li>
            <li><a href="#">Eventos</a></li>
            <li><a href="#">Nosotros</a></li>
          </ul>
        </div>
        <div class="col-md-6">
          <ul class="social">
            <li><i class="fa fa-envelope" aria-hidden="true"></i> fuces@gmail.com</li>
            <li><i class="fa fa-phone" aria-hidden="true"></i> 0293-45112345</li>
            <li><i class="fa fa-facebook" aria-hidden="true"></i></li>
            <li><i class="fa fa-twitter" aria-hidden="true"></i></li>
            <li><i class="fa fa-instagram" aria-hidden="true"></i></li>
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
