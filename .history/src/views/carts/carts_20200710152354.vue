<template>
  <div class="center">
    <div class="cart">
      <div class="cart_a">
        <div class="hot_b">购物清单</div>
        <div>
          <table>
            <tr class="t_head">
              <td class="thing_part1">商品信息</td>
              <td>单价</td>
              <td>数量</td>
              <td>小计</td>
              <td>操作</td>
            </tr>
            <tr class="t_body" v-for="(item,index) in arr" :key="index">
              <td class="thing_part">
                <div class="thing">
                  <Checkbox @on-change="checkAllGroupChange(item)" v-model="item.check"></Checkbox>
                  <div class="thing_a">
                    <img :src="item.productImageBig" alt />
                  </div>
                  <div>{{item.productName}}</div>
                </div>
              </td>
              <td>￥{{item.salePrice}}</td>
              <td class="td">
                <div class="jian" @click="jian(item)">-</div>
                <div v-if="item.count >= 1">{{item.count}}</div>
                <div v-else>1</div>
                <div class="add" @click="add(item)">+</div>
              </td>
              <td>¥{{item.count*item.salePrice|fixed}}</td>
              <td>
                <Icon type="ios-close-circle-outline" size="24" @click="del(item)" />
              </td>
            </tr>
            <tr class="jiesuan">
              <td colspan="5" class="jiesuan_a">
                <div class="jiesuan_z">
                  <div class="jiesuan_b">
                    <div v-if="checkAll===false">
                      <Checkbox :value="checkAll" @click.prevent.native="checkedAll">全选</Checkbox>
                    </div>
                    <div v-else-if="checkAll===true">
                      <Checkbox :value="checkAll" @click.prevent.native="checkedAll">取消全选</Checkbox>
                    </div>
                    
                  </div>
                  <div class="jiesuan_d">
                    <div class="jiesuan_e">
                      <div>
                        已选择
                        <span>{{counts}}</span> 件商品
                      </div>
                      <div class="jiesuan_f">共计{{Count}}件商品</div>
                    </div>
                    <div>
                      <div>
                        应付总额：
                        <span>￥{{total}}</span>
                      </div>
                      <div class="jiesuan_f">应付总额不含运费</div>
                    </div>
                    <div>
                      <Button type="primary" @click="gopay()">现在结算</Button>
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
      arr: [],
      checkAll: false,
      ass: []
    };
  },
  components: {},
  methods: {
    // 全选
    checkedAll() {
      this.checkAll = !this.checkAll
      this.arr.map(item => {
        item.check = this.checkAll;
      });
    },
    //    是否全选
    checkAllGroupChange(item) {
      this.checkAll = this.arr.every(item => {
        return item.check === true;
      });
    },
    //获取购物车数据
    gogetcart() {
      this.$api
        .getCarts()
        .then(res => {
          this.arr = res.data;
          console.log(this.arr);
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 删除
    del(item) {
      this.ass = this.arr.filter(item => {
        return item.check === true;
      });
      if (this.ass.length > 0) {
        this.ass.map(item => {
          this.arr.push(item._id);
        });
        this.$api
          .delCart(item._id)
          .then(res => {
            this.$Message.success("删除成功");
            this.gogetcart();
          })
          .catch(err => {});
      } else {
        this.$Message.error("您还没有选择删除的商品");
      }
    },
    //add增加按钮
    add(item){
      item.count ++
      this.$api.editCart({productId: item.productId, count: item.count })
      .then(res => {
        console.log(res);
      }).catch(err => {})
    },
    jian(item){
      item.count --
      this.$api.editCart({productId: item.productId, count: item.count })
      .then(res => {
        console.log(res);
      }).catch(err => {})
    },
    gopay(){
      this.msg = this.arr.filter(item => {
        return item.check === true
      })
      if(this.msg.length >0 ){
        this.$router.push({path:'pay',query:{msg: this.msg}})
      }
      else{
        this.$Message.error('您还没有选择商品，请选择')
      }
    }
    
  },
  mounted() {
    this.gogetcart();
  },
  watch: {},
  computed: {
    //小计
    totals() {
      let sum = 0;
      
      this.arr.map(item => {
        if (item.check) {
          sum += item.salePrice * item.count;
          
        }
      });
      return sum;
    },
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
    //小计
    counts(){
      let sun = 0;
      this.arr.filter(item => {
        return item.check === true
      }).map(item => {
        sun += item.count
      })
      return sun
    },
    //共计
    Count(){
      let sun = 0;
      this.arr.map(item => {
        sun += item.count
      })
      return sun
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
}
.cart_a {
  width: 76%;
  border: 1px solid #dcdcdc;
  box-shadow: 0 3px 8px -6px rgba(0, 0, 0, 0.1);
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
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
.td {
  display: flex;
  height: 30px;
  align-items: center;
  justify-content: space-around;
}
.t_body td {
  height: 140px;
}
.t_body {
  border-bottom: 1px solid #eeeeee;
}
.jian{
  width: 20px;
  height: 20px;
  border-radius: 10px;
  border: 1px solid #dddddd;
  background: white;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.add{
  width: 20px;
  height: 20px;
  border-radius: 10px;
  border: 1px solid #dddddd;
  background: white;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.add:hover{
  width: 30px;
  height: 30px;
  border-radius: 15px;
  border: 1px solid #dddddd;
  background: white;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 15;
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
  justify-content: space-between;
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
  width: 400px;
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
</style>
