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
import navb from '../../components/navb/navb'
 export default {
   name: '',
   props: {
   },
   components: {
       top,
       navb,
   },
   data () {
     return {

     }
   },
   methods: {
       
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
.box {
    width: 100%;
}
</style>