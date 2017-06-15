<template lang="html">
  <div class='container m-t-xl'>
    <div class="panel panel-default">
      <div class="panel-heading heading-button">
        <h4 class="m-t-xs m-b-xs">Cursos</h4>
        <router-link class='btn btn-md btn-default' to="/admin/cursos/crear-curso">Crear Curso</router-link>
      </div>
      <div v-if="(courses.length == 0 && search == '')" class="panel-body panel-admin flex-center">
        <i class="material-icons text-emty panel-icon">event_busy</i>
        <h4 class="p-b-xl">No hay cursos</h4>
      </div>
      <ul v-else class="list-group">
        <li class="list-group-item">
          <div class="form-group has-feedback m-b-0">
            <input v-model="search" v-on:keyup="searchCourse" placeholder="Buscar curso" type="text" class="form-control m-b-0 input-md b-r-0" aria-describedby="inputSuccess2Status">
            <span v-if="!loading" class="glyphicon glyphicon-search form-control-feedback text-primary" aria-hidden="true"></span>
            <i v-else class="fa fa-spin fa-spinner form-control-feedback text-primary"></i>
          </div>
        </li>
      </ul>
    </div>
    <div class="row" v-if="courses.length !== 0">
      <div class="event-item col-md-4" v-for="course in courses">
        <card-course-admin v-bind:course="course" v-bind:select="selectCourse"></card-course-admin>
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
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import CardCourseAdmin from '@/components/admin/partials/CardCourseAdmin'

export default {
  components: {
    CardCourseAdmin
  },
  computed: {
    ...mapGetters({
      courses: 'getAllCourses'
    })
  },
  mounted () {
    this.getAllCourses()
    .then(() => {
      console.log(this.courses.length)
      if (this.courses.length < 6) {
        this.max = true
      }
    })
  },
  data () {
    return {
      course_delete: {
        id: ''
      },
      search: '',
      loading: false,
      max: false
    }
  },
  methods: {
    ...mapActions([
      'getAllCourses',
      'findCourses',
      'moreCourses',
      'deleteCourse'
    ]),
    searchCourse () {
      if (this.search !== '') {
        this.loading = true
        this.max = true
        this.findCourses(this.search)
        .then(() => {
          this.loading = false
        })
        .catch(() => {
          this.loading = false
        })
      } else {
        this.max = false
        this.getAllCourses()
      }
    },
    selectCourse (e) {
      this.course_delete = e
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
