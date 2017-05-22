<template lang="html">
  <nav class="navbar navbar-default navbar-static-top navbar-gtask" role="navigation">
    <div class="container">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#">Fundación Conciencia Ecosocial</a>

      </div>

      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="navbar">
        <ul class="nav navbar-nav navbar-right">
          <li>
            <a href="#" class="nav-user">
              <img v-if="user.avatar" v-bind:src="user.avatar" class="img-circle img-nav" alt=""> {{ user.name }}
            </a>
          </li>
        </ul>
      </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      user: 'getUser'
    })
  }
}
</script>

<style lang="scss">
  .navbar-gtask {
    .nav-user{
      padding: 20px !important;
      display: flex;
      align-items: center;
    }
    .img-nav{
      margin-right: 5px;
      width: 35px;
      height: 35px;
    }
    height: 70px;
    background-color: #49A42E;
    margin-bottom: 0px;
    .icon-navbar {
      font-size: 20px !important;
      margin-right: 2px;
    }
    a {
      color: #FFF !important;
      font-size: 15px !important;
      font-weight: bold;
      padding-top: 23px !important;
      padding-bottom: 26px !important;
    }
    .navbar-brand {
      font-size: 24px !important;
    }
  }
</style>
