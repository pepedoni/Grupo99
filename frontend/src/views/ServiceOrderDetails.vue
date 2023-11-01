<template>
    <v-row justify="center">
        <v-card align="center" class="elevation-5 pl-2 pr-2 pb-2 pt-2">
            <v-card-title>
                <h1>{{ order.device }}</h1>
            </v-card-title>
            <br>
            <v-row v-if="user.type == 'client' && order.status == 'waitingApproval'">
                <v-col cols="auto">
                    <v-btn color="primary" @click="approveQuote(order)">Aprovar</v-btn>
                </v-col>
                <v-col align="right">
                    <v-btn color="red" @click="refuseQuote(order)">Recusar</v-btn>
                </v-col>
            </v-row>
            <br>
            <v-card-item>
                <v-row>
                    <v-col cols="auto">
                        <b>Descrição do problema:</b> 
                    </v-col>
                    <v-col align="right">
                        {{ order.problemDescription }}
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="auto">
                        <b>Status:</b> 
                    </v-col>
                    <v-col align="right">
                        {{ getStatus(order.status) }}
                    </v-col>
                </v-row> 
                <v-row v-if="order.status != 'waitingQuote'">
                    <v-col cols="auto">
                        <b>Valor do reparo:</b> 
                    </v-col>
                    <v-col align="right">
                        {{ order?.quote?.value ? order.quote.value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) : 0 }}
                    </v-col>
                </v-row> 
                <v-row v-if="order.status != 'waitingQuote'">
                    <v-col cols="auto">
                        <b>Observação:</b> 
                    </v-col>
                    <v-col align="right">
                        {{ order.observation }}
                    </v-col>
                </v-row>
            </v-card-item>
            <v-card-actions>
                <v-row align="center" justify="center">
                    <v-btn color="primary" @click="this.$router.push('/serviceOrders')">Visualizar Todos os Pedidos</v-btn>
                </v-row>
            </v-card-actions>
        </v-card>
        
    </v-row>
</template>

<script>
    import { mapState, mapActions } from 'vuex'

    export default {
        computed: {
            ...mapState('login', ['user']),
            ...mapState('serviceOrder', ['order']),
        },
        data() {
            return {
            }
        },
        methods: {
            ...mapActions('serviceOrder', ['getServiceOrder', 'updateStatusServiceOrder']),
            getStatus() {
                switch (this.order.status) {
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
            }
        },
        created() {
            this.getServiceOrder({id: this.$route.params.id})
        }
    }
</script>