<template>
  <div class="center">
    <div class="center_a">
      <!-- 商品 -->
      <div class="goods">
        <!-- 轮播 -->
        <div class="goods_a"><img :src="item.productImageBig" alt="" width="300px"></div>
        <!-- 操作 -->
        <div class="stuff">
          <div class="stuff_1">
            <div class="stuff_a">{{item.productName}}</div>
            <div class="stuff_d">
              <span class="stuff_b">此仅为支付测试商品 拍下不会发货</span>
              <span class="stuff_c">¥{{item.salePrice}}.00</span>
            </div>
          </div>
          <div class="stuff_2">
            数量
            <div class="stuff_e">加减数量</div>
          </div>
          <div class="stuff_3">
            <Button type="primary" :size="buttonSize">加入购物车</Button>
            <Button :size="buttonSize">现在购买</Button>
          </div>
        </div>
      </div>
      <!-- 商品详情 -->
      <div class="detail">
        <div class="hot_b">官方精选</div>
        <div>商品详情</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      buttonSize: 'large',
      item:{}
    };
  },
  components: {},
  methods: {},
  mounted() {
    this.item = this.$route.query.item
    console.log(this.item);
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.center {
  background-color: #ededed;
  padding-bottom: 50px;
  display: flex;
  justify-content: center;
}
.center_a {
  width: 76%;
}
.goods {
  background: #fff;
  border-radius: 8px;
  border: 1px solid #dcdcdc;
  border-color: rgba(0, 0, 0, 0.14);
  box-shadow: 0 3px 8px -6px rgba(0, 0, 0, 0.1);
  padding: 60px;
  margin: 20px 0;
  height: 442px;
  display: flex;
  justify-content: space-between;
}
.goods_a {
  width: 50%;
  height: 100%;
}
.stuff {
  width: 50%;
  height: 100%;
}
.stuff_a {
  font-size: 24px;
  margin-bottom: 13px;
}
.stuff_b {
  color: #bdbdbd;
}
.stuff_c {
  color: #d44d44;
  font-weight: 700;
  font-size: 16px;
}
.stuff_d {
  display: flex;
  justify-content: space-between;
}
.stuff_1 {
  padding: 8px 8px 18px 10px;
}
.stuff_2 {
  padding: 29px 0 8px 10px;
  border-top: 1px solid #ebebeb;
  display: flex;
  align-items: center;
}
.stuff_e {
  margin-left: 30px;
}
.stuff_3 {
  border-top: 1px solid #ebebeb;
  padding: 30px 0 0 10px;
}
.stuff_3 button{
  margin-right: 20px;
}
.detail {
  background: #fff;
  border-radius: 8px;
  border: 1px solid #dcdcdc;
  border-color: rgba(0, 0, 0, 0.14);
  box-shadow: 0 3px 8px -6px rgba(0, 0, 0, 0.1);
  margin: 20px 0;
}
.hot_b {
  border-bottom: 1px solid #dcdcdc;
  height: 60px;
  padding-left: 20px;
  line-height: 60px;
  font-size: 16px;
  background: linear-gradient(#fbfbfb, #ececec);
}
</style>