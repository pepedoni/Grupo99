<template>
  <v-layout>
    <v-app-bar color="black" class="elevation-5">
      <v-app-bar-title>
        Grupo 99
      </v-app-bar-title>
      <v-spacer></v-spacer>

      <v-btn @click="goToHome" v-if="loggedIn">
        Home
      </v-btn>
      <v-btn v-if="user.type == 'admin'" @click="goToUsers">
        Usuários
      </v-btn>
      <v-btn v-if="loggedIn" @click="logout">
        Logout
      </v-btn>
    </v-app-bar>
  </v-layout>
  
</template>

<script>
import router from '@/router';
import { mapState, mapActions } from 'vuex'

export default {
  name: 'AppBar',
  computed: {
    ...mapState('login', ['user', 'loggedIn']),
  },
  methods: {
    ...mapActions('login', ['logout']),
    goToHome() {
      router.push({ name: 'Home' })
    },
    goToUsers() {
      router.push({ name: 'Users' })
    }
  }
};
</script>