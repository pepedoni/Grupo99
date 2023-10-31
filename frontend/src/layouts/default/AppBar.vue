<template>
  <v-layout>
    <v-app-bar color="black" >
      <v-app-bar-title>
        Grupo 99
      </v-app-bar-title>
      <v-spacer></v-spacer>

      <v-btn>
        Home
      </v-btn>
    </v-app-bar>
  </v-layout>
  
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState('login', ['user']),
  }
}
</script>
