<template>
  <div>
    <div class="top">
      <div class="t-nav">
        <div class="left" @click="backhome">M</div>
        <div class="right">
          <div class="r-left">
            <div class="serach">
              <div>
                <input type="text" placeholder="请输入商品信息！" />
              </div>
              <div class="icon">
                <Icon type="md-search" size="24" />
              </div>
            </div>
            <div class="r-font">全部商品</div>
            <div class="r-font">捐赠</div>
          </div>
          <div class="r-right">
            <div class="piaoqilai" @click="login">
              <Icon type="ios-contact" size="24" />
            </div>
            <a class="top_c">
              <Icon type="md-cart" size="18" />
              <div class="top_d">
                <div class="top_e">
                  <div class="tooltip-triangle"></div>
                  <div class="top_f">123</div>
                </div>
              </div>
            </a>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {};
  },
  methods: {
    backhome() {
      this.$router.push("/");
    },
    login() {
      this.$router.push("/login");
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
input {
  border: none;
  margin-left: 5px;
}
.top {
  width: 100%;
  height: 100px;
  background: black;
  display: flex;
  justify-content: center;
}

.t-nav {
  width: 1220px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.left {
  width: 50px;
  height: 50px;
  background: white;
  border-radius: 25px;
  color: black;
  font-size: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.number {
  width: 24px;
  height: 24px;
  background: rgb(150, 150, 150);
  border-radius: 12px;
  color: black;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.right {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.r-left {
  width: 650px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.serach {
  width: 300px;
  height: 40px;
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
}
.r-font {
  color: rgb(150, 150, 150);
  font-size: 16px;
}
.r-font:hover {
  color: white;
}
.r-right {
  width: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.carts {
  display: flex;
  justify-content: center;
}
.icon {
  margin-right: 5px;
}
.piaoqilai :hover {
  color: white;
}
.top_c {
  position: relative;
}
.top_c:hover .top_d {
  visibility: visible;
}
.top_d {
  position: absolute;
  right: 0;
  top: 0;
  z-index: 2;
  width: 360px;
  min-height: 333px;
  visibility: hidden;
}
.top_e {
  margin-top: 46px;
  position: relative;
  min-height: 300px;
}
.tooltip-triangle {
  width: 0;
  height: 0;
  border-right: 10px solid transparent;
  border-left: 10px solid transparent;
  border-bottom: 10px solid white;
  position: absolute;
  top: -20px;
  right: 20px;
  z-index: 1;
  width: 20px;
  height: 20px;
}
.top_f {
  width: 100%;
  background-color: white;
  border-radius: 12px;
  min-height: 280px;
  padding: 15px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  color: red;
}
a {}
</style>