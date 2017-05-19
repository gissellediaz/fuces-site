<template lang="html">
  <div class="thumbnail card">
    <div class="img-card" v-bind:style="{backgroundImage: 'url('+item.image+')'}"></div>
    <div class="caption card-content">
      <div class="">
        <h5><strong>{{item.title}}</strong></h5>
        <p>{{item.subtitle}}</p>
      </div>
      <div class="">
        <hr>
        <router-link class="btn btn-primary pull-right" v-bind:to="type+'/'+item.slug">Seguir leyendo</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['item', 'type']
}
</script>

<style lang="scss">
  .card {
    padding: 0px;
    background-color: white;
    border-radius: 0px;
    padding-bottom: 40px;
    height: 100%;
    .img-card {
      background-position: center;
      background-size:cover;
      height: 120px;
      background-repeat: no-repeat;
    }
    .card-content {
      margin: 10px;
    }
  }
</style>
