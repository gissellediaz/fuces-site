<template lang="html">
  <div class='container m-t-xl'>
    <div class="panel panel-default">
      <div class="panel-heading heading-button">
        <h4 class="m-t-xs m-b-xs">Periodos</h4>
        <button class='btn btn-md btn-default' data-toggle="modal" data-target="#modal-agregar" >Agregar Periodo</button>
      </div>
      <div v-if="(periods.length == 0 && search == '')" class="panel-body panel-admin flex-center">
        <i class="material-icons text-emty panel-icon">event_busy</i>
        <h4 class="p-b-xl">No hay Periodos</h4>
      </div>
      <ul v-else class="list-group">
        <li class="list-group-item">
          <div class="form-group has-feedback m-b-0">
            <input v-model="search" v-on:keyup="searchCourse" placeholder="Buscar periodo" type="text" class="form-control m-b-0 input-md b-r-0" aria-describedby="inputSuccess2Status">
            <span v-if="!loading" class="glyphicon glyphicon-search form-control-feedback text-primary" aria-hidden="true"></span>
            <i v-else class="fa fa-spin fa-spinner form-control-feedback text-primary"></i>
          </div>
        </li>
      </ul>
    </div>
    <div class="row" v-if="periods.length !== 0">
      <div class="event-item col-md-6" v-for="period in periods">
        <card-period-admin v-bind:period="period" v-bind:select="selectPeriod"/>
      </div>
    </div>
    <div class="m-b-md" v-if="!max">
      <button id="btn-more" type="button" v-on:click="showMore" class="btn btn-primary btn-block">Mas cursos</button>
    </div>
    <!-- Modal -->
    <div class="modal fade custom-modal" id="modal-eliminar" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title">Eliminar Curso</h4>
          </div>
          <div class="modal-body">
            <h5>¿Esta seguro que desea eliminar este curso?</h5>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Cancelar</button>
            <button type="button" id="btn-delete" v-on:click="doDeleteCourse(course_delete.id)"class="btn btn-primary">Aceptar</button>
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal-dialog -->
    </div>
    <!-- Modal -->

    <!-- Modal -->
    <div class="modal fade custom-modal" id="modal-students" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title">Estudiantes inscriptos</h4>
          </div>
          <div class="modal-body table-responsive">
            <table class='table table-striped table-bordered table-hover table-condensed'>
              <thead>
                <tr>
                  <th>Nombre y apellido</th>
                  <th>Correo electronico</th>
                  <th>Telefono</th>
                  <th>Pais</th>
                  <th>Estado</th>
                  <th>Ciudad</th>
                  <th>Municipio</th>
                  <th>Parroquia</th>
                  <th>Direccion</th>
                  <th>Organizacion</th>
                  <th>Responsable</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="student in period_delete.students">
                  <td>{{ student.name }}</td>
                  <td>{{ student.email }}</td>
                  <td>{{ student.phone }}</td>
                  <td>{{ student.country }}</td>
                  <td>{{ student.state }}</td>
                  <td>{{ student.city }}</td>
                  <td>{{ student.email }}</td>
                  <td>{{ student.parish }}</td>
                  <td>{{ student.address }}</td>
                  <td>{{ student.organization }}</td>
                  <td>{{ student.leader_organization }}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Cancelar</button>
            <button type="button" id="btn-delete" v-on:click="doDeleteCourse(course_delete.id)"class="btn btn-primary">Aceptar</button>
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal-dialog -->
    </div>
    <!-- Modal -->

    <div class="modal fade custom-modal" id="modal-agregar" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
      <div class="modal-dialog" role="document">
        <div v-if="courses.length === 0" class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title">Agregar nuevo periodo</h4>
          </div>
          <div class="modal-body">
            <h4>No tiene cursos todavia, asi que no puede agregar perioodos.</h4>
            <h4>Agrege el curso al cual quiere agregar periodo y vuelva.</h4>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Cancelar</button>
          </div>
        </div><!-- /.modal-content -->
        <div v-else class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title">Agregar nuevo periodo</h4>
          </div>
          <form v-on:submit.prevent="doStorePeriod()">
            <div class="modal-body row">
              <h4 class="col-md-12">Fecha de inscripciones</h4>
              <div class="form-group col-md-6">
                <label for="">Fecha de inicio</label>
                <input type="date" v-model="period_new.start_date" class="form-control" id="" placeholder="" required="true">
              </div>
              <div class="form-group col-md-6">
                <label for="">Fecha de finalizacion</label>
                <input v-model="period_new.finish_date" type="date" class="form-control" id="" placeholder=""  required="true">
              </div>
              <div class="form-group col-md-12">
                <label for="">Curso</label>
                <select v-model="period_new.course" class='form-control'  required="true">
                  <option v-for="course in courses" v-bind:value="course.id">{{ course.title }}</option>
                </select>
              </div>
              <div class="form-group col-md-12">
                <label for="">Observacion:</label>
                <textarea v-model="period_new.description" class='form-control' placeholder=''></textarea>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default" data-dismiss="modal">Cancelar</button>
              <button type="submit" id="btn-agregar" class="btn btn-primary">Agregar</button>
            </div>
          </form>
        </div><!-- /.modal-content -->
      </div><!-- /.modal-dialog -->
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import CardPeriodAdmin from '@/components/admin/partials/CardPeriodAdmin'

export default {
  components: {
    CardPeriodAdmin
  },
  computed: {
    ...mapGetters({
      courses: 'getAllCourses',
      periods: 'getAllPeriods'
    })
  },
  mounted () {
    this.getAllCourses()
    this.getAllPeriods()
    .then(() => {
      console.log(this.courses.length)
      if (this.courses.length < 6) {
        this.max = true
      }
    })
  },
  data () {
    return {
      period_delete: {
        id: ''
      },
      period_new: {
        start_date: '',
        finish_date: '',
        description: '',
        course: -1
      },
      search: '',
      loading: false,
      max: false
    }
  },
  methods: {
    ...mapActions([
      'getAllCourses',
      'getAllPeriods',
      'findCourses',
      'storePeriod',
      'moreCourses',
      'deleteCourse'
    ]),
    searchCourse () {
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
      this.findCourses(this.search)
      .then(() => {
        this.loading = false
      })
      .catch(() => {
        this.loading = false
      })
    },
    selectPeriod (e) {
      this.period_delete = e
    },
    doDeleteCourse (courseId) {
      window.$('#btn-delete').button('loading')
      this.deleteCourse(courseId)
      .then(() => {
        window.$('#btn-delete').button('reset')
        window.$('#modal-eliminar').modal('hide')
      })
      .catch(() => {
        window.$('#btn-delete').button('reset')
        window.$toastr.warning('No se pudo borrar el curso')
      })
    },
    doStorePeriod () {
      window.$('#btn-agregar').button('loading')
      this.storePeriod(this.period_new)
      .then(() => {
        window.$('#btn-agregar').button('reset')
        window.$('#modal-agregar').modal('hide')
      })
      .catch(() => {
        window.$('#btn-agregar').button('reset')
      })
    },
    showMore () {
      window.$('#btn-more').button('loading')
      this.moreCourses(this.courses.length)
      .then(courses => {
        if (courses.length === 0 || courses.length < 6) {
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

<style lang="css">
</style>
