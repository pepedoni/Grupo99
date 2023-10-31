<template>
    <v-container>
        <service-order-list :items="items" :headers="headers" :itemsPerPage="10"></service-order-list>
    </v-container>
     
    
</template>
  
<script>
    import { mapState, mapActions } from 'vuex'
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