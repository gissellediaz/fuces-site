<template lang="html">
  <div class="event-content">
    <div class="hero" v-bind:style="{backgroundImage: 'url('+event.image+')'}">
      <div class="img-hero" alt="">
        <div class="container text-center">
          <h2>{{event.title}}</h2>
          <h4 class="m-t-md">{{event.subtitle}}</h4>
        </div>
      </div>
    </div>
    <div class="container m-t-md">
      <div class="raw-html" v-html="event.description"></div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    event () {
      let event = this.$store.getters.getEventBySlug(this.$route.params.slug)
      if (event) {
        return event
      } else {
        console.log('not found')
      }
    }
  }
  //
}
</script>

<style lang="scss">
  .event-content {
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
        max-width: 1140px;
        height: auto;
      }
    }
  }
</style>
