<template>
    <form class="m-4 rounded-2xl p-3 shadow">
        <div class="form-group mb-2">
            <label for="username" >Username</label>
            <input type="text" v-focus class="form-control shadow-none" id="username" :value="username" @input="$emit('update:username',$event.target.value )">
        </div>
        <div class="form-group mb-3">
            <label for="password">Password</label>
            <input type="text" class="form-control shadow-none" id="passwod" :value="password" @input="$emit('update:password', $event.target.value)">
        </div>
        <div class="form-group mb-2">
            <button class="w-full bg-pink-600 text-white capitalize rounded-lg py-2">Submit</button>
        </div>
    </form>
</template>
<script>
import AOS from 'aos';
import 'aos/dist/aos.css'; 
export default{
    setup(){
    AOS.init()
    },
    emits:['update:username', 'update:password'],
    props:{
        username: String,
        password: String
    },
    directives: {
        focus
    }
}
</script>