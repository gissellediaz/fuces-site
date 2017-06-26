<template lang="html">
  <div class='container m-t-xl'>
    <div class="panel panel-default">
      <div class="panel-heading heading-navigation">
        <router-link class="m-t-xs" to="/admin/cursos"><i class="material-icons p-t-sm">arrow_back</i></router-link><h4 class="m-t-xs m-b-xs m-l-md">Editar Curso</h4>
      </div>
      <form v-on:submit.prevent="onUpdate">
        <input type="file" id="add-img" class="hidden" v-on:change="onFileChange">
        <label for="add-img" class="img-event pointer" v-bind:style="{backgroundImage: 'url('+course.image+')'}">
          <div class="img-event-layer flex-center">
            <i class="material-icons text-emty panel-icon">add_a_photo</i>
            <h4 v-if="course.image === ''" class="p-b-xl text-emty">Agregar imagen</h4>
            <h4 v-else class="p-b-xl text-emty">Cambiar imagen</h4>
          </div>
        </label>
        <div class="panel-body">
          <div class="form-group">
            <label for="title">Titulo del curso</label>
            <input v-model="course.title" v-on:change="slug(course.title)" type="text" required class="form-control" id="title" placeholder="">
          </div>
          <div class="form-group">
            <label for="subtitle">Descripcion del curso</label>
            <input v-model="course.subtitle" type="text" required class="form-control" id="subtitle" placeholder="" maxlength="350">
          </div>
          <div class="row">
            <div class="form-group col-md-4">
              <label for="instructor">Instructor</label>
              <input v-model="course.instructor" type="text" required class="form-control" id="instructor" placeholder="">
            </div>
            <div class="form-group col-md-2">
              <label for="hours">Cantidad de Horas</label>
              <input v-model="course.hours" type="number" required class="form-control" id="hours" placeholder="">
            </div>
          </div>
          <div class="form-group">
            <label for="subtitle">Contenido del curso</label>
            <vue-editor v-model="course.description"></vue-editor>
          </div>
          <button type='submit' id="btn-save" class='btn btn-md btn-primary'>Actualizar curso</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { VueEditor } from 'vue2-editor'
import { mapActions } from 'vuex'

export default {
  beforeMount () {
    if (this.$route.params.slug) {
      let foundCourse = this.$store.getters.getCourseBySlug(this.$route.params.slug)
      if (foundCourse) {
        this.course = JSON.parse(JSON.stringify(foundCourse))
      } else {
        this.getCourse(this.$route.params.slug)
      }
    }
  },
  components: {
    VueEditor
  },
  data () {
    return {
      course: {
        image: '',
        title: '',
        subtitle: '',
        slug: '',
        description: '',
        instructor: '',
        hours: ''
      }
    }
  },
  methods: {
    ...mapActions([
      'updateCourse',
      'getCourseBySlugApi'
    ]),
    onFileChange (e) {
      var files = e.target.files || e.dataTransfer.files
      if (!files.length) {
        return
      }
      this.createImage(files[0])
    },
    createImage (file) {
      var reader = new FileReader()
      var vm = this
      reader.onload = (e) => {
        vm.course.image = e.target.result
      }
      reader.readAsDataURL(file)
    },
    onUpdate () {
      window.$('#btn-save').button('loading')
      this.updateCourse(this.course)
      .then(() => {
        window.$('#btn-save').button('reset')
        this.$router.replace('/admin/cursos')
      })
      .catch(() => {
        window.$('#btn-save').button('reset')
      })
    },
    slug (text) {
      this.course.slug = text.toLowerCase()
      .replace(/[^\w\s-]/g, '') // remove non-word [a-z0-9_], non-whitespace, non-hyphen characters
      .replace(/[\s_-]+/g, '-') // swap any length of whitespace, underscore, hyphen characters with a single -
      .replace(/^-+|-+$/g, '')
    },
    getCourse (slug) {
      this.getCourseBySlugApi(slug)
      .then(course => {
        this.course = JSON.parse(JSON.stringify(course))
      })
      .catch(error => {
        console.log(error)
      })
    }
  }
}
</script>

<style lang="scss">
  .panel-admin {
    height: 60vh;
  }
  .heading-button {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .img-event {
    width: 100%;
    height: 300px;
    background-position: center;
    background-repeat: no-repeat;
    background-size:cover;
  }
  .img-event-layer{
    height: 300px;
    background: rgba(0, 0, 0, 0.5);
  }
  .pointer {
    cursor: pointer;
  }
</style>
