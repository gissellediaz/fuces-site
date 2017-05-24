<template lang="html">
  <div id="myCarousel" class="carousel slide" data-ride="carousel">
    <!-- Indicators -->
    <ol class="carousel-indicators">
      <li data-target="#myCarousel" v-bind:class="[ index==0 ? 'active' : '']" v-bind:data-slide-to="index" v-for="(slide, index) in dataInCarousel"></li>
    </ol>
    <div class="carousel-inner" role="listbox">
      <div class="item img-background" v-bind:class="[ index==0 ? 'active' : '']"  v-bind:style="{backgroundImage: 'url('+slide.image+')'}" v-for="(slide, index) in dataInCarousel">
        <div class="img-layer">
          <div class="container">
            <div class="carousel-caption">
              <h1>{{ slide.title }}</h1>
              <p>{{ slide.subtitle }}</p>
              <p v-if="index !== 0"><router-link class="btn btn-md btn-primary" v-bind:to="'eventos/'+slide.slug">Seguir leyendo</router-link></p>
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
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      carousel: 'getEventsInCarousel'
    }),
    dataInCarousel () {
      return [...this.defaultData, ...this.carousel]
    }
  },
  methods: {
    ...mapActions([
      'getEventsInCarousel'
    ])
  },
  beforeMount () {
    this.getEventsInCarousel()
  },
  data () {
    return {
      defaultData: [
        {
          title: 'Fundación Conciencia Ecosocial',
          subtitle: 'Cumaná, estado Sucre',
          slug: '',
          image: 'http://www.publicdomainpictures.net/pictures/150000/velka/tropical-beach-1454007190ZAK.jpg'
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
    background-size:cover;
    .img-layer {
      display: flex;
      justify-content: center;
      background: rgba(0, 0, 0, 0.8);
      align-items: center;
      height: 500px;
    }
  }
</style>
