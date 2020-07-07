<template>
 <div>
    <div class="box">
        <div><top></top></div>
        <div><navb></navb></div>
        <div><details></details></div>
        <div><router-view></router-view></div>
        <div><buttom></buttom></div>
    </div>
 </div>
</template>

<script>
import top from '../../components/top/top'
import navb from '../../components/navb/navb'
import details from '../../views/details/details'
import buttom from '../../components/buttom/buttom'
 export default {
   name: '',
   props: {
   },
   components: {
       top,
       navb,
       buttom,
       details,
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