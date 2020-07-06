<template>
 <div>
    <div class="box">
        <div class="login">
          <div class="top">
            <div class="left">M</div>
            <div>使用X-mall账号登录</div>
          </div>
        </div>
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
.top {
  height: 200px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.left {
  width: 90px;
  height: 90px;
  background: red;
  border-radius: 45px;
  color: white;
  font-size: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>