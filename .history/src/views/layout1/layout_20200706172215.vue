<template>
 <div>
    <div class="box">
        <div><top></top></div>
        
        <div class="nav">
            <div class="t-nav1">
                <div class="dian"></div>
                <div class="t-font">首页</div>
                <div class="dian"></div>
                <div class="t-font">全部</div>
                <div class="dian"></div>
                <div class="t-font">品牌周边</div>
                <div class="dian"></div>
                <div class="t-font">捐赠名单</div>
                <div class="dian"></div>
                <div class="t-font">后台管理系统</div>
                <div class="dian"></div>
                <div class="t-font">Xpay支付系统</div>
                <div class="dian"></div>
                <div class="t-font">Xboot开发平台</div>
                <div class="dian"></div>
                <div class="t-font">宣传视频</div>
                <div class="dian"></div>
                <div class="t-font">Github</div>
                <div class="dian"></div>
                <div class="t-font">商户授权</div>
            </div>
        </div>
        <div><router-view></router-view></div>
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
       backhome(){
           this.$router.push('/')
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

.dian {
    width: 2px;
    height: 2px;
    border-radius: 1px;
    background: rgb(150,150,150);
    margin-left: 10px;
    margin-right: 10px;
}
.t-font:hover {
    color: blue;
}
</style>