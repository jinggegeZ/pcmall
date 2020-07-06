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

.dian {
    width: 2px;
    height: 2px;
    border-radius: 1px;
    background: rgb(150,150,150);
    margin-left: 10px;
    margin-right: 10px;
}
.t-font:hover {
    color: blue;
}
</style>