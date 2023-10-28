<template>
     authnteicated page
     <router-link to="/">Home</router-link>
     <router-link to="/login">Login</router-link>
       <router-link to="/signup">Signup</router-link>
     <button @click="logout" class="bg-red-500 text-white px-2 rounded-md">Logout</button>
</template>
<script>
import { useRouter } from 'vue-router';
import { useAuthStore } from '../stores/counter';

export default{
    setup(){
        const router  = useRouter()
        const authStore = useAuthStore();
        console.log(authStore.authenticated, authStore.user)
        const logout = ()=>{
            authStore.authenticated = false
            authStore.user = null
            router.push({name: 'home'})
        }
        return {logout}
    }
}
</script>