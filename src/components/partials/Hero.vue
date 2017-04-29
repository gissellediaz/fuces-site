<template lang="html">
  <div class="hero">
    <div class="img-hero" alt="">
      <div class="container m-t-lg">
        <div class="row">
          <div class="col-md-6 col-md-offset-3">
            <h2 class="text-center">Encuentra tu curso</h2>
            <div class="input-group">
              <input type="text" class="form-control input-lg" placeholder="encuentra tu curso..." aria-describedby="basic-addon2">
              <span class="input-group-btn">
                <button class="btn btn-primary btn-lg" type="button">
                  <i class="fa fa-search" aria-hidden="true"></i>
                </button>
              </span>
            </div>
            <p class="text-center m-t-md">Cumaná | Fundacion Conciencia Ecosocial</p>
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
  .hero {
    color: white;
    overflow: hidden;
    height: 400px;
    background-color: black;
    position: relative;
    .img-hero {
      display: flex;
      justify-content: center;
      align-items: center;
      background-image: url("../../assets/images/wallpaper-2.jpg");
      opacity: 0.4;
      height: 400px;
      background-position: center;
      background-repeat: no-repeat;
      .m-t-md {
        margin-top: 30px;
      }
      .m-t-lg {
        margin-top: 100px;
      }
    }
  }
</style>
