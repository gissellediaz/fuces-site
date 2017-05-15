<template lang="html">
  <div class="">
    <hero></hero>
    <div class="container animated fadeInUp">
      <div class="row">
        <div class="col-md-12 col-sm-12">
          <h3>Cursos</h3>
          <hr>
        </div>
        <div class="col-md-8">
          <div class="row">
            <div class="col-sm-12 col-md-6" v-for="n in 4">
              <div class="thumbnail card">
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
            <div class="col-md-12">
              <h3>Últimos Eventos</h3>
              <hr>
              <div class="row">
                <div class="col-md-12" v-for="n in 2">
                  <div class="thumbnail card">
                    <div class="img-card"></div>
                    <div class="caption card-content">
                      <h5><strong>El arte de reciclar</strong></h5>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                      <span><strong>Horas:</strong> 60</span>
                      <br>
                      <span><strong>Instructor:</strong> Lcdo. Carlos Luna</span>
                      <hr>
                      <a href="#" class="btn btn-primary pull-right" role="button">Ver más</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="panel panel-default">
            <div class="panel-body">
              <h4>Misión</h4>
              <p>Promover la educación ambiental en todos los niveles educativos y comunitarios, a través de programas y proyectos de desarrollo sustentable de los recursos naturales...</p>
              <a href="#">Seguir leyendo</a>
            </div>
          </div>
          <div class="panel panel-default">
            <div class="panel-body">
              <h4>Visión</h4>
              <p>Dirigir su acción a la protección y conservación de nuestro ambiente, la promoción del desarrollo sustentable de los recursos naturales de nuestro estado Sucre...</p>
              <a href="#">Seguir leyendo</a>
            </div>
          </div>
          <div class="panel panel-default">
            <div class="list-group">
              <div class="list-group-item">
                <h4>Nuestra dirección</h4>
                <p>Avenida Bermúdez, Edif. Don Antonio
                  <br>Piso 1 Ofcina 1A
                </p>
              </div>
              <div class="list-group-item">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d980.8702094256238!2d-64.18383851187119!3d10.462708999531147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDI3JzQ1LjgiTiA2NMKwMTAnNTkuOCJX!5e0!3m2!1ses!2sco!4v1494085299786" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title" id="myModalLabel">Formulario de Inscripción</h4>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label for="name">Nombres:</label>
              <input type="text" class="form-control" id="name">
            </div>
            <div class="form-group">
              <label for="email">Correo Electrónico:</label>
              <input type="email" class="form-control" id="email">
            </div>
            <div class="form-group">
              <label for="phone">Teléfono:</label>
              <input type="text" class="form-control" id="phone">
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
            <button type="button" class="btn btn-primary" v-on:click="showToast">Inscribirse</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/site/partials/NavBar'
import Hero from '@/components/site/partials/Hero'
import FooterApp from '@/components/site/partials/FooterApp'
export default {
  components: {
    NavBar,
    Hero,
    FooterApp
  },
  methods: {
    showToast () {
      console.log('asad')
      window.$('#myModal').modal('hide')
      window.$toast.success('Ha reservado su cupo')
    }
  }
}
</script>

<style lang="scss">
  .card {
    padding: 0px;
    background-color: white;
    border-radius: 0px;
    height: 400px;
    .img-card {
      background-image: url("../../assets/images/w1.jpg");
      background-position: center;
      background-size: contain;
      height: 120px;
    }
    .card-content {
      margin: 10px;
    }
  }
</style>
