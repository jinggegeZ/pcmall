<template>
 <div>
    <div class="box">
        <div class="login">
          <div class="top">
            <div class="left">M</div>
          </div>
          <div class="b-font">使用XMall账号 登录官网</div>
          <div class="b-input">
          <Input v-model="number1" placeholder="Enter something..." clearable style="width: 300px" type="number" />
          </div>
          <div class="b-input">
          <Input v-model="number2" placeholder="Enter something..." clearable style="width: 300px" type="password" />
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
       number1:'',
       number2:''
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
    width: 450px;
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
.b-input {
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>