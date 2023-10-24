

<template>
  
</template>
<script>
import axios from 'axios';
export default{
  methods:{
    auth(){
      axios.get('https://laravel.peshraw.xyz/api/user')
      .then(res =>{
        console.log(res.data)
      })
      .catch(err =>{
        console.log(err)
      })
    }
  },
  mounted(){
    this.auth()
  }
}
</script>
