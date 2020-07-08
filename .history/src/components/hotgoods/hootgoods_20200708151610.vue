<template>
 <div>
    <div class="hot">
      <div class="hot_a">
        <div class="hot_b">热门商品</div>
        <div class="hot_c" >
          <div class="hot_d" v-for="(item,index) in hotgoods" :key="index">
            <div class="hot_stuff">
              <div class="hot_e"><img :src="item.picUrl" alt=""></div>
              <div class="hot_f">{{item.productName}}</div>
              <div class="hot_g">{{item.subTitle}}</div>
              <div class="hot_h">
              ￥{{item.salePrice}}
              <div class="hot_i">
                  <Button  >查看详情</Button>
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