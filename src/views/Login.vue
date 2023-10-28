

<template>
  <div class="p-3 flex justify-center ">
  <form class="mt-20 shadow-xl rounded-xl p-3" @submit.prevent="login">
    <div class="flex flex-col mb-2">
      <label for="email">Email</label>
      <input type="email" id="email" class="p-2 py-1 rounded-xl outline-none border" v-model="email">
    </div>
    <div class="flex flex-col mb-4">
      <label for="password">Password</label>
      <input type="password" id="password" class="p-2 py-1 rounded-xl outline-none border" v-model="password">
    </div>
    <div class="block mb-4">
     <button class="px-2 py-1 rounded-lg text-white bg-slate-900 hover:bg-slate-700">Login</button>
    </div>
    <div>
      <router-link to="/" class="text-xs text-slate-700">home</router-link>

     <span class="text-xs text-slate-700">Or</span> <router-link to="/signup" class="text-xs text-slate-700">Create an account</router-link>
    </div>
  </form>
</div>
</template>
<script>
import axios from 'axios';
import {ref} from 'vue'
import { useAuthStore } from '../stores/counter';
import { useRouter } from 'vue-router';
export default{
  setup() {
    const router = useRouter()
    const authStore = useAuthStore()
      const email = ref('');
      const password =  ref('');
      axios.defaults.withCredentials = true
       const login = async()=>{
        await axios.get('https://laravel.peshraw.xyz/sanctum/csrf-cookie')
        await axios.post('https://laravel.peshraw.xyz/api/login', {email: email.value, password: password.value})
        
         const {user}  = await axios.get('https://laravel.peshraw.xyz/api/user')
         console.log(user)
       }
       const authenticate = (user)=>{
           authStore.user = user
           authStore.authenticated = true
       }
       return{login, email, password}
    },
  methods:{
    
    
  },
  mounted(){
   
  }
}
</script>
