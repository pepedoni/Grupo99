<template>
    <v-container>
        <h1>Orçamentos Pendentes</h1>
        <service-order-list origin="pending-quotes" :items="items" :headers="headers" :itemsPerPage="10"></service-order-list>
    </v-container>
     
    
</template>
  
<script>
    import { mapActions } from 'vuex'
    import ServiceOrdersList from '@/components/serviceOrders/ServiceOrdersList.vue'
  
    export default {
        created() {
            this.getServiceOrdersPendingQuotes()
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
            ...mapActions('serviceOrder', ['getServiceOrdersPendingQuotes']),
        }
    }
</script>