<template>
     <div class="flex gap-x-2 p-2">
       <router-link to="/login">Login</router-link>
       <router-link to="/signup">Signup</router-link>
       <router-link to="/dashboard">Dashboard</router-link>
       <router-link to="/profile">profile</router-link>
       
     <button @click="logout" class="bg-red-500 text-white px-2 rounded-md">Logout</button>
     username
     {{ authStore.user.name }}
     </div>
</template>
<script>
import { onMounted } from 'vue';
import axios from 'axios';
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
        return {logout, authStore}
    }
 }
</script>