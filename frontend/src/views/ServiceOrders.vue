<template>
    <v-container>
        <h1>Serviços</h1>
        <service-order-list origin="service-orders" :items="items" :headers="headers" :itemsPerPage="10"></service-order-list>
    </v-container>
     
    
</template>
  
<script>
    import { mapState, mapActions } from 'vuex'
    import ServiceOrdersList from '@/components/serviceOrders/ServiceOrdersList.vue'
  
    export default {
        computed: {
            ...mapState('login', ['user']),
        },
        created() {
            console.log(this.user)
            if(this.user.type == 'client') 
                this.getServiceOrders()
            else if(this.user.type == 'employee' || this.user.type == 'admin') {
                this.getServiceOrdersByEmployee()
            }
        },
        components: {
            'service-order-list': ServiceOrdersList
        },  
        data() {
            return{
                headers: [
                    { title: 'ID', align: 'start', key: 'id'},
                    { title: 'Dispostivo', align: 'end', key: 'device' },
                    { title: 'Status', align: 'end', key: 'status'},
                    { title: 'Ações', align: 'end', key: 'actions'}
                ]
            }
        },
        methods: {
            ...mapActions('serviceOrder', ['getServiceOrders', 'getServiceOrdersByEmployee']),
        }
    }
</script>