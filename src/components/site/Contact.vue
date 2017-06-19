<template lang="html">
  <div class="contact-content">
    <div class="hero">
      <div class="img-hero" alt="">
        <div class="container">
          <h2 class="text-center">Sembrando conciencia, sembramos futuro.</h2>
        </div>
      </div>
    </div>
    <div class="container m-t-xl m-b-xl animated fadeInUp">
      <div class="row">
        <div class="col-md-6">
          <div class="form-area">
            <form v-on:submit.prevent="onSave" accept-charset="UTF-8">
              <h3>Déjenos su mensaje</h3>
        			<div class="form-group">
      		       <input v-model="form.name" type="text" class="form-control" id="name" name="name" placeholder="Nombre" required="">
    					</div>
    					<div class="form-group">
    						 <input v-model="form.email" type="email" class="form-control" id="email" name="email" placeholder="Email" required="">
    					</div>
    					<div class="form-group">
    						<input v-model="form.subject" type="text" class="form-control" id="subject" name="subject" placeholder="Asunto" required="">
    					</div>
              <div class="form-group">
                <textarea v-model="form.message" class="form-control" type="textarea" name="message" id="message" placeholder="Mensaje" maxlength="140" rows="7" required=""></textarea>
                <span class="help-block"><p id="characterLeft" class="help-block ">Es de gran ayuda contar con su opinión</p></span>
              </div>
              <button type="submit" id="btn-save" class="btn btn-primary">Enviar mensaje</button>
            </form>
          </div>
        </div>
        <div class="col-md-6">
          <h3>Nuestra ubicación</h3>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d980.8702094256238!2d-64.18383851187119!3d10.462708999531147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDI3JzQ1LjgiTiA2NMKwMTAnNTkuOCJX!5e0!3m2!1ses!2sco!4v1494085299786" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      form: {
        name: '',
        email: '',
        subject: '',
        message: ''
      }
    }
  },
  methods: {
    ...mapActions([
      'storeMessage'
    ]),
    onSave () {
      window.$('#btn-save').button('loading')
      this.storeMessage(this.form)
      .then(() => {
        window.$('#btn-save').button('reset')
        window.$toast.success('Nos pondremos en contacto contigo', 'Gracias por tu mensaje!')
      })
      .catch(() => {
        window.$('#btn-save').button('reset')
        window.$toast.success('No hemos podido enviar tu mensaje', 'Error')
      })
    }
  }
}
</script>

<style lang="scss">
  .contact-content {
    .hero {
      color: white;
      overflow: hidden;
      margin-top: 70px;
      height: 330px;
      background-color: black;
      background-image: url("../../assets/images/wallpaper-1.jpg");
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
  }
</style>
