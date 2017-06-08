<template lang="html">
  <div class='container m-t-xl'>
    <div class="panel panel-default">
      <div class="panel-heading heading-button">
        <h4 class="m-t-xs m-b-xs">Eventos</h4>
        <router-link class='btn btn-md btn-default' to="/admin/eventos/crear-evento">Crear Evento</router-link>
      </div>
      <div v-if="events.length == 0" class="panel-body panel-admin flex-center">
        <i class="material-icons text-emty panel-icon">event_busy</i>
        <h4 class="p-b-xl">No hay eventos</h4>
      </div>
      <ul  v-else class="list-group">
        <li class="list-group-item">
          <div class="form-group has-feedback m-b-0">
            <input v-model="search" v-on:keyup="searchEvent" placeholder="Buscar evento" type="text" class="form-control m-b-0 input-md b-r-0" aria-describedby="inputSuccess2Status">
            <span v-if="!loading" class="glyphicon glyphicon-search form-control-feedback text-primary" aria-hidden="true"></span>
            <i v-else class="fa fa-spin fa-spinner form-control-feedback text-primary"></i>
          </div>
        </li>
      </ul>
    </div>
    <div class="row" v-if="events.length !== 0">
      <div class="col-md-4" v-for="event in events">
        <card-event-admin v-bind:event="event"></card-event-admin>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import CardEventAdmin from '@/components/admin/partials/CardEventAdmin'

export default {
  components: {
    CardEventAdmin
  },
  computed: {
    ...mapGetters({
      events: 'getAllEvents'
    })
  },
  data () {
    return {
      search: '',
      loading: false
    }
  },
  mounted () {
    this.getAllEvents()
  },
  methods: {
    ...mapActions([
      'getAllEvents'
    ]),
    shortText (text) {
      if (text.length > 90) {
        return text.substring(0, 90) + '...'
      }
      return text
    },
    searchEvent () {
      console.log(this.search)
    }
  }
}
</script>

<style lang="scss">
  .panel-admin {
    min-height: 60vh;
  }
  .list-event-content {
    border-bottom: solid 1px #dae0e5 !important;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    .info {
      flex: 1;
      margin-left: 20px;
      .info-bottom {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
      }
    }
  }
  .content-description{
    height: 100px;
    overflow: auto;
  }
  .image-list {
    width: 200px;
  }
  .w-lg {
    height: 150px !important;
  }
  .w-70 {
    width: 70% !important;
  }
  .heading-navigation {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .heading-button {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
