<template>
    <div>
        <v-data-table
        :items-per-page="itemsPerPage"
        :headers="headers"
        :items="items"
        item-value="name"
        class="elevation-5"
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
    </div>

</template>

<script>
import { mapState } from 'vuex'

export default {
    props: [
        'headers',
        'itemsPerPage',
    ],
    computed: {
        ...mapState('serviceOrder', ['items'])
    },
    methods: {
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