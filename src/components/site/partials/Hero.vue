<template lang="html">
  <div class="hero">
    <div class="img-hero" alt="">
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-md-offset-3">
            <h2 class="text-center">Encuentra tu curso</h2>
            <div class="form-group has-feedback">
              <input type="text" class="form-control input-md b-r-0" aria-describedby="inputSuccess2Status">
              <span class="glyphicon glyphicon-search form-control-feedback text-primary" aria-hidden="true"></span>
            </div>
            <p class="text-center m-t-md">Cumaná | Fundación Conciencia Ecosocial</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
  .b-r-0 {
    border-radius: 0px !important;
  }
  .hero {
    color: white;
    overflow: hidden;
    margin-top: 70px;
    height: 330px;
    background-color: black;
    background-image: url("../../../assets/images/wallpaper-2.jpg");
    background-position: center;
    background-repeat: no-repeat;
    .img-hero {
      display: flex;
      justify-content: center;
      background: rgba(0, 0, 0, 0.8);
      align-items: center;
      height: 330px;
    }
  }
</style>
