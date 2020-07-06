<template>
 <div>
    <div class="box">
        <div class="login">
          <div class="top">
            <div class="left">M</div>
          </div>
          <div class="b-font">使用XMall账号 登录官网</div>
          
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
    width: 480px;
    height: 600px;
    background: white;
    box-shadow: 0 8px 16px 0 #ddd;
    margin-top: 30px;
    border-radius: 10px;
}
.top {
  height: 160px;
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
.b-font {
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
}
</style>