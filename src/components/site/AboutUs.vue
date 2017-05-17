<template lang="html">
  <div class="aboutus-content">
    <div class="hero">
      <div class="img-hero" alt="">
        <div class="container">
          <h2 class="text-center">Si se siembra la semilla con fé y se cuida con perseverancia, solo será cuestión de tiempo recoger frutos.</h2>
        </div>
      </div>
    </div>
    <div class="animated fadeInUp">
      <section>
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-sm-12 col-xs-12 flex-center">
              <i class="material-icons icon-size">check</i>
              <h2 class="text-center">Nuestra Misión</h2>
              <p class="text-center text-important">Promover la educación ambiental en todos los niveles educativos y comunitarios, a través de programas y proyectos de desarrollo sustentable de los recursos naturales, protección y conservación de la fauna y flora y saneamiento ambiental, logrando así un ambiente libre de contaminación.</p>
            </div>
            <div class="col-md-6 col-sm-12 col-xs-12 flex-center">
              <i class="material-icons icon-size">visibility</i>
              <h2 class="text-center">Nuestra Visión</h2>
              <p class="text-center text-important">Dirigir su acción a la protección y conservación de nuestro ambiente, la promoción del desarrollo sustentable de los recursos naturales de nuestro estado Sucre, por medio de programas y proyectos que involucran la activa participación ciudadana e institucional, en el desarrollo de la misma.</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="container">
          <div class="row">
            <div class="col-md-12 col-sm-12 col-xs-12 organigrama">
              <h2>Organigrama</h2>
              <img class="img-organigrama" src="../../assets/images/organigrama.png" alt="">
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="container">
          <div class="row">
            <div class="col-md-12 flex-container">
              <h2>Reseña Histórica</h2>
              <div class="m-t-md m-b-md text text-justify">
                <p>El 12 de marzo del 2015 un grupo de 10 personas encabezado por el Sr. Marcos Antonio Marín decidieron constituir la Fundación Conciencia Ecosocial (FUCES), la cual su objetivo principal es la de promover, proponer y desarrollar proyectos y actividades para la conservación, protección y administración de los recursos naturales.</p>
                <p>Dicha conformación nace de la amplia experiencia y participación en diversos frentes ecológicos en los cuales han apoyado o han sido parte de la directiva, por lo cual nace la necesidad de conformar una fundación donde englobe todas sus ideas y directrices en pro de ser enlace entre comunidad_gobierno_ambientalista, para así garantizar y promover el buen uso de nuestros recursos naturales.</p>
                <p>En más de 15 años de participación activa en diversas actividades de defensa y en apoyo a la conservación de los distintos ecosistemas del estado Sucre, nos visualizamos en un futuro cercano como un ente legislador y sancionador en materia ambiental no solo del estado Sucre sino de todo el país.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
  @import 'src/assets/css/variables';

  .aboutus-content {
    p {
      font-size: 1.3em;
    }
    .text {
      width: 680px;
    }
    section {
      padding-top: 80px;
      padding-bottom: 80px;
      border-bottom: 1px #dae0e5 solid;
    }
    section:nth-child(odd) {
      background: white;
    }
    .flex-container {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }
    .hero {
      color: white;
      overflow: hidden;
      margin-top: 70px;
      height: 330px;
      background-color: black;
      background-image: url("../../assets/images/wallpaper-3.jpg");
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
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
    .organigrama {
      display: flex;
      align-items: center;
      flex-direction: column;
      .img-organigrama {
        width: 700px;
      }
    }
    .icon-size {
      font-size: 80px;
      color: white;
      padding: 25px;
      border-radius: 50%;
      background-color: $brand-primary;
    }
    .flex-center {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

  }
</style>
