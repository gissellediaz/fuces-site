<template lang="html">
  <div class="">
    <nav-bar></nav-bar>
    <hero></hero>
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <h3>Cursos Populares</h3>
          <hr>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-6 col-md-4" v-for="n in 6">
          <div class="thumbnail card animated fadeInUp">
            <div class="img-card"></div>
            <div class="caption card-content">
              <h5><strong>El arte de reciclar</strong></h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <span><strong>Horas:</strong> 60</span>
              <br>
              <span><strong>Instructor:</strong> Lcdo. Carlos Luna</span>
              <hr>
              <a href="#" class="btn btn-primary pull-right" role="button">Inscribirse</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer-app> </footer-app>

  </div>
</template>

<script>
import NavBar from '@/components/partials/NavBar'
import Hero from '@/components/partials/Hero'
import FooterApp from '@/components/partials/FooterApp'
export default {
  components: {
    NavBar,
    Hero,
    FooterApp
  }
}
</script>

<style lang="scss">
  .card {
    padding: 0px;
    background-color: white;
    border-radius: 0px;
    height: 400px;
    .img-card {
      background-image: url("../assets/images/w1.jpg");
      background-position: center;
      background-size: contain;
      height: 120px;
    }
    .card-content {
      margin: 10px;
    }
  }
</style>
