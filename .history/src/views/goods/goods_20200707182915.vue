<template>
  <div>
    <div class="box">
      <div class="box1">
        <div class="top">
          <div class="font">综合排序</div>
          <div class="font" >价格从低到高</div>
          <div class="font">价格从高到低</div>
          <div class="t-right">
            <div>
              <Input v-model="value1" size="small" placeholder="价格" style="width:60px" />
            </div>-
            <div>
              <Input v-model="value2" size="small" placeholder="价格" style="width:60px" />
            </div>
            <div>
              <Button type="primary">确定</Button>
            </div>
          </div>
        </div>
        <div class="nav">
          <div class="nav1">
            <div>
              <div class="hot_c">
                <div class="hot_d" v-for="(item,index) in arr" :key="index">
                  <div class="hot_stuff">
                    <div class="hot_e">
                      <img :src="item.productImageBig" alt />
                    </div>
                    <div class="hot_f">{{item.productName}}</div>
                    <div class="hot_g">{{item.subTitle}}</div>
                    <div class="hot_h">
                      ￥{{item.salePrice}}
                      <div class="hot_i">
                        <Button>查看详情</Button>
                        <Button type="primary">加入购物车</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <swiper ref="mySwiper" :options="swiperOptions">
    <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
    <swiper-slide>Slide 4</swiper-slide>
    <swiper-slide>Slide 5</swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
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
      value1: "",
      value2: "",
      currentPage: 1,
      pageSize: 20,
      arr: [],
      swiperOptions: {
          pagination: {
            el: '.swiper-pagination'
          },
          // Some Swiper option/callback...
        }

    };
  },
  methods: {
    handleSizeChange(val) {
      this.pageSize = val;
    },
    handleCurrentChange(val) {
      this.currentPage = val;
    }
  },
  mounted() {
    this.$api
      .allGoods({ page: 1, size: 30 })
      .then(res => {
        this.arr = res.data;
        console.log(this.arr);
      })
      .catch(err => {});
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.box {
  width: 100%;
  display: flex;
  justify-content: center;
  background: rgb(247, 247, 247);
}
.box1 {
  width: 1220px;
}
.top {
  width: 600px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 15px;
}
.t-right {
  width: 250px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
t-left {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.font {
  width: 80px;
  margin-right: 15px;
  font-size: 12px;
}
.nav {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 3px 8px -6px rgba(0, 0, 0, 0.1);
}
.nav1 {
  width: 95%;
  height: 95%;
}
.hot_d{
      height: 430px;
      width: 25%;
      transition: all 0.5s;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: white;
    }
</style>