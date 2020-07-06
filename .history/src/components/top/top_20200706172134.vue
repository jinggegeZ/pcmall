<template>
 <div>
    <div class="top">
            <div class="t-nav">
                <div class="left" @click="backhome">M</div>
                <div class="right">
                    <div class="r-left">
                        <div class="serach">
                            <div><input type="text" placeholder="请输入商品信息！"></div>
                            <div class="icon"><Icon type="md-search" size="24" /></div>
                        </div>
                        <div class="r-font">全部商品</div>
                        <div class="r-font">捐赠</div>
                    </div>
                    <div class="r-right">
                        <div class="piaoqilai"><Icon type="ios-person-add" size="24" /></div>
                        <div class="carts">
                            <div class="piaoqilai"><Icon type="md-basket" size="24" /></div>
                            <div class="number">0</div>
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