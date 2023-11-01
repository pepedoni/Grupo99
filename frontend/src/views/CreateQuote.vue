<template>
    <v-row justify="center">
        <v-card align="center" class="elevation-5 pl-2 pr-2 pb-2 pt-2">
            <v-card-title>
                <h1>{{ order.device }}</h1>
            </v-card-title>
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
            </v-card-item>
            <v-card-item>
                <v-form>
                    <v-text-field
                        v-model="value"
                        label="Valor"
                        required
                    ></v-text-field>
                    <v-text-field
                        v-model="hoursExpected"
                        label="Horas estimadas"
                        required
                    ></v-text-field>
                </v-form>
            </v-card-item>
            <v-card-actions>
                <v-row align="center" justify="center">
                    <v-btn color="primary" @click="createQuote(order)">Gerar orçamento</v-btn>
                </v-row>
            </v-card-actions>
        </v-card>
        
    </v-row>
</template>

<script>
    import { mapState, mapActions } from 'vuex'
    import { mapFields } from 'vuex-map-fields';

    export default {
        computed: {
            ...mapState('serviceOrder', ['order']),
            ...mapFields('serviceOrder', ['newQuote.value', 'newQuote.hoursExpected']),
        },
        data() {
            return {
            }
        },
        methods: {
            ...mapActions('serviceOrder', ['createQuote']),
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