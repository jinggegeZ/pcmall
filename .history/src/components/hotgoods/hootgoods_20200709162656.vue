<template>
  <div>
    <div class="hot">
      <div class="hot_a">
        <div class="hot_b">热门商品</div>
        <div class="hot_c">
          <div class="hot_d" v-for="(item,index) in hotgoods" :key="index">
            <div class="hot_stuff">
              <div class="hot_e">
                <img :src="item.picUrl" alt />
              </div>
              <div class="hot_f">{{item.productName}}</div>
              <div class="hot_g">{{item.subTitle}}</div>
              <div class="hot_h">
                ￥{{item.salePrice}}
                <div class="hot_i">
                  <Button @click="details(index)">查看详情</Button>
                  <Button @click="gocart(index)" type="primary">加入购物车</Button>
                </div>
              </div>
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
  props: {
    hotgoods: {
      type: Array,
      default: () => {}
    }
  },
  components: {},
  data() {
    return {
      arr:''
    };
  },
  methods: {
    details(index) {
      // window.open(`/deta?item=${item}`);
      let routeData = this.$router.resolve({
        name: "deta",
        query: { id: this.hotgoods[index].productId }
      });
      window.open(routeData.href, "_blank");
    },
    gocarts(index){
      this.$api.addCart(this.hotgoods[index].productId)
      .then(res =>  {
        this.arr = res.data
        console.log(this.arr);
      }).catch(err => {})
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>