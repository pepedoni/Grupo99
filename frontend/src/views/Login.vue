<template>
    <v-row justify="center">
        <v-card height="300" max-width="400" min-width="400">
            <v-card-title align="center">Login</v-card-title>
            <v-card-item>
                <v-form>
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
                </v-form>
            </v-card-item>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn 
                    color="primary"
                    @click="login"
                >
                    Entrar
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
            ...mapState('login', ['user']),
            ...mapFields('login', ['loginRequest.email', 'loginRequest.password']),
        },
        data() {
        },
        methods: {
            ...mapActions('login', ['login']),
        }
    }
</script>