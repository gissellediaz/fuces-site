<template lang="html">
  <div class="panel panel-default animated fadeIn">
    <div for="add-img" class="img-period h-period" v-bind:style="{backgroundImage: 'url('+period.course.image+')'}">
      <div class="img-event-layer h-period flex-center">
      </div>
    </div>
    <div class="panel-body">
      <h4 class="text-center">{{ period.course.title }}</h4>
    </div>
    <div class=" panel-body row">
      <div class="col-md-6">
        <div class="panel panel-default w-lg flex-center clickeable" v-on:click="select(period)">
          <div class="">
            <h2 class="icon-period text-icon"><i class="material-icons text-emty icon-period">record_voice_over</i></h2>
          </div>
          <h4 class="p-b-xl m-t-0 text-primary">{{period.course.instructor}}</h4>
        </div>
      </div>
      <div class="col-md-6">
        <div class="panel panel-default w-lg flex-center clickeable"  data-toggle="modal" data-target="#modal-students" v-on:click="select(period)">
          <div class="">
            <h2 class="icon-period text-icon"><i class="material-icons text-emty icon-period">group</i></h2>
          </div>
          <h4 class="p-b-xl m-t-0 text-primary">{{ period.students.length }} Solicitudes</h4>
        </div>
      </div>
      <div class="col-md-6">
        <div class="panel panel-default w-lg flex-center clickeable" v-on:click="select(period)">
          <div class="">
            <h2 class="icon-period text-icon"><i class="material-icons text-emty icon-period">access_time</i></h2>
          </div>
          <h4 class="p-b-xl m-t-0 text-primary">{{ period.course.hours }} Horas de curso</h4>
        </div>
      </div>
      <div class="col-md-6">
        <div class="panel panel-default w-lg flex-center clickeable" v-on:click="select(period)">
          <div class="">
            <h2 class="icon-period text-icon"><i class="material-icons text-emty icon-period">lock_open</i></h2>
          </div>
          <h4 class="p-b-xl m-t-0 text-primary">En proceso de inscripcion</h4>
        </div>
      </div>
      <div class="col-md-12">
        <a data-toggle="modal" data-target="#modal-eliminar" v-on:click="select(period)" class="btn btn-md btn-block btn-danger" >
          Eliminar periodo
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import { mapActions } from 'vuex'

export default {
  props: ['period', 'select'],
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
      return moment(date, 'YYYY-MM-DD').format('LL')
    },
    formatDate2 (date) {
      moment.locale('es')
      return moment(date, 'YYYY-MM-DD').fromNow()
    },
    changeStatus (event) {
      this.changeCarouselStatus({event: event, status: !event.carousel})
    }
  }
}
</script>

<style lang="css">
  .clickeable {
    cursor: pointer;
  }
  .text-icon {
    display: flex;
    align-items: center;
  }
  .icon-period {
    font-size: 60px;
    color: #49A42E;
  }
  .custom-modal {
    display: fixed;
    background-color: rgba(0,0,0,.5);
    z-index: 1100;
  }
  .h-period {
    height: 250px !important;
  }
  .img-period {
    background-position: center;
    background-size:cover;
    background-repeat: no-repeat;
  }
  .modal-backdrop.fade {
      opacity: 0;
      display: none;
      filter: alpha(opacity=0);
    }
</style>
