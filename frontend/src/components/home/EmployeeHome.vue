<template>
    <v-row justify="center">
      <v-col
        cols="auto"
      >
        <v-card height="200" max-width="400">
            <v-card-title>Histórico de Serviços</v-card-title>
            <v-card-item>
            <div>
              <div class="text-caption">
                Clique no botão abaixo para consultar o histórico de serviços prestados.
              </div>
            </div>
          </v-card-item>
          <v-card-actions>
            <v-btn @click="listServiceOrders">
              Consultar histórico
            </v-btn>
          </v-card-actions>
        </v-card>
        
     </v-col>
      <v-col
        cols="auto"
      >
        <v-card height="200" max-width="400">
            <v-card-title>Orçamentos Pendentes</v-card-title>
            <v-card-item>
            <div>
              <div class="text-caption">
                Acompanhe a partir do link abaixo todas as suas solicitações de orçamentos ainda não enviadas para o cliente.
              </div>
            </div>
          </v-card-item>
          <v-card-actions>
            <v-btn @click="viewPendingQuotes">
              Acompanhar
            </v-btn>
          </v-card-actions>

        </v-card>
      </v-col>
    </v-row>

</template>

<script>

export default {
  computed: {
  },
  methods: {
    listServiceOrders() {
      this.$router.push('/serviceOrder/history')
    },
    viewPendingQuotes() {
      this.$router.push('/quotes')
    }
  }
}
</script>
