<template>
    <v-row justify="center">
        <v-card max-width="400" min-width="400" class="elevation-5">
            <v-card-title align="center">Solicitar Reparo</v-card-title>
            <v-card-item>
                <v-form>
                    <v-text-field
                        v-model="device"
                        label="Nome do Produto"
                        required
                    ></v-text-field>
                    <v-textarea
                        v-model="problemDescription"
                        label="Descrição do Problema"
                        required
                    ></v-textarea>
                </v-form>
            </v-card-item>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn 
                    color="primary"
                    @click="createServiceOrder"
                >
                    Solicitar
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-row>
    
</template>
  
<script>
    import { mapState, mapActions } from 'vuex'
    import { mapFields } from 'vuex-map-fields';
  
    export default {
        computed: {
            ...mapFields('serviceOrder', ['newServiceOrder.device', 'newServiceOrder.problemDescription']),
        },
        data() {
            return {
            }
        },
        methods: {
            ...mapActions('serviceOrder', ['createServiceOrder']),
        }
    }
</script>