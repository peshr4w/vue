<template>
  <Navbar />
  <div class="w-80 p-4" >
      <form @submit.prevent="login">
        <div class="mb-4 relative w-full">
         <label class=" absolute bg-white left-1 text-xs px-1 -top-1/2 translate-y-1/2" for="email">Email</label>
         <input type="email" id="email" class="px-2 py-1 border outline-none rounded-xl w-full" v-model="email">
        </div>
        <div class="mb-3 relative w-full">
         <label class=" absolute bg-white left-1 text-xs px-1 -top-1/2 translate-y-1/2" for="password">Password</label>
         <input type="password" id="password" class="px-2 py-1 border outline-none rounded-xl w-full" v-model="password">
        </div>
        <div class="">
          <button class="py-1 bg-slate-800 text-white rounded-xl w-full">Login</button>
        </div>
      </form>
  </div>
</template>
<script lang="ts">
import axios from "axios";
import { defineComponent } from "vue";
import Details from "./components/details.vue";
import Navbar from './components/navbar.vue'

export default defineComponent({
  name: "App",
  setup() {
     
  },
  data(){
    return{
      email: '',
      password: ''
    }
  },
  methods: {
    fetchData() {
      axios.get("http://127.0.0.1:8000/sanctum/csrf-cookie", {withCredentials: true})
      .then((res: any) => {
        console.log(res.data);
      });
    },
    login(){
      axios.post("http://127.0.0.1:8000/api/login",{email: this.email, password: this.password})
      .then((res: any) => {
        console.log(res.data);
      });
    }
  },
  components:{
    Details,
    Navbar,
  },
  mounted() {
    this.fetchData();
  },
});
</script>
