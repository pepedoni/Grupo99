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
    </v-app-bar>
  </v-layout>
  
</template>

<script>
import router from '@/router';

export default {
  name: 'AppBar',
  methods: {
    goToHome() {
      router.push({ name: 'Home' })
    },
  }
};
</script>