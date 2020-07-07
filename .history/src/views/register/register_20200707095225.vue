<template>
 <div>
    <div class="box">
        <div class="register">
            <div class="top">
                <div class="top1">注册Xmall账号</div>
            </div>
            <div class="b-input">
          <Input v-model="number1" placeholder="账号" clearable style="width: 300px" />
        </div>
        <div class="b-input">
          <Input v-model="password" placeholder="密码" clearable style="width: 300px" type="password" />
        </div>
        <div class="b-input">
          <Input v-model="password" placeholder="密码" clearable style="width: 300px" type="password" />
        </div>
        <div class="vpat">
          <div ref="vaptcha" style="width:300px;height:36px">
            <div class="vaptcha-init-main">
              <div class="vaptcha-init-loading">
                <a href="https://www.vaptcha.com/" target="_blank">
                  <img src="https://cdn.vaptcha.com/vaptcha-loading.gif" />
                </a>
                <span class="vaptcha-text">VAPTCHA启动中...</span>
              </div>
            </div>
          </div>
        </div>
        </div>
    </div>
 </div>
</template>

<script>
const extend = function(to, _from) {
  for (const key in _from) {
    to[key] = _from[key];
  }
  return to;
};
 export default {
   name: '',
   props: {
       type: {
      type: String,
      default: "click"
    },
    scene: {
      type: [String, Number],
      default: 0
    },
    vpStyle: {
      type: String,
      default: "dark"
    },
    color: {
      type: String,
      color: "#3C8AFF"
    },
    lang: {
      type: String,
      default: "auto"
    }
   },
   components: {

   },
   data () {
     return {
        num:''
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
  background: rgb(250, 250, 250);
  display: flex;
  justify-content: center;
  align-items: center;
}
.register {
  width: 450px;
  height: 580px;
  background: white;
  box-shadow: 0 8px 16px 0 #ddd;
  margin-top: 30px;
  border-radius: 10px;
}
.top {
    height: 50px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid rgb(150,150,150);
}
.top1 {
    width: 350px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    font-weight: 700;
    
}
.b-input {
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
}
</style>