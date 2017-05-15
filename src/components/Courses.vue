<template lang="html">
  <div class="courses-content">
    <div class="hero">
      <div class="img-hero" alt="">
        <div class="container">
          <h2 class="text-center">¡Tenemos gran variedad de cursos para ti! <br> Llena el formulario de inscripción y reserva tu cupo.</h2>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row find-courses">
        <div class="col-md-6 col-sm-8 col-xs-10">
          <h4 class="text-center">Encuentra tu curso</h4>
          <div class="form-group has-feedback">
            <input type="text" class="form-control input-md b-r-0" aria-describedby="inputSuccess2Status">
            <span class="glyphicon glyphicon-search form-control-feedback text-primary" aria-hidden="true"></span>
          </div>
        </div>
      </div>
      <div class="row courses">
        <div class="col-sm-12 col-md-6" v-for="n in 8">
          <div class="thumbnail card animated fadeInUp">
            <div class="img-card"></div>
            <div class="caption card-content">
              <h5><strong>El arte de reciclar</strong></h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <span><strong>Horas:</strong> 60</span>
              <br>
              <span><strong>Instructor:</strong> Lcdo. Carlos Luna</span>
              <hr>
              <a href="#" class="btn btn-primary pull-right" role="button" data-toggle="modal" data-target="#myModal">Inscribirse</a>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 courses-pagination">
          <nav aria-label="">
            <ul class="pagination">
              <li class="disabled"><a href="#" aria-label="Previous"><span aria-hidden="true">&laquo;</span></a></li>
              <li class="active"><a href="#">1 <span class="sr-only">(current)</span></a></li>
              <li class=""><a href="#">2 <span class="sr-only">(current)</span></a></li>
              <li class=""><a href="#">3 <span class="sr-only">(current)</span></a></li>
              <li class=""><a href="#">4 <span class="sr-only">(current)</span></a></li>
            </ul>
          </nav>
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
      background-image: url("../assets/images/courses.jpg");
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
  }
</style>
