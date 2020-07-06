<template>
 <div>
    <div class="box">
        <div><top></top></div>
        <div><navb></navb></div>
        <div><router-view></router-view></div>
    </div>
 </div>
</template>

<script>
import top from '../../components/top/top'
 export default {
   name: '',
   props: {
   },
   components: {
       top,
   },
   data () {
     return {

     }
   },
   methods: {
       backhome(){
           this.$router.push('/')
       }
   },
   mounted() {

   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>