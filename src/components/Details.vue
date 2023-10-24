<template>
       {{ dev }}
</template>
<script lang="ts">
import {defineComponent} from 'vue';
  export default defineComponent({
    props:{
      dev:{
        required: true,
        type: Object
      },
    }
  })
</script>