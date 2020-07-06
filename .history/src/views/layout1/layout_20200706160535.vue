<template>
 <div>
    <div class="box">
        <div class="top">456</div>
        <div></div>
        <div><router-view></router-view></div>
    </div>
 </div>
</template>

<script>
 export default {
   name: '',
   props: {
   },
   components: {

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
.top {
    width: 100%; 
    height: 100px;
    background: black;
    color: white;
}
</style>