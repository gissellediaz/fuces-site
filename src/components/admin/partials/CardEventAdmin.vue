<template lang="html">
  <div class="panel panel-default animated fadeIn">
    <div for="add-img" class="img-event w-lg" v-bind:style="{backgroundImage: 'url('+event.image+')'}">
      <div class="img-event-layer flex-center w-lg">
        <h4 class="text-emty w-70 text-center">{{ event.title }}</h4>
      </div>
    </div>
    <ul class="list-group">
      <li class="list-group-item content-description">
        <p><strong>Descripcion</strong></p>
        <p class="m-b-0 text-justify">{{shortText(event.subtitle)}}</p>
      </li>
      <li class="list-group-item">
        En caurusel
        <div class="material-switch pull-right">
          <input v-on:click.prevent="changeStatus(event)" v-bind:checked="event.carousel" v-bind:id="'carousel-check-' + event.id" name="someSwitchOption001" type="checkbox"/>
          <label v-bind:for="'carousel-check-' + event.id" class="label-primary"></label>
        </div>
      </li>
      <li class="list-group-item">
        Inicio: <span class="pull-right">{{formatDate(event.start_date)}}</span>
      </li>
      <li class="list-group-item">
        Final: <span class="pull-right">{{formatDate(event.finish_date)}}</span>
      </li>
      <li class="list-group-item">
        <div class="btn-group btn-group-justified" role="group">
          <router-link :to="'/eventos/'+event.slug" class="btn btn-sm btn-default">Ver</router-link>
          <router-link :to="'/admin/eventos'+event.slug+'/edit'" class="btn btn-sm btn-default">Modificar</router-link>
          <!-- Button trigger modal -->
          <a data-toggle="modal" v-bind:data-target="'#myModal-' + event.id" class="btn btn-sm btn-default" >
            Eliminar
          </a>

        </div>
      </li>
    </ul>
    <!-- Modal -->
    <div class="modal fade custom-modal" v-bind:id="'myModal-' + event.id" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title">Eliminar Evento</h4>
          </div>
          <div class="modal-body text-center">
            <p>¿Esta seguro que desea eliminar este evento?</p>
            <p>{{ event.title }}</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Cancelar</button>
            <button type="button" class="btn btn-primary">Aceptar</button>
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal-dialog -->
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import { mapActions } from 'vuex'

export default {
  props: ['event'],
  methods: {
    ...mapActions([
      'changeCarouselStatus'
    ]),
    shortText (text) {
      if (text.length > 90) {
        return text.substring(0, 90) + '...'
      }
      return text
    },
    formatDate (date) {
      moment.locale('es')
      return moment(date).format('ddd DD-MM-YY')
    },
    changeStatus (event) {
      this.changeCarouselStatus({event: event, status: !event.carousel})
    }
  }
}
</script>

<style lang="css">
  .custom-modal {
    background-color: rgba(0,0,0,.5);
    z-index: 1100;
  }
  .modal-backdrop.fade {
    opacity: 0;
    display: none;
    filter: alpha(opacity=0);
  }
</style>
