<template lang="html">
  <div class='container m-t-xl'>
    <div class="panel panel-default">
      <div class="panel-heading heading-button">
        <h4 class="m-t-xs m-b-xs">Eventos</h4>
        <router-link class='btn btn-md btn-default' to="/admin/eventos/crear-evento">Crear Evento</router-link>
      </div>
      <div v-if="(events.length == 0 && search == '')" class="panel-body panel-admin flex-center">
        <i class="material-icons text-emty panel-icon">event_busy</i>
        <h4 class="p-b-xl">No hay eventos</h4>
      </div>
      <ul v-else class="list-group">
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
      <div class="event-item col-md-4" v-for="event in events">
        <card-event-admin v-bind:event="event" v-bind:select="selectEvent"></card-event-admin>
      </div>
    </div>
    <div class="m-b-md" v-if="!max">
      <button id="btn-more" type="button" v-on:click="showMore" class="btn btn-primary btn-block">Mas eventos</button>
    </div>
    <!-- Modal -->
    <div class="modal fade custom-modal" id="modal-eliminar" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title">Eliminar Evento</h4>
          </div>
          <div class="modal-body">
            <h5>¿Esta seguro que desea eliminar este evento? {{event_delete.id}} </h5>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Cancelar</button>
            <button type="button" id="btn-delete" v-on:click="doDeleteEvent(event_delete.id)"class="btn btn-primary">Aceptar</button>
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal-dialog -->
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
      event_delete: {
        id: ''
      },
      search: '',
      loading: false,
      max: false
    }
  },
  mounted () {
    this.getAllEvents()
    .then(() => {
      console.log(this.events.length)
      if (this.events.length < 6) {
        this.max = true
      }
    })
  },
  methods: {
    ...mapActions([
      'getAllEvents',
      'deleteEvent',
      'moreEvents',
      'findEvents'
    ]),
    selectEvent (e) {
      this.event_delete = e
    },
    shortText (text) {
      if (text.length > 90) {
        return text.substring(0, 90) + '...'
      }
      return text
    },
    searchEvent () {
      if (this.search !== '') {
        this.max = true
      } else {
        if (this.courses.length < 6) {
          this.max = false
        } else {
          this.max = true
        }
      }
      this.loading = true
      this.findEvents(this.search)
      .then(() => {
        this.loading = false
      })
      .catch(() => {
        this.loading = false
      })
    },
    doDeleteEvent (eventId) {
      window.$('#btn-delete').button('loading')
      this.deleteEvent(eventId)
      .then(() => {
        window.$('#btn-delete').button('reset')
        window.$('#modal-eliminar').modal('hide')
      })
      .catch(() => {
        window.$('#btn-delete').button('reset')
        window.$toastr.warning('No se pudo borrar el evento')
      })
    },
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
