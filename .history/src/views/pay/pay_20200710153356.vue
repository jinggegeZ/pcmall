<template>
  <div class="center">
    <div class="cart">
      <!--地址-->
      <div class="cart_a">
        <div class="hot_b">收货信息</div>
        <div class="address">
          <div class="address_a">
            <!--默认地址-->
            <div class="address_b">
              <div>
                收货人: 小红
                <span>(默认地址)</span>
              </div>
              <div>收货地址: 成都</div>
              <div>手机号码: 15881056746</div>
              <Icon class="address_c" type="md-checkmark" size="24" />
              <div class="caozuo">
                <div class="caozuo_a" @click="handleRender">修改</div>
                <div>删除</div>
              </div>
            </div>
          </div>
          <!--使用新地址-->
          <div class="address_a" @click="handleRender">
            <div class="address_d">
              <div class="address_e">
                <Icon type="ios-add-circle" size="28" />
                <div>使用新地址</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--订单详情-->
      <div class="cart_a">
        <div class="hot_b">购物清单</div>
        <div>
          <table>
            <tr class="t_head">
              <td class="thing_part1">商品信息</td>
              <td>单价</td>
              <td>数量</td>
              <td>小计</td>
            </tr>
            <tr class="t_body" v-for="(item,index) in arr" :key="index">
              <td class="thing_part">
                <div class="thing">
                  <div class="thing_a">
                    <img
                      :src="item.productImageBig"
                      alt
                    />
                  </div>
                  <div>{{item.productName}}</div>
                </div>
              </td>
              <td>¥{{item.salePrice}}</td>
              <td>{{item.count}}</td>
              <td>¥{{item.count*item.salePrice|fixed}}</td>
            </tr>
            <tr class="jiesuan">
              <td colspan="4" class="jiesuan_a">
                <div class="jiesuan_z">
                  <div class="jiesuan_d">
                    <div>
                      <div>
                        应付总额：
                        <span>¥{{total}}</span>
                      </div>
                    </div>
                    <div>
                      <Button type="primary">提交订单</Button>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      single: false
    };
  },
  components: {},
  methods: {
    handleRender() {
      this.$Modal.confirm({
        render: h => {
          return h("div", [
            // 第一个参数'div'表示创建父节点div，如果要为该节点设置样式，则第二个参数应为一个object,这里不设置样式所以省略了，第三个参数[]表示创建div下的子节点
            h(
              "div",
              {
                // 创建子节点div,设置样式，创建其子节点Icon和span
                class: { "modal-title": true },
                style: {
                  display: "flex",
                  height: "42px",
                  alignItems: "center"
                },
                domProps: { innerHTML: "收货地址" }
              },
            ),
              h(
              "div",
              {
                // 创建子节点div,设置样式，创建其子节点Icon和span
                class: { "modal-title": true },
                style: {
                  display: "flex",
                  height: "42px",
                  alignItems: "center"
                },
              },
              [
                h("Input", {
                  props: {
                    value: this.value,
                    autofocus: true,
                    placeholder: "收货人"
                  },
                  on: {
                    input: val => {
                      this.value = val;
                    }
                  }
                })
              ]
            ),
            h(
              "div",
              {
                // 创建子节点div,设置样式，创建其子节点Icon和span
                class: { "modal-title": true },
                style: {
                  display: "flex",
                  height: "42px",
                  alignItems: "center"
                },
              },
              [
                h("Input", {
                  props: {
                    value: this.value,
                    autofocus: true,
                    placeholder: "收货地址"
                  },
                  on: {
                    input: val => {
                      this.value = val;
                    }
                  }
                })
              ]
            ),
             h(
              "div",
              {
                // 创建子节点div,设置样式，创建其子节点Icon和span
                class: { "modal-title": true },
                style: {
                  display: "flex",
                  height: "42px",
                  alignItems: "center"
                },
              },
              [
                h("Input", {
                  props: {
                    value: this.value,
                    autofocus: true,
                    placeholder: "联系电话"
                  },
                  on: {
                    input: val => {
                      this.value = val;
                    }
                  }
                })
              ]
            ),

          ]);
          arr:[]
        }
      });
    }
  },
  mounted() {
    this.arr = this.$route.query.msg
    console.log(this.arr);
  },
  watch: {},
  computed: {
    //总价
    total(){
      let sum = 0
      
      this.arr.map(item => {
        if (item.check) {
          sum += item.count * item.salePrice;
          
        }
      });
      return sum;
    },
    
  },
  filters:{
    fixed(val){
      return Number(val).toFixed(2)
    }
  }
};
</script>

<style scoped lang='scss'>
.center {
  background-color: #ededed;
  padding-bottom: 50px;
}
.hot_b {
  border-bottom: 1px solid #dcdcdc;
  height: 60px;
  padding-left: 20px;
  line-height: 60px;
  font-size: 16px;
  background: linear-gradient(#fbfbfb, #ececec);
}
.cart {
  display: flex;
  justify-content: center;
  padding-top: 50px;
  flex-wrap: wrap;
}
.cart_a {
  width: 76%;
  border: 1px solid #dcdcdc;
  box-shadow: 0 3px 8px -6px rgba(0, 0, 0, 0.1);
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 30px;
}
table {
  width: 100%;
  border-collapse: collapse;
}
table td {
  text-align: center;
}
.t_head {
  background: #eee;
}
.t_head td {
  height: 38px;
}
td {
  vertical-align: middle;
}
.t_body td {
  height: 140px;
}
.t_body {
  border-bottom: 1px solid #eeeeee;
}
.thing {
  width: 95%;
  display: flex;
  align-items: center;
  margin-left: 5%;
}
.thing_a {
  height: 80px;
  width: 80px;
  border-radius: 3px;
  border: 1px solid #eeeeee;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 15px;
  margin-right: 15px;
}
.thing_a img {
  height: 90%;
}
.thing_part {
  display: flex;
  width: 500px;
}
.thing_part1 {
  width: 500px;
}
.jiesuan {
  height: 90px;
  background: linear-gradient(#fdfdfd, #f9f9f9);
  border-top: 1px solid #e9e9e9;
  box-shadow: 0 -3px 8px rgba(0, 0, 0, 0.04);
}
.jiesuan td {
  height: 90px;
  padding-left: 25px;
  padding-right: 20px;
}

.jiesuan_z {
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  align-items: center;
}
.jiesuan_b {
  display: flex;
}
.jiesuan_c {
  margin-left: 30px;
  color: #777777;
}
.jiesuan_d {
  display: flex;
  align-items: center;
  width: 300px;
  justify-content: space-between;
}
.jiesuan_d span {
  color: #d44d44;
  font-size: 18px;
  font-weight: 700;
}
.jiesuan_d div {
  text-align: left !important;
}
.jiesuan_e {
  border-right: 1px solid #eeeeee;
  padding-right: 30px;
}
.jiesuan_f {
  color: #959595;
}
.address {
  padding: 20px;
  display: flex;
}
.address_a {
  width: 25%;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}
.address_b {
  width: 90%;
  height: 158px;
  border: 1px solid;
  background: white;
  border-color: #6a8fe5;
  padding: 15px;
  line-height: 28px;
  color: #626262;
  position: relative;
}
.address_c {
  position: absolute;
  right: 15px;
  top: 15px;
  color: #6a8fe5;
}
.caozuo {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-top: 1px solid #eeeeee;
  height: 0px;
  background-color: white;
  display: flex;
  visibility: hidden;
  transition: all 0.4s;
  overflow: hidden;
}
.caozuo div {
  width: 50%;
  line-height: 26px;
  text-align: center;
}
.caozuo_a {
  border-right: 1px solid #eeeeee;
}
.address_b:hover .caozuo {
  visibility: visible;
  height: 26px;
}
.caozuo div:hover {
  background-color: #f2f2f2;
}
.address_d {
  width: 90%;
  height: 158px;
  border: 1px solid #e5e5e5;
  background: #fafafa;
  padding: 15px;
  line-height: 28px;
  color: #626262;
  display: flex;
  justify-content: center;
  align-items: center;
}
.address_e {
  text-align: center;
}
.address_d:hover {
  background: #f2f2f2;
}
.ivu-modal-body div{
  text-align: center;
}
</style>
