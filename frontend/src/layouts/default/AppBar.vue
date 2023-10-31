<template>
  <v-layout>
    <v-app-bar color="black" >
      <v-app-bar-title>
        Grupo 99
      </v-app-bar-title>
      <v-spacer></v-spacer>

      <v-btn @click="goToHome">
        Home
      </v-btn>
      <v-btn v-if="user.type == 'admin'" @click="goToUsers">
        Usuários
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
    ...mapState('login', ['user']),
  },
  methods: {
    goToHome() {
      router.push({ name: 'Home' })
    },
    goToUsers() {
      router.push({ name: 'Users' })
    }
  }
};
</script>