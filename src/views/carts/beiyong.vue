<template>
  <div class="allbox">
    <div v-if="userInfo">
      <div class="cart">购物车</div>
      <div>
      <div v-if="shopList">
        <div class="chose">
          <div v-if="checkAll===false">
            <van-checkbox v-model="checkAll" @click="checkedAll">全选</van-checkbox>
          </div>
          <div v-else-if="checkAll===true">
            <van-checkbox v-model="checkAll" @click="checkedAll">取消全选</van-checkbox>
          </div>
          <div class="total">
            <div>
              合计：
              <span class="all">{{total | fixed}}</span>
            </div>
            <div class="confirm">请确认订单</div>
          </div>
        </div>
        <div class="van-btn">
          <van-button class="btn" @click="del" color="#e6057f">删除</van-button>
          <van-button @click="Goto" color="#e6057f">去结算</van-button>
        </div>
        <div class="item">
          <div v-for="item in shopList" :key="item.id">
            <div class="detail">
              <div>
                <van-checkbox @click="check(item)" v-model="item.check" />
              </div>
              <img :src="item.image_path" alt class="img" />
              <div class="name">
                <div>{{item.name}}</div>
                <div class="flex-j-sb">
                  <div>￥{{item.mallPrice}}</div>
                  <van-stepper
                    v-model="item.count"
                    @change="add(item)"
                    theme="round"
                    button-size="22"
                    disable-inpu
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <div class="cart-item1">
          <van-icon name="shopping-cart" class="cart-item2" />
        </div>
        <div class="cart-item3">你的购物车还是空的</div>
        <div class="cart-item3" @click="buyShop">
          <div class="cart-item4">去购物</div>
        </div>
      </div>
      </div>
    </div>
    <div v-else>
        <van-empty description="您需要登录后使用哦" />
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
      checkAll: false,
      shopList: [],
      arr: [],
      ass: [],
      flags: "1",
      userInfo:{}
    };
  },
  methods: {
    getData() {
      this.$api
        .Card()
        .then(res => {
          this.shopList = res.shopList;
          localStorage.setItem("length", this.shopList.length);
          this.$store.commit("setShopList", res.shopList);
        })
        .catch(err => {});
    },
    // 全选
    checkedAll() {
      this.shopList.map(item => {
        item.check = this.checkAll;
      });
    },
    //    是否全选
    check(item) {
      this.checkAll = this.shopList.every(item => {
        return item.check === true;
      });
    },
    //  修改数量
    add(item) {
      this.$api
        .editCart({
          count: item.count,
          id: item.cid,
          mallPrice: item.mallPrice
        })
        .then(res => {})
        .catch(err => {});
    },
    // 删除
    del() {
      this.ass = this.shopList.filter(item => {
        return item.check === true;
      });
      if (this.ass.length > 0) {
        this.$dialog
          .confirm({
            title: "提示",
            message: "您确定要删除吗？"
          })
          .then(() => {
            this.ass.map(item => {
              this.arr.push(item.cid);
            });
            this.$api
              .deleteShop(this.arr)
              .then(res => {
                this.$toast.success("删除成功");
                this.getData();
              })
              .catch(err => {});
          })
          .catch(() => {});
      } else {
        this.$toast({
          message: "你还没有选择要删除的内容",
          icon: "warning-o"
        });
      }
    },
    buyShop() {
      this.$router.push("/");
    },
    // 结算页面
    Goto() {
      this.shopList = this.shopList.filter(item => {
        return item.check === true;
      });
      if (this.shopList.length > 0) {
        this.$router.push({
          path: "/Settlement",
          query: {
            flags: this.flags,
            total: this.total,
            shopList: JSON.stringify(this.shopList)
          }
        });
        localStorage.setItem("shopList", JSON.stringify(this.shopList));
      } else {
        this.$toast.fail("没有要结算的商品");
      }
    }
  },
  mounted() {
    this.getData();
    this.$api.queryUser()
    .then(res => {
      this.userInfo = res.userInfo
    })
    .catch(err => {})
  },
  watch: {},
  computed: {
    // 定义总价
    total() {
      let sum = 0;
      this.shopList.map(item => {
        if (item.check) {
          sum += item.mallPrice * item.count;
        }
      });
      return sum;
    }
  },
  filters: {
    fixed(val) {
      return "￥" + Number(val).toFixed(2);
    }
  }
};
</script>

<style scoped lang='scss'>
.allbox {
  background: white;
}
.cart {
  font-size: 18px;
  text-align: center;
  padding: 10px 0;
  font-weight: 500;
  border-bottom: 1px solid #eee;
}
.chose {
  padding: 10px;
  border-bottom: 1px solid #eee;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.total {
  width: 140px;
  font-size: 14px;
}
.all {
  color: red;
}
.confirm {
  margin-top: 5px;
}
.van-btn {
  display: flex;
  justify-content: flex-end;
  padding: 0 10px;
}
.btn {
  margin-right: 10px;
}
.item {
  margin-top: 10px;
}
.detail {
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #eeeeee;
}
.img {
  width: 25%;
  margin: 0 10px;
  border: 1px solid #eeeeee;
}
.name {
  font-size: 15px;
  width: 100%;
  color: red;
}
.flex-j-sb {
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.cart-item1 {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 30px;
  color: red;
}
.cart-item2 {
  font-size: 100px;
  background: rgba(216, 208, 208, 0.2);
  width: 140px;
  height: 140px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.cart-item3 {
  font-size: 20px;
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #cccccc;
}
.cart-item4 {
  border: 1px solid #000;
  border-radius: 10px;
  padding: 10px 20px;
}

</style>
