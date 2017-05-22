<template lang="html">
  <div class="footer-admin">
    <footer>
      <div class="container">
        <div class="row m-t-md">
          <div class="col-md-6">
            <p class="text-left"><i class="fa fa-copyright" aria-hidden="true"></i> Fundación Conciencia Ecosocial 2017</p>
          </div>
          <div class="col-md-6">
            <ul class="social">
              <li><i class="fa fa-envelope" aria-hidden="true"></i> fundaconcienciaecosocial@outlook.com</li>
              <li><i class="fa fa-phone" aria-hidden="true"></i> +584149993620</li>
              <li><a href="https://www.facebook.com/profile.php?id=100009200676561" target="_blank"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
              <li><a href="https://twitter.com/fundaecosocial1" target="_blank"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
  .footer-admin{
    footer {
      color: #636B78;
      background-color: white;
      border-top: solid 1px #ccc;
      display: flex;
      justify-content: center;
      align-items: center;
      ul {
        display: flex;
        list-style: none;
        padding-left: 0px;
        padding-right: 0px;
        li {
          margin-right: 15px;
          &:last-child {
            margin-right: 0px;
          }
          a {
            color: #636B78;
          }
        }
      }
      .m-t-md {
        margin-top: 30px;
      }
      hr {
        margin-top: 5px;
        margin-bottom: 10px;
        border-top: 1px solid lightgrey;
      }
      .social {
        justify-content: flex-end;
      }
    }
  }

  @media screen and (max-width: 991px) {
    .social {
      justify-content: center !important;
    }
    .links {
      justify-content: center;
    }
  }
</style>
