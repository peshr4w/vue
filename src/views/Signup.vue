

<template>
    <div class="p-3 flex justify-center ">
    <form class="mt-20 shadow-xl rounded-xl p-3" @submit.prevent="signup">
        <div class="flex flex-col mb-2">
        <label for="email">Name</label>
        <input type="text" id="name" class="p-2 py-1 rounded-xl outline-none border" v-model="name">
      </div>
      <div class="flex flex-col mb-2">
        <label for="email">Email</label>
        <input type="email" id="email" class="p-2 py-1 rounded-xl outline-none border" v-model="email">
      </div>
      <div class="flex flex-col mb-4">
        <label for="password">Password</label>
        <input type="password" id="password" class="p-2 py-1 rounded-xl outline-none border" v-model="password">
      </div>
      <div class="flex flex-col mb-4">
        <label for="c_password">Confirm Password</label>
        <input type="password" id="c_password" class="p-2 py-1 rounded-xl outline-none border" v-model="confirm_password">
      </div>
      <div class="block mb-4">
       <button class="px-2 py-1 rounded-lg text-white bg-slate-900 hover:bg-slate-700">Signup</button>
      </div>
      <div>
       <span class="text-xs text-slate-700">Or</span> <router-link to="/login" class="text-xs text-slate-700">Login</router-link>
      </div>
    </form>
  </div>
  </template>
  <script>
  import axios from 'axios';
  import {ref} from 'vue'
  export default{
    setup() {
        const name = ref('');
        const email = ref('');
        const password =  ref('');
        const confirm_password =  ref('');
         const signup = async()=>{
          await axios.get('https://laravel.peshraw.xyz/sanctum/csrf-cookie')
          await axios.post('https://laravel.peshraw.xyz/api/register', {name:name,  email: email.value, password: password.value, confirm_password: confirm_password.value})
          .then(res =>{
            console.log(res.data)
          })
          .catch(err =>{
            console.log(err)
          });
         }
         return{signup, name,  email, password, confirm_password}
      },
    methods:{
      
    },
    mounted(){
     
    }
  }
  </script>
  