<template>
    <v-row justify="center">
      <v-col
        cols="auto"
      >
        <v-card height="180" max-width="400">
            <v-card-title>Orçamentos Pendentes</v-card-title>
            <v-card-item>
            <div>
              <div class="text-caption">
                Visualize e crie orçamentos para as solicitações que ainda não possuem orçamento.
                Lembre-se de informar qual o valor do orçamento ao usuário
              </div> 
            </div>
          </v-card-item>
          <v-card-actions>
            <v-btn @click="">
              Solicitar
            </v-btn>
          </v-card-actions>
        </v-card>
        
     </v-col>
      <v-col
        cols="auto"
      >
        <v-card height="180" max-width="400">
            <v-card-title>Visualizar Serviços</v-card-title>
            <v-card-item>
            <div>
              <div class="text-caption">
                Visualize todos os serviços que ainda não foram atualizados. 
                Lembre-se de alterar o status do serviço a medida em que for evoluindo no mesmo
              </div>
            </div>
          </v-card-item>
          <v-card-actions>
            <v-btn @click="">
              Visualizar
            </v-btn>
          </v-card-actions>

        </v-card>
      </v-col>
    </v-row>
</template>