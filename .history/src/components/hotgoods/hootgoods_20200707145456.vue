<template>
 <div>
    <div class="hot">
      <div class="hot_a">
        <div class="hot_b">热门商品</div>
        <div class="hot_c">
          <div class="hot_d">
            <div class="hot_stuff">
              <div class="hot_e"><img src="https://i.loli.net/2018/07/13/5b48a7f468bf2.png" alt=""></div>
              <div class="hot_f">支付测试商品 IPhone X 全面屏 全面绽放</div>
              <div class="hot_g">此仅为支付测试商品 拍下不会发货</div>
              <div class="hot_h">
              ￥1.00
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
</template>

<script>
 export default {
   name: '',
   props: {
     hotgoods:{
      type:Array,
      default: () => {}
    }
   },
   components: {

   },
   data () {
     return {

     }
   },
   methods: {

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