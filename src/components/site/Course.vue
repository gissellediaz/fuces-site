<template lang="html">
  <pre>{{ course }}</pre>
</template>

<script>
export default {
  computed: {
    course () {
      return this.$store.getters.getCourseBySlug(this.$route.params.slug)
    }
  }
}
</script>

<style lang="scss">

</style>
