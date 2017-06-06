<template lang="html">
  <div class="thumbnail card">
    <div class="img-card" v-bind:style="{backgroundImage: 'url('+event.image+')'}"></div>
    <div class="caption card-content">
      <div class="">
        <h5><strong>{{event.title}}</strong></h5>
        <p class="content-event">{{shortText(event.subtitle)}}</p>
      </div>
      <div class="">
        <hr>
        <span><strong>{{formatDate(event.start_date)}}</strong></span>
        <router-link class="btn btn-primary pull-right" v-bind:to="'eventos/'+event.slug">Seguir leyendo</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import moment from 'moment'

  export default {
    props: ['event'],
    methods: {
      shortText (text) {
        if (text.length > 120) {
          return text.substring(0, 120) + '...'
        }
        return text
      },
      formatDate (date) {
        moment.locale('es')
        return moment(date).fromNow()
      }
    }
  }
</script>

<style lang="scss">
  .card {
    padding: 0px;
    background-color: white;
    border-radius: 0px;
    padding-bottom: 40px;
    height: 100%;
    .img-card {
      background-position: center;
      background-size:cover;
      height: 120px;
      background-repeat: no-repeat;
    }
    .card-content {
      margin: 10px;
    }
    .content-event {
      height: 80px;
      overflow: auto;
    }
  }
</style>
