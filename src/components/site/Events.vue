<template lang="html">
  <div class="events-content">
    <div class="hero">
      <div class="img-hero" alt="">
        <div class="container">
          <h2 class="text-center">¡Nos actualizamos constantemente! <br> No te pierdas cada detalle.</h2>
        </div>
      </div>
    </div>
    <div class="container" v-if="events.length !== 0">
      <div class="row events">
        <div class="col-sm-12 col-md-6" v-for="event in events">
          <card-event v-bind:event="event"></card-event>
        </div>
      </div>
      <div class="m-b-md" v-if="!max">
        <button id="btn-more" type="button" v-on:click="showMore" class="btn btn-primary btn-block">Mas eventos</button>
      </div>
    </div>
    <div class="container empty" v-if="events.length === 0" >

        <i class="material-icons text-emty panel-icon">event_busy</i>
        <h4 class="p-b-xl">No hay eventos</h4>

    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import CardEvent from '@/components/site/partials/CardEvent'

export default {
  components: {
    CardEvent
  },
  computed: {
    ...mapGetters({
      events: 'getAllEvents'
    })
  },
  methods: {
    ...mapActions([
      'getAllEvents',
      'moreEvents'
    ]),
    showMore () {
      window.$('#btn-more').button('loading')
      this.moreEvents(this.events.length)
      .then(events => {
        if (events.length === 0 || events.length < 6) {
          this.max = true
        }
        window.$('#btn-more').button('reset')
      })
      .catch(error => {
        window.$('#btn-more').button('reset')
        console.log(error)
      })
    }
  },
  mounted () {
    this.getAllEvents()
    if (this.events.length < 6) {
      this.max = true
    }
  },
  data () {
    return {
      loading: false,
      max: false
    }
  }
}
</script>

<style lang="scss">
  .events-content {
    .b-r-0 {
      border-radius: 0px !important;
    }
    .hero {
      color: white;
      overflow: hidden;
      margin-top: 70px;
      height: 330px;
      background-color: black;
      background-image: url("../../assets/images/events.jpg");
      background-position: center;
      background-repeat: no-repeat;
      .img-hero {
        display: flex;
        justify-content: center;
        background: rgba(0, 0, 0, 0.8);
        align-items: center;
        height: 330px;
        .container {
          h3 {
            margin-top: -25px;
          }
        }
      }
    }
    .events {
      margin-top: 100px;
    }
    .events-pagination {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .empty {
      min-height: 48vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
</style>
