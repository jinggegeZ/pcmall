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
    width: 500px;
    height: 700px;
    background: white;
    box-shadow: 0 4px 8px 0 #ddd;
    margin-top: 30px;
    border-radius: 10px;
}
</style>