<template>
  <div>
    <div class="top">
      <div class="t-nav">
        <div class="left" @click="backhome">M</div>
        <div class="right">
          <div class="r-left">
            <div class="serach">
              <div>
                <input
                  v-model="key"
                  type="text"
                  placeholder="请输入商品信息！"
                  style="outline:none;"
                  @keyup.enter="gosearch"
                />
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
            <div class="dfl">
              <a class="top_c">
                <Icon type="md-cart" size="18" />
                <div class="top_d">
                <div class="top_e">
                <div class="tooltip-triangle"></div>
                <!-- 购物车为空 -->
                <div class="top_f">
                  <div>
                    <Icon type="ios-cart-outline" size="100" />
                    <div>您的购物车竟然是空的!</div>
                  </div>
                </div>
                <!-- 购物车不为空 -->
                <div class="top_f1">
                  <!-- 商品列表 -->
                  <div class="buy_list" v-for="(item,index) in arr" :key="index">
                    <div class="buy_list_a">
                      <div class="buy_list_b">
                        <img
                          :src="item.productImageBig"
                          alt
                        />
                      </div>
                      <div class="buy_list_c">
                        <div class="buy_list_d">{{item.productName}}</div>
                        <div class="buy_list_e">
                          <span class="buy_list_f">￥20</span>
                          <span class="buy_list_g">x1</span>
                        </div>
                      </div>
                      <div class="buy_list_d">
                        <Icon type="ios-close-circle-outline" size="20" />
                      </div>
                    </div>
                  </div>
                  <!-- 结算 -->
                  <div class="js">
                    <div>
                      <div class="js_a">共计3件商品</div>
                      <div class="js_b">
                        合计
                        <span class="js_c">￥120</span>
                      </div>
                    </div>
                    <div>
                      <Button type="primary" @click="gocarts">去购物车</Button>
                    </div>
                  </div>
                </div>
              </div>
                </div>
              </a>
              <div class="rrrr">0</div>
            </div>
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
    return {
      key: "",
      arrL:[]
    };
  },
  methods: {
    backhome() {
      this.$router.push("/");
    },
    login() {
      this.$router.push("/login");
    },
    gosearch() {
      this.$router.push({
        path: "search",
        query: { key: this.key }
      });
    },
    gocarts(){
      this.$router.push('carts')
    }
  },
  mounted() {
    this.$api.getCarts()
    .then(res => {
      this.arr = res.data
      console.log(this.arr);
    }).catch(err => {
      console.log(err);
    })
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
a {
  color: rgb(150, 150, 150);
}
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
  width: 40px;
  height: 40px;
  background: white;
  border-radius: 20px;
  color: black;
  font-size: 30px;
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
  color: #dddddd;
  display: flex;
  justify-content: center;
  align-items: center;
  display: none;
}
.top_f1 {
  width: 100%;
  background-color: white;
  border-radius: 12px;
  min-height: 280px;
  padding: 15px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  color: red;
  max-height: 500px;
  overflow: auto;
}
.rrrr {
  width: 24px;
  height: 24px;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(150, 150, 150);
  color: red;
}
.dfl {
  display: flex;
  align-items: center;
}
.buy_list {
  height: 120px;
  border-bottom: 1px solid #f0f0f0;
}
.buy_list_a {
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.buy_list_b {
  width: 80px;
  height: 80px;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  border: 1px solid #f0f0f0;
}
.buy_list_b img {
  height: 94%;
}
.buy_list_c {
  width: 60%;
}
.buy_list_d {
  color: #5079d9;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.buy_list_f {
  color: #d44d44;
}
.buy_list_g {
  color: #333;
  margin-left: 30px;
}
.buy_list_e {
  margin-top: 20px;
}
.js {
  padding: 20px;
  height: 50px;
  background: #fafafa;
  border-top: 1px solid #f0f0f0;
  border-radius: 0 0 8px 8px;
  box-shadow: inset 0 -1px 0 hsla(0, 0%, 100%, 0.5),
    0 -3px 8px rgba(0, 0, 0, 0.04);
  background: linear-gradient(#fafafa, #f5f5f5);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
}
.js_a {
  color: #666666;
}
.js_b {
  color: #777777;
}
.js_c {
  font-size: 18px;
  color: #de4037;
  font-weight: 700;
}
</style>