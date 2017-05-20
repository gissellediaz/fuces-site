<template lang="html">
  <div class="thumbnail card animated fadeInUp">
    <div class="img-card" v-bind:style="{backgroundImage: 'url('+course.image+')'}"></div>
    <div class="caption card-content">
      <h5><strong>{{course.title}}</strong></h5>
      <p class="content-courses text-justify">{{shortText(course.subtitle)}}</p>
      <span><strong>Horas:</strong> {{course.hours}}</span>
      <br>
      <span><strong>Instructor:</strong> {{course.instructor}}</span>
      <hr>
      <router-link class="btn btn-primary pull-right" v-bind:to="'cursos/'+course.slug">Seguir leyendo</router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ['course'],
  methods: {
    shortText (text) {
      if (text.length > 230) {
        return text.substring(0, 230) + '...'
      }
      return text
    }
  }
}
</script>

<style lang="css">
.content-courses{
  height: 80px;
  overflow: auto;
}
</style>
