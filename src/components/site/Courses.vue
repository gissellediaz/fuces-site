<template lang="html">
  <div class="courses-content">
    <div class="hero">
      <div class="img-hero" alt="">
        <div class="container">
          <h2 class="text-center">¡Tenemos gran variedad de cursos para ti! <br> Llena el formulario de inscripción y reserva tu cupo.</h2>
        </div>
      </div>
    </div>
    <div class="container" v-if="courses.length !== 0">
      <div class="row find-courses">
        <div class="col-md-6 col-sm-8 col-xs-10">
          <h4 class="text-center">Encuentra tu curso</h4>
          <div class="form-group has-feedback">
            <input v-model="search" v-on:keyup="searchCourse" type="text" class="form-control input-md b-r-0" aria-describedby="inputSuccess2Status">
            <span v-if="!loading" class="glyphicon glyphicon-search form-control-feedback text-primary" aria-hidden="true"></span>
            <i v-else class="fa fa-spin fa-spinner form-control-feedback text-primary"></i>
          </div>
        </div>
      </div>
      <div class="row courses">
        <div class="col-sm-12 col-md-6" v-for="course in courses">
          <card-course v-bind:course="course"></card-course>
        </div>
      </div>
      <div class="m-b-md" v-if="!max">
        <button id="btn-more" type="button" v-on:click="showMore" class="btn btn-primary btn-block">Mas cursos</button>
      </div>
    </div>
    <div class="container empty" v-if="courses.length === 0">
      <i class="material-icons text-emty panel-icon">school</i>
      <h4 class="p-b-xl">No hay cursos para inscripcion</h4>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import CardCourse from '@/components/site/partials/CardCourse'

export default {
  components: {
    CardCourse
  },
  data () {
    return {
      search: '',
      loading: false,
      max: false
    }
  },
  computed: {
    ...mapGetters({
      courses: 'getAllCourses'
    }),
    course () {
      return this.$store.getters.getCourseBySlug('abono-organico')
    }
  },
  beforeMount () {
    this.getAllCourses()
  },
  methods: {
    ...mapActions([
      'getAllCourses',
      'findCourses',
      'moreCourses'
    ]),
    searchCourse () {
      if (this.search !== '') {
        this.max = true
      } else {
        this.max = false
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

<style lang="scss">
  .courses-content{
    .b-r-0 {
      border-radius: 0px !important;
    }
    .hero {
      color: white;
      overflow: hidden;
      margin-top: 70px;
      height: 330px;
      background-color: black;
      background-image: url("../../assets/images/courses.jpg");
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
    .find-courses {
      margin-top: -65px;
      background-color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 130px;
      border: 1px solid #ddd;
      margin-left: 70px;
      margin-right: 70px;
      border-radius: 3px;
    }
    .courses {
      margin-top: 100px;
    }
    .courses-pagination {
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
