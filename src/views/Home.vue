
<template>
    <Details v-model:username="username" v-model:password="password">
        
    </Details>
    
</template>
<script >
import Details from '@/components/Details.vue'
export default {
  data(){
    return{
      count:0,
      username: 'peshraw',
      password: 'P@ssword123'
      
    }
  },
  components:{
   Details
  }
}
</script>
