<template>
 <div>
    <div class="hot">
      <div class="jx">
        <div class="hot_b">商品周边</div>
        <div class="hot_c">
        <!-- 第一张 -->
        <div class="jx_b" v-for="item in aroundBrand.slice(0,1)" :key="item.id">
          <img :src="item.picUrl" alt="">
          <div class="jx_c"></div>
        </div>
        <!-- 其余的 -->
          <div class="jx_a" v-for="(item1,index1) in aroundBrand.slice(1,7)" :key="index1">
            <div class="hot_stuff">
              <div class="hot_e"><img :src="item1.picUrl" alt=""></div>
              <div class="hot_f">{{item1.productName}}</div>
              <div class="hot_g">{{item1.subTitle}}</div>
              <div class="hot_h">
              ￥{{item1.salePrice}}
              <div class="hot_i">
                  <Button @click="details(index1)">查看详情</Button>
                  <Button @click="addcart(item1)" type="primary">加入购物车</Button>
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
   name: '',
   props: {
     aroundBrand:{
       type: Array,
       default:() => {}
     }
   },
   components: {

   },
   data () {
     return {

     }
   },
   methods: {
 details(index1) {
      // window.open(`/deta?item=${item}`);
      let routeData = this.$router.resolve({
        name: "deta",
        query: {id: this.aroundBrand.slice(1,7)[index1].productId},
        
      });
      window.open(routeData.href, "_blank");

    },
    addcart(item1){
      if(localStorage.username){
        this.$api.getAddCart(item1.productId)
      .then(res =>  {
        if(res.code === 200){
          this.$Message.success(res.msg)
        }
        else{
          this.$Message.error(res.msg)
        }
      }).catch(err => {
        console.log(err);
      })
      }
      else{
        this.$Message.error('您还没有登录请先登录')
      }
    }
   },
   mounted() {

   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>