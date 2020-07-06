<template>
  <div>
    <div class="box">
      <div class="login">
        <div class="top">
          <div class="left">M</div>
        </div>
        <div class="b-font">使用XMall账号 登录官网</div>
        <div class="b-input">
          <Input v-model="number1" placeholder="账号" clearable style="width: 300px" />
        </div>
        <div class="b-input">
          <Input v-model="number2" placeholder="密码" clearable style="width: 300px" type="password" />
        </div>
        <div>
          <div id="vaptchaContainer" style="width: 300px;height: 36px;">
            <!--vaptcha-container是用来引入VAPTCHA的容器，下面代码为预加载动画，仅供参考-->
            <div class="vaptcha-init-main">
              <div class="vaptcha-init-loading">
                <a href="/" target="_blank">
                  <img src="https://r.vaptcha.net/public/img/vaptcha-loading.gif" />
                </a>
                <span class="vaptcha-text">Vaptcha启动中...</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="https://v.vaptcha.com/v3.js"></script>
<script>
vaptcha({
  vid: "75791", // 验证单元id
  type: "invisible", // 显示类型 隐藏式
  scene: 0, // 场景值 默认0
  offline_server: "", //离线模式服务端地址，若尚未配置离线模式，请填写任意地址即可。
  //可选参数
  //lang: 'auto', // 语言 默认auto,可选值auto,zh-CN,en,zh-TW,jp
  //https: true, // 使用https 默认 true
}).then(function (vaptchaObj) {
  obj = vaptchaObj; //将VAPTCHA验证实例保存到局部变量中
  //获取token的方式一：
  //vaptchaObj.renderTokenInput('.login-form')//以form的方式提交数据时，使用此函数向表单添加token值
  //获取token的方式二：
  vaptchaObj.listen("pass", function () {
    // 验证成功进行后续操作
    var data = {
      //表单数据
      token: vaptchaObj.getToken(),
    };
    $.post("login", data, function (r) {
      if (r.code !== 200) {
        console.log("登录失败");
        vaptchaObj.reset(); //重置验证码
      }
    });
  });
  //关闭验证弹窗时触发
  vaptchaObj.listen("close", function () {
    //验证弹窗关闭触发
  });
});
//VAPTCHA实例初始化完成后，等到用户点击登录按钮时执行validate()方法
$("#login-button").on("click", function () {
  obj.validate();
});
配置参数
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      number1: "",
      number2: ""
    };
  },
  methods: {
  },
  mounted() {},
  watch: {},
  computed: {},
  
};
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
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.vaptcha-init-main {
  display: table;
  width: 100%;
  height: 100%;
  background-color: #eeeeee;
}
​ .vaptcha-init-loading {
  display: table-cell;
  vertical-align: middle;
  text-align: center;
}
​ .vaptcha-init-loading > a {
  display: inline-block;
  width: 18px;
  height: 18px;
  border: none;
}
​ .vaptcha-init-loading > a img {
  vertical-align: middle;
}
​ .vaptcha-init-loading .vaptcha-text {
  font-family: sans-serif;
  font-size: 12px;
  color: #cccccc;
  vertical-align: middle;
}
</style>