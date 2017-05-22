<template lang="html">
  <div class="container m-t-xl Dashboard">
    <div class="row">
      <div class="col-md-6 col-xs-12 col-sm-12">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4 class="text-primary m-t-0 m-b-0">Proximos Eventos</h4>
          </div>
          <div class="panel-body flex-center">
            <i class="material-icons text-emty panel-icon">event_busy</i>
            <h4 class="p-b-xl">No hay eventos proximamente</h4>
          </div>
          <ul class="list-group">
            <li class="list-group-item"><router-link to="/admin/eventos"><h4 class="text-center text-primary m-b-0 m-t-0">Ir a Eventos</h4></router-link></li>
          </ul>
        </div>
      </div>
      <div class="col-md-6 col-xs-12 col-sm-12">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4 class="text-primary m-t-0 m-b-0">Cursos en Inscripcion</h4>
          </div>
          <div class="panel-body flex-center">
            <i class="material-icons text-emty panel-icon">school</i>
            <h4 class="p-b-xl">No hay cursos para inscripcion</h4>
          </div>
          <ul class="list-group">
            <li class="list-group-item"><router-link to="/admin/cursos"><h4 class="text-center text-primary m-b-0 m-t-0">Ir a Cursos</h4></router-link></li>
          </ul>
        </div>
      </div>
      <div class="col-md-6 col-xs-12 col-sm-12">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4 class="text-primary m-t-0 m-b-0">Ultimos Inscritos</h4>
          </div>
          <div class="panel-body flex-center">
            <i class="material-icons text-emty panel-icon">group</i>
            <h4 class="p-b-xl">No hay alumnos inscritos</h4>
          </div>
          <ul class="list-group">
            <li class="list-group-item"><router-link to="/admin/cursos"><h4 class="text-center text-primary m-b-0 m-t-0">Ir a Cursos</h4></router-link></li>
          </ul>
        </div>
      </div>
      <div class="col-md-6 col-xs-12 col-sm-12">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4 class="text-primary m-t-0 m-b-0">Mensajes Recibidos</h4>
          </div>
          <div class="panel-body flex-center">
            <i class="material-icons text-emty panel-icon">sms_failed</i>
            <h4 class="p-b-xl">No hay alumnos inscritos</h4>
          </div>
          <ul class="list-group">
            <li class="list-group-item"><router-link to="/admin/mensajes"><h4 class="text-center text-primary m-b-0 m-t-0">Ir a Mensajes</h4></router-link></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
  .Dashboard {
    .panel-heading {
      padding: 15px;
      .text-primary{
        color: #377723;
      }
    }
    .list-group {
      .text-primary{
        color: #377723;
      }
    }
    .panel-body {
      width: 100%;
      min-height: 350px;
    }
    a:hover {
      text-decoration: none;
    }
  }

</style>
