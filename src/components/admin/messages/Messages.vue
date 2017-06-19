<template lang="html">
  <div class="container m-t-xl">
    <div class="row">
      <div class="col-md-4">
        <div class="panel panel-default">
          <div class="panel-heading heading-button">
            <h4 class="m-t-xs m-b-xs">Mensajes</h4>
            <span v-if="noReadCount > 0" class="badge">{{ noReadCount }}</span>
          </div>
          <ul class="list-group messages-list">
            <li v-for="message in messages" v-on:click="selectionMessage(message)" v-bind:class="{ 'read': message.read }" class="list-group-item message">
              <div class="message-title m-b-0">
                <p class="name m-b-0">{{ message.name }}</p>
                <p class="date m-b-0">{{ fromNow(message.createdAt) }}</p>
              </div>
              <p class="subject m-t-0">{{ message.subject }}</p>
              <p class="message-content m-t-0 text-justify">{{ shortText(message.message) }}</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-md-8">
        <div v-if="!select" class="panel panel-default">
          <div class="panel-heading heading-button">
            <h4 class="m-t-xs m-b-xs">Contenido</h4>
          </div>
          <div class="panel-body flex-center content-message">
            <i class="material-icons text-emty panel-icon">sms</i>
            <h4 class="p-b-xl">No ha seleccionado un mensaje</h4>
          </div>
        </div>
        <div v-else class="panel panel-default">
          <div class="panel-heading heading-button">
            <h4 class="m-t-xs m-b-xs">{{ messageSelect.subject }}</h4>
            <div class="dropdown">
              <button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown">Opciones <i class="fa fa-angle-down"></i></button>
              <ul class="dropdown-menu pull-right">
                <li><a href="#" v-on:click.prevent="notRead()">Marcar como no leido</a></li>
                <li><a href="#" v-on:click.prevent="">Eliminar</a></li>
              </ul>
            </div>
          </div>
          <div class="panel-body">
            <div class="message-title-content">
              <p class="name m-b-0">{{ messageSelect.name }}</p>
              <p class="m-b-0">{{ dateFormat(messageSelect.createdAt) + ' (' + fromNow(messageSelect.createdAt) + ')'}}</p>
            </div>
            <p class="m-t-lg m-b-lg">{{ messageSelect.message }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import moment from 'moment'

export default {
  computed: {
    ...mapGetters({
      messages: 'getAllMessages'
    }),
    noReadCount () {
      var count = 0
      this.messages.filter(m => {
        if (!m.read) {
          count++
        }
        return m
      })
      return count
    }
  },
  data () {
    return {
      select: false,
      messageSelect: {}
    }
  },
  beforeMount () {
    this.getAllMessages()
  },
  methods: {
    ...mapActions([
      'getAllMessages',
      'updateMessage'
    ]),
    fromNow (date) {
      moment.locale('es')
      return moment(date).fromNow()
    },
    dateFormat (date) {
      moment.locale('es')
      return moment(date).subtract(0, 'days').calendar()
    },
    selectionMessage (message) {
      if (!message.read) {
        this.updateMessage({
          id: message.id,
          read: true
        })
        .then(message => {
          this.messageSelect = message
        })
      }
      this.messageSelect = message
      this.select = true
    },
    shortText (text) {
      if (text.length > 120) {
        return text.substring(0, 80) + '...'
      }
      return text
    },
    notRead () {
      this.updateMessage({
        id: this.messageSelect.id,
        read: false
      })
      .then(message => {
        this.messageSelect = message
      })
    }
  }
}
</script>

<style lang="scss">
  .content-message {
    height: calc(100vh - 310px);
  }
  .messages-list {
    max-height: calc(100vh - 310px);
    overflow: auto;
  }
  .message-title {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .name {
      font-size: 1.3em;
      color: #3a3a3a;
    }
    .date {
      color: #ccc;
    }
  }
  .icon-settings {
    font-size: 14px !important;
  }
  .message-title-content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .name {
      font-size: 1.5em;
    }
    .date {
      color: #ccc;
    }
  }
  .subject {
    font-size: 1.2em;
    margin-top: 0;
  }
  .message {
    cursor: pointer;
  }
  .message-message {
    flex: 1;
    display: flex;
  }
  .message:hover {
    background-color: rgba(73, 164, 46, 0.1)
  }
  .read {
    background-color: #f1f1f1;
  }
</style>
