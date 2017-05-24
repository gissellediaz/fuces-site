<template lang="html">
  <div class='container m-t-xl'>
    <div class="panel panel-default">
      <div class="panel-heading heading-navigation">
        <router-link class="m-t-xs" to="/admin/eventos"><i class="material-icons p-t-sm">arrow_back</i></router-link><h4 class="m-t-xs m-b-xs m-l-md">Crear Evento</h4>
      </div>
      <form v-on:submit.prevent="saveEvent">
        <input type="file" id="add-img" class="hidden" v-on:change="onFileChange">
        <label for="add-img" class="img-event pointer" v-bind:style="{backgroundImage: 'url('+event.image+')'}">
          <div class="img-event-layer flex-center">
            <i class="material-icons text-emty panel-icon">add_a_photo</i>
            <h4 v-if="event.image === ''" class="p-b-xl text-emty">Agregar imagen</h4>
            <h4 v-else class="p-b-xl text-emty">Cambiar imagen</h4>
          </div>
        </label>
        <div class="panel-body">
          <div class="form-group">
            <label for="title">Titulo del evento</label>
            <input v-model="event.title" v-on:change="slug(event.title)" type="text" required class="form-control" id="title" placeholder="">
          </div>
          <div class="form-group">
            <label for="subtitle">Description del evento</label>
            <input v-model="event.subtitle" type="text" required class="form-control" id="subtitle" placeholder="" maxlength="350">
          </div>
          <div class="row">
            <div class="form-group col-md-4">
              <label for="date">Fecha de inicio</label>
              <input v-model="event.start_date" type="date" required class="form-control" id="" placeholder="">
            </div>
            <div class="form-group col-md-4">
              <label for="date">Fecha del final</label>
              <input v-model="event.finish_date" type="date" required class="form-control" id="" placeholder="">
            </div>
            <div class="form-group col-md-4">
              <label for="">En carrusel</label>
              <div class="material-switch m-t-xs">
                <input  v-model="event.carousel" id="someSwitchOptionWarning" name="someSwitchOption001" type="checkbox"/>
                <label for="someSwitchOptionWarning" class="label-primary"></label>
              </div>
            </div>

          </div>
          <div class="form-group">
            <label for="subtitle">Contenido del evento</label>
            <vue-editor v-model="event.description"></vue-editor>
          </div>
          <button type='submit' id="btn-save" class='btn btn-md btn-primary'>Guardar evento</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { VueEditor } from 'vue2-editor'
import { mapActions } from 'vuex'

export default {
  components: {
    VueEditor
  },
  data () {
    return {
      event: {
        image: '',
        carousel: false,
        title: '',
        subtitle: '',
        slug: '',
        description: '',
        start_date: '',
        finish_date: ''
      }
    }
  },
  methods: {
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
        vm.event.image = e.target.result
      }
      reader.readAsDataURL(file)
    },
    saveEvent () {
      window.$('#btn-save').button('loading')
      this.storeEvent(this.event)
      .then(() => {
        window.$('#btn-save').button('reset')
        this.$router.replace('/admin/eventos')
      })
      .catch(() => {
        window.$('#btn-save').button('reset')
      })
    },
    slug (text) {
      this.event.slug = text.toLowerCase()
      .replace(/[^\w\s-]/g, '') // remove non-word [a-z0-9_], non-whitespace, non-hyphen characters
      .replace(/[\s_-]+/g, '-') // swap any length of whitespace, underscore, hyphen characters with a single -
      .replace(/^-+|-+$/g, '')
    },
    ...mapActions([
      'storeEvent'
    ])
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
