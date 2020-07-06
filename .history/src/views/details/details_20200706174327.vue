<template>
 <div>
    <div class="box">
        <div class="login"></div>
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
    height: 100%;
    background:rgb(250,250,250);
    display: flex;
    justify-content: center;
    align-items: center;
}
.login {
    width: 400px;
    height: 600px;
    background: white;
    box-shadow: 0 2px 4px 0 #ddd;
    margin-top: 30px;
    border-radius: 5px;
}
</style>