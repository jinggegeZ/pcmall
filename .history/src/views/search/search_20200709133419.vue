<template>
 <div>
    <div class="box">12</div>
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

</style>