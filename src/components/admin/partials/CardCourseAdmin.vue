<template lang="html">
  <div class="panel panel-default animated fadeIn">
    <div for="add-img" class="img-event w-lg" v-bind:style="{backgroundImage: 'url('+course.image+')'}">
      <div class="img-event-layer flex-center w-lg">
        <h4 class="text-emty w-70 text-center">{{ course.title }}</h4>
      </div>
    </div>
    <ul class="list-group">
      <li class="list-group-item content-description">
        <p><strong>Descripcion</strong></p>
        <p class="m-b-0 text-justify">{{shortText(course.subtitle)}}</p>
      </li>
      <!-- <li class="list-group-item">
        Incripciones Abiertas
        <div class="material-switch pull-right">
          <input v-on:click.prevent="changeStatus(event)" v-bind:checked="event.carousel" v-bind:id="'carousel-check-' + event.id" name="someSwitchOption001" type="checkbox"/>
          <label v-bind:for="'carousel-check-' + event.id" class="label-primary"></label>
        </div>
      </li> -->
      <li class="list-group-item">
        Intructor: <span class="pull-right">{{course.instructor}}</span>
      </li>
      <li class="list-group-item">
        Horas: <span class="pull-right">{{course.hours}}</span>
      </li>
      <li class="list-group-item">
        <div class="btn-group btn-group-justified" role="group">
          <router-link :to="'/cursos/'+course.slug" class="btn btn-sm btn-default">Ver</router-link>
          <router-link :to="'/admin/cursos/'+course.slug+'/editar'" class="btn btn-sm btn-default">Modificar</router-link>
          <!-- Button trigger modal -->
          <a data-toggle="modal" data-target="#modal-eliminar" v-on:click="select(course)" class="btn btn-sm btn-default" >
            Eliminar
          </a>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import moment from 'moment'
import { mapActions } from 'vuex'

export default {
  props: ['course', 'select'],
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
      return moment(date, 'YYYY-MM-DD').format('ddd, DD-MM-YYYY')
    },
    changeStatus (event) {
      this.changeCarouselStatus({event: event, status: !event.carousel})
    }
  }
}
</script>

<style lang="css">
  .custom-modal {
    display: fixed;
    background-color: rgba(0,0,0,.5);
    z-index: 1100;
  }
  .modal-backdrop.fade {
      opacity: 0;
      display: none;
      filter: alpha(opacity=0);
    }
</style>
