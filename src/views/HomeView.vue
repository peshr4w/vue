

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
  </form>
</div>
</template>
<script>
import axios from 'axios';
import {ref} from 'vue'
export default{
  setup() {
      const email = ref('');
      const password =  ref('');
       const login = async()=>{
        await axios.get('http://laravel.peshraw.xyz/sanctum/csrf-cookie')
        await axios.post('http://laravel.peshraw.xyz/api/login', {email: email.value, password: password.value})
        .then(res =>{
          console.log(res.data)
        })
        .catch(err =>{
          console.log(err)
        });
       }
       return{login, email, password}
    },
  methods:{
    async auth(){
      await axios.get('http://laravel.peshraw.xyz/sanctum/csrf-cookie')
      .then(res =>{
        console.log(res.data)
        console.log(document.cookie)
      })
      .catch(err =>{
        console.log(err)
      })
    },
    
  },
  mounted(){
    this.auth()
   
  }
}
</script>
