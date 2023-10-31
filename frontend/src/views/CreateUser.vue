<template>
    <v-row justify="center">
        <v-card max-width="400" min-width="400">
            <v-card-title align="center">Adcionar Usuário</v-card-title>
            <v-card-item>
                <v-form>
                    <v-select
                        v-model="type"
                        label="Tipo"
                        :items="typesUser"
                        item-title="text"
                        item-value="value"
                    ></v-select>
                    <v-text-field
                        v-model="name"
                        label="Nome"
                        required
                    ></v-text-field>
                    <v-text-field
                        v-model="email"
                        label="Email"
                        required
                    ></v-text-field>
                    <v-text-field
                        v-model="password"
                        label="Senha"
                        required
                    ></v-text-field>
                    <v-text-field
                        v-model="phoneNumber"
                        label="Telefone"
                        required
                    ></v-text-field>
                </v-form>
            </v-card-item>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn 
                    color="primary"
                    @click="createUser"
                >
                    Criar
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
            ...mapState('user', ['user']),
            ...mapFields('user', ['newUser.name', 'newUser.type', 'newUser.email', 'newUser.password', 'newUser.phoneNumber']),
        },
        data() {
            return {
                typesUser: [
                    { text: 'Cliente', value: 'client' },
                    { text: 'Funcionário', value: 'employee' },
                    { text: 'Administrador', value: 'admin'}
                ]
            }
        },
        methods: {
            ...mapActions('user', ['createUser']),
        }
    }
</script>