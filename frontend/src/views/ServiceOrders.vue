<template>
    <v-container>
        <v-data-table
            v-model:items-per-page="itemsPerPage"
            :headers="headers"
            :items="items"
            item-value="name"
            class="elevation-1"
        >
            <template v-slot:[`item.status`]="{ item }">
                <span>{{ getStatus(item.status) }}</span>
            </template>
            <template v-slot:[`item.actions`]="{ item }">
                <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                        <v-icon
                        small
                        v-on="on"
                        v-bind="attrs"
                        class="mr-2"
                        @click="showServiceOrderDetail({ item: item })"
                        >mdi-information</v-icon
                        >
                    </template>
                    <span>Informações</span>
                </v-tooltip>
            </template>
        </v-data-table>
    </v-container>
     
    
</template>
  
<script>
    import { mapState, mapActions } from 'vuex'
  
    export default {
        created() {
            this.getServiceOrders()
        },
        computed: {
            ...mapState('serviceOrder', ['items'])
        },
        data() {
            return{
                headers: [
                    { title: 'ID', align: 'start', key: 'id'},
                    { title: 'Dispostivo', align: 'end', key: 'device' },
                    { title: 'Status', align: 'end', key: 'status'},
                    { title: 'Ações', align: 'end', key: 'actions'}
                ],
                itemsPerPage: 10
            }
        },
        methods: {
            ...mapActions('serviceOrder', ['getServiceOrders']),
            getStatus(status) {
                switch (status) {
                    case 'waitingQuote':
                        return 'Aguardando Orçamento'
                    case 'waitingApproval':
                        return 'Aguardando Aprovação'
                    case "refused":
                        return 'Reprovado'
                    case "repairing":
                        return 'Em Reparo'
                    case "finished":
                        return 'Pronto para Retirada'
                    case "delivered":
                        return 'Entregue'
                }
            },
            showServiceOrderDetail({ item }) {
                this.$router.push(`/serviceOrder/${item.id}`)
            }
        }
    }
</script>