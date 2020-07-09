<template>
 <div>
    <div class="box">
        <div class="box1">122</div>
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
         key:''
     }
   },
   methods: {

   },
   mounted() {
       this.key = this.$route.query.key
       console.log(this.key);
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
    height: 100%;

}
</style>