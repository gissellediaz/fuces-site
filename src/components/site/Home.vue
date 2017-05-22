<template lang="html">
  <div class="">
    <carousel></carousel>
    <div class="container animated fadeInUp">
      <div class="row">
        <div class="col-md-12 col-sm-12">
          <h3>Proximos Eventos</h3>
          <hr>
        </div>
        <div class="col-md-8">
          <div class="row">
            <div class="col-md-6" v-for="(event, index) in events">
              <card-event v-bind:event="event"></card-event>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="panel panel-default">
            <div class="panel-body">
              <h4>Misión</h4>
              <p>Promover la educación ambiental en todos los niveles educativos y comunitarios, a través de programas y proyectos de desarrollo sustentable de los recursos naturales...</p>
              <router-link to="/nosotros">Seguir leyendo</router-link>
            </div>
          </div>
          <div class="panel panel-default">
            <div class="panel-body">
              <h4>Visión</h4>
              <p>Dirigir su acción a la protección y conservación de nuestro ambiente, la promoción del desarrollo sustentable de los recursos naturales de nuestro estado Sucre...</p>
              <router-link to="/nosotros">Seguir leyendo</router-link>
            </div>
          </div>
          <div class="panel panel-default">
            <div class="list-group">
              <div class="list-group-item">
                <h4>Nuestra dirección</h4>
                <p>Avenida Bermúdez, Edif. Don Antonio
                  <br>Piso 1 Ofcina 1A
                </p>
              </div>
              <div class="list-group-item">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d980.8702094256238!2d-64.18383851187119!3d10.462708999531147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDI3JzQ1LjgiTiA2NMKwMTAnNTkuOCJX!5e0!3m2!1ses!2sco!4v1494085299786" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import NavBar from '@/components/site/partials/NavBar'
import Carousel from '@/components/site/partials/Carousel'
import FooterApp from '@/components/site/partials/FooterApp'
import CardEvent from '@/components/site/partials/CardEvent'
export default {
  components: {
    NavBar,
    Carousel,
    FooterApp,
    CardEvent
  },
  computed: {
    ...mapGetters({
      carousel: 'getEventsInCarousel'
    })
  },
  data () {
    return {
      events: [
        {
          title: 'Dia mundial de la playas 2017',
          subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, Lorem ipsum dolor sit amet, consectetur adipisicing elit, Lorem ipsum dolor sit amet, consectetur adipisicing elit, Lorem ipsum dolor sit amet, consectetur adipisicing elit, Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
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
        },
        {
          title: 'Dia mundial de la playas 2017',
          subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, Lorem ipsum dolor sit amet, consectetur adipisicing elit, Lorem ipsum dolor sit amet, consectetur adipisicing elit, Lorem ipsum dolor sit amet, consectetur adipisicing elit, Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
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

</style>
