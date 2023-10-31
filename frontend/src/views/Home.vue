<template>
  <div>
    <UserHome v-if="user.type == 'client'"/>
    <EmployeeHome v-else-if="user.type == 'employee'"/>
    <AdminHome v-else-if="user.type == 'admin'"/>
  </div>
  
</template>

<script setup>
  import UserHome from '@/components/home/UserHome.vue'
  import EmployeeHome from '@/components/home/EmployeeHome.vue'
  import AdminHome from '@/components/home/AdminHome.vue'
</script>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState('login', ['user']),
  },
  methods: {
    ...mapActions('login', ['checkToken']),
  }
}
</script>