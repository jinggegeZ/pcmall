<template>
 <div>
    <div class="hot">
      <div class="jx">
        <div class="hot_b">商品周边</div>
        <div class="hot_c">
        <!-- 第一张 -->
        <div class="jx_b" v-for="(item,index) in brandSelection.slice(0,1)" :key="index">
          <img :src="item.picUrl" alt="">
          <div class="jx_c"></div>
        </div>
        <!-- 其余的 -->
          <div class="jx_a" v-for="(item1,index1) in brandSelection.slice(1,7)" :key="index1">
            <div class="hot_stuff">
              <div class="hot_e"><img :src="item1.picUrl" alt=""></div>
              <div class="hot_f">{{item1.productName}}</div>
              <div class="hot_g">{{item1.subTitle}}</div>
              <div class="hot_h">
              ￥{{item1.salePrice}}
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
     brandSelection:{
       type:Array,
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