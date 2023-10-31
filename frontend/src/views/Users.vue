<template>
    <v-container>
        <v-btn @click="createNewUser">Adicionar</v-btn>
        
        <v-data-table
            v-model:items-per-page="itemsPerPage"
            :headers="headers"
            :items="items"
            item-value="name"
            class="elevation-1"
        ></v-data-table>
    </v-container>
     
    
</template>
  
<script>
    import { mapState, mapActions } from 'vuex'
  
    export default {
        created() {
            this.getUsers()
        },
        computed: {
            ...mapState('user', ['items'])
        },
        data() {
            return{
                headers: [
                    { title: 'ID', align: 'start', key: 'id'},
                    { title: 'Nome', align: 'end', key: 'name' },
                    { title: 'Email', align: 'end', key: 'email' },
                    { title: 'Tipo', align: 'end', key: 'type' },
                    { title: 'Telefone', align: 'end', key: 'phoneNumber' },
                    { title: 'Status', align: 'end', key: 'status' },
                ],
                itemsPerPage: 10
            }
        },
        methods: {
            ...mapActions('user', ['getUsers']),
            createNewUser() {
                this.$router.push('/users/create')
            }
        }
    }
</script>