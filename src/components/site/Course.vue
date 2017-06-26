<template lang="html">
  <div class="course-content">
    <div class="hero" v-bind:style="{backgroundImage: 'url('+course.image+')'}">
      <div class="img-hero" alt="">
        <div class="container text-center">
          <h2>{{course.title}}</h2>
          <h4 class="m-t-md">{{course.subtitle}}</h4>
        </div>
      </div>
    </div>
    <div class="panel panel-default b-r-0">
      <div class="panel-body container">
        <div class="container-flex space-between">
          <div class="container-flex">
            <div class="box">
              <span class="title m-b-0">Título</span>
              <span class="content m-t-0">{{course.title}}</span>
            </div>
            <div class="box m-l-lg">
              <span class="title m-b-0">Instructor</span>
              <span class="content m-t-0">{{course.instructor}}</span>
            </div>
            <div class="box m-l-lg">
              <span class="title m-b-0">Horas</span>
              <span class="content m-t-0">{{course.hours}}</span>
            </div>
          </div>
          <button type="button" class="btn btn-lg btn-primary" data-toggle="modal" data-target="#myModal">Solicitar</button>
        </div>
      </div>
    </div>
    <div class="container m-t-md">
      <div class="raw-html ql-container ql-editor" v-html="course.description"></div>
    </div>
    <!-- Modal -->
    <div class="modal fade custom-modal" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title" id="myModalLabel">Formulario de Inscripción</h4>
          </div>
          <form v-on:submit.prevent="onSave">
            <div class="modal-body">
              <div class="form-group">
                <label for="name">Nombre y Apellido:</label>
                <input v-model="form.name" type="text" class="form-control" id="name">
              </div>
              <div class="form-group">
                <label for="email">Correo Electrónico:</label>
                <input v-model="form.email" type="email" class="form-control" id="email">
              </div>
              <div class="form-group">
                <label for="phone">Teléfono:</label>
                <input v-model="form.phone" type="text" class="form-control" id="phone">
              </div>
              <div class="form-group">
                <label for="phone">País:</label>
                <input v-model="form.phone" type="text" class="form-control" id="phone">
              </div>
              <div class="form-group">
                <label for="phone">Estado:</label>
                <input v-model="form.phone" type="text" class="form-control" id="phone">
              </div>
              <div class="form-group">
                <label for="phone">Ciudad:</label>
                <input v-model="form.phone" type="text" class="form-control" id="phone">
              </div>
              <div class="form-group">
                <label for="phone">Municipio:</label>
                <input v-model="form.phone" type="text" class="form-control" id="phone">
              </div>
              <div class="form-group">
                <label for="phone">Parroquia:</label>
                <input v-model="form.phone" type="text" class="form-control" id="phone">
              </div>
              <div class="form-group">
                <label for="phone">Dirección:</label>
                <input v-model="form.phone" type="text" class="form-control" id="phone">
              </div>
              <div class="form-group">
                <label for="phone">Institución/Comunidad:</label>
                <input v-model="form.phone" type="text" class="form-control" id="phone">
              </div>
              <div class="form-group">
                <label for="phone">Responsable de la Institución/Comunidad:</label>
                <input v-model="form.phone" type="text" class="form-control" id="phone">
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default" data-dismiss="modal">Cancelar</button>
              <button type="submit" id="btn-save" class="btn btn-primary">Solicitar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  computed: {
    course () {
      let courses = this.$store.getters.getCourseBySlug(this.$route.params.slug)
      if (courses) {
        return courses
      } else {
        return this.getCourse(this.$route.params.slug)
      }
    }
  },
  data () {
    return {
      form: {
        name: '',
        email: '',
        phone: ''
      }
    }
  },
  methods: {
    ...mapActions([
      'getCourseBySlugApi',
      'saveInscription'
    ]),
    getCourse (slug) {
      this.getCourseBySlugApi(slug)
      .then(course => {
        console.log(course)
        return course
      })
      .catch(error => {
        console.log(error)
      })
    },
    onSave () {
      window.$('#btn-save').button('loading')
      window.$('#btn-save').button('reset')
      window.$('#myModal').modal('hide')
      window.$toast.success('Nos pondremos en contacto contigo', 'Inscripción exitosa!')
    }
  }
}
</script>

<style lang="scss">
  .course-content {
    .hero {
      color: white;
      overflow: hidden;
      margin-top: 70px;
      height: 330px;
      background-color: black;
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
    .raw-html {
      img {
        max-width: 1108px;
        height: auto;
      }
    }
    .b-r-0 {
      border-radius: 0px !important;
    }
    .container-flex {
      display: flex;
    }
    .space-between {
      justify-content: space-between;
      align-items: center;
    }
    .box {
      display: flex;
      flex-direction: column;
      justify-content: center;
      .title {
        font-size: 1em;
        color: darkgray;
      }
      .content {
        font-size: 1.5em;
      }
    }
    .m-l-lg {
      margin-left: 50px !important;
    }
    .btn-lg {
      padding: 10px 25px;
      border-radius: 50px;
    }
  }
</style>
