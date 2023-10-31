<template>
    <v-row justify="center" >
      <v-col
        cols="auto"
      >
        <v-card height="200" max-width="400" class="elevation-5">
            <v-card-title>Solicitação de reparo</v-card-title>
            <v-card-item>
            <div>
              <div class="text-caption">
                Para realizar uma nova solicitação de Reparo de aparelhos eletrodoméstico
                clique no botão abaixo e preencha suas informações.
                Um orçamento estimado será gerado para você em cerca de 2 a 5 dias úteis.
              </div> 
            </div>
          </v-card-item>
          <v-card-actions>
            <v-btn @click="createQuote">
              Solicitar
            </v-btn>
          </v-card-actions>
        </v-card>
        
     </v-col>
      <v-col
        cols="auto"
      >
        <v-card height="200" max-width="400" class="elevation-5">
            <v-card-title>Acompanhar Solicitações</v-card-title>
            <v-card-item>
            <div>
              <div class="text-caption">
                Acompanhe a partir do link abaixo todas as suas solicitações de reparo.
                As solicitações com status de reparo finalizado estão aguardando a
                retirada do aparelho na loja mediante a apresentação do seu documento.
              </div>
            </div>
          </v-card-item>
          <v-card-actions>
            <v-btn @click="viewServiceOrders">
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
    createQuote() {
      this.$router.push('/serviceOrder/create')
    },
    viewServiceOrders() {
      this.$router.push('/serviceOrders')
    }
  }
}
</script>