import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios';


export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: {},
        authenticated: false
    }),
    actions: {
        auth() {

            axios.get('http://localhost:8000/sanctum/csrf-cookie')
                .then(() => {
                    axios.get('https://localhost:8000/api/user')
                        .then(res => {
                            console.log(res.data)
                            if (res.data) {
                                this.user = res.data
                                this.authenticated = true
                            }

                        })
                        .catch(err => {
                            console.log(err)
                        });
                })

        },
        Authenticate() {
            this.user = user
            this.authenticated = true
        }
    }
})