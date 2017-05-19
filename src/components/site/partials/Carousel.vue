<template lang="html">
  <div id="myCarousel" class="carousel slide" data-ride="carousel">
    <!-- Indicators -->
    <ol class="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" v-bind:class="[ index==0 ? 'active' : '']" v-for="(slide, index) in slides"></li>
    </ol>
    <div class="carousel-inner" role="listbox">
      <div class="item img-background" v-bind:class="[ index==0 ? 'active' : '']"  v-bind:style="{backgroundImage: 'url('+slide.image+')'}" v-for="(slide, index) in slides">
        <div class="img-layer">
          <div class="container">
            <div class="carousel-caption">
              <h1>{{ slide.title }}</h1>
              <p>{{ slide.subtitle }}</p>
              <p><router-link class="btn btn-lg btn-primary" v-bind:to="'eventos/'+slide.slug">Seguir leyendo</router-link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
      <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
      <span class="sr-only">Anterior</span>
    </a>
    <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
      <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
      <span class="sr-only">Siguiente</span>
    </a>
  </div>
</template>

<script>
export default {
  data () {
    return {
      slides: [
        {
          title: 'Dia mundial de la playas 2017',
          subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
          slug: 'dia-mundial-de-la-playa-2017',
          image: 'http://www.publicdomainpictures.net/pictures/150000/velka/tropical-beach-1454007190ZAK.jpg'
        },
        {
          title: 'Creando conciencia en las escuelas',
          subtitle: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          slug: 'creando-conciencia-en-las-escuelas',
          image: 'http://www.fondox.net/wallpapers/un-valle-natural-1136.jpg'
        },
        {
          title: 'Tittle 3',
          subtitle: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
          slug: 'title-3',
          image: 'http://k39.kn3.net/taringa/2/4/3/0/6/6/13/soyluuchoox/1A4.jpg?8548'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
  /* CUSTOMIZE THE CAROUSEL
  -------------------------------------------------- */
  /* Carousel base class */
  .carousel {
    height: 500px;
    margin-bottom: 60px;
  }
  /* Since positioning the image, we need to help out the caption */
  .carousel-caption {
    z-index: 10;
  }
  /* Declare heights because of positioning of img element */
  .carousel .item {
    height: 500px;
    background-color: #777;
  }
  .carousel-inner > .item > img {
    position: absolute;
    top: 0;
    left: 0;
    min-width: 100%;
    height: 500px;
  }
  .img-background {
    background-color: black;
    background-image: url("../../../assets/images/wallpaper-3.jpg");
    background-position: center;
    background-repeat: no-repeat;
    .img-layer {
      display: flex;
      justify-content: center;
      background: rgba(0, 0, 0, 0.8);
      align-items: center;
      height: 500px;
    }
  }
</style>
