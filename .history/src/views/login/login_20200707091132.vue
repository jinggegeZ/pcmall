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
        <div class="rem">
          <div class="rem1">
            <div><Radio v-model="single">记住密码</Radio></div>
            <div class="rem2">
              <a href="">注册Xmall账号</a>
              <div class="xainge"></div>
              <a href="">忘记密码？</a>
            </div>
          </div>
        </div>
        <div class="clk">
           <div v-if="this.number1 === '' ||this.password === ''" class="click"><Button type="success" long  disabled>登录</Button></div>
           <div v-else class="click"><Button type="success" long  >登录</Button></div>
        </div>
        <div class="clk">
          <div class="click"><Button type="error" long>返回</Button></div>
        </div>
        <div class="down">
          <div class="down1"></div>
        </div>
        <div class="down">
          <div class="down2">
            <div>其他登录方式</div>
            <div></div>
            <div></div>
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
  name: "",
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
  components: {},
  data() {
    return {
      number1: "",
      password: "",
      single: false
    };
  },
  methods: {
    loadV2Script() {
      if (typeof window.vaptcha === "function") {
        //如果已经加载就直接放回
        return Promise.resolve();
      } else {
        return new Promise(resolve => {
          var script = document.createElement("script");
          script.src = "https://v.vaptcha.com/v3.js";
          script.async = true;
          script.onload = script.onreadystatechange = function() {
            if (
              !this.readyState ||
              this.readyState == "loaded" ||
              this.readyState == "complete"
            ) {
              resolve();
              script.onload = script.onreadystatechange = null;
            }
          };
          document.getElementsByTagName("head")[0].appendChild(script);
        });
      }
    }
  },
  mounted() {
    var config = extend(
      {
        vid: "5efc030de988dd2fc1b8e91b",
        container: this.$refs.vaptcha,
        style: this.vpStyle
      },
      this.$props
    );
    this.loadV2Script().then(() => {
      window.vaptcha(config).then(obj => {
        this.$emit("input", obj);
        obj.render();
      });
    });
  },
  watch: {},
  computed: {}
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
.vpat {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
}
.vaptcha-init-main {
  display: table;
  width: 100%;
  height: 100%;
  background-color: #eeeeee;
}

.vaptcha-init-loading {
  display: table-cell;
  vertical-align: middle;
  text-align: center;
}

.vaptcha-init-loading > a {
  display: inline-block;
  width: 18px;
  height: 18px;
}

.vaptcha-init-loading > a img {
  vertical-align: middle;
}
.vaptcha-init-loading .vaptcha-text {
  font-family: sans-serif;
  font-size: 12px;
  color: #cccccc;
  vertical-align: middle;
}
.rem {
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.rem1 {
  width: 320px;
  display: flex;
  justify-content: space-between;
  align-items: center
}
.rem2 {
  width: 200px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.xainge {
  height: 15px;
  width: 2px;
  background: rgb(150, 150, 150);
}
.clk {
  width: 100%;
  display: flex;
  justify-content: center;
}
.click {
  width: 320px;
  height: 40px;
  margin-top: 15px;
}
.down {
  width: 100%;
  display: flex;
  justify-content: center;

}
.down1 {
  width: 320px;
  height: 1px;
  background: rgb(150, 150, 150);
  margin-top: 30px;
}
.down2 {
  width: 320px;
  height: 40px;
  display: flex;
  align-items: center;
}
</style>