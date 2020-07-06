<template>
 <div>
    <div class="box">
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
        <div class="nav">
            <div class="t-nav1">
                <div class="dian"></div>
                <div>首页</div>
                <div class="dian"></div>
                <div>全部</div>
                <div class="dian"></div>
                <div>品牌周边</div>
                <div class="dian"></div>
                <div>捐赠名单</div>
                <div class="dian"></div>
                <div>后台管理系统</div>
                <div class="dian"></div>
                <div>Xpay支付系统</div>
                <div class="dian"></div>
                <div>Xboot开发平台</div>
                <div class="dian"></div>
                <div>宣传视频</div>
                <div class="dian"></div>
                <div>Github</div>
                <div class="dian"></div>
                <div>商户授权</div>
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
input {
    border: none;
    margin-left: 5px;
}
.box {
    width: 100%;
}
.top {
    width: 100%; 
    height: 100px;
    background: black;
    display: flex;
    justify-content: center;
}
.nav {
    width: 100%; 
    height: 100px;
    display: flex;
    justify-content: center;
    box-shadow: 0 1px 2px 0 #ddd;

}
.t-nav {
    width: 1220px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.t-nav1 {
    width: 1220px;
    height: 100px;
    display: flex;
    align-items: center;
}
.left {
    width: 50px;
    height: 50px;
    background: white;
    border-radius: 25px;
    color: black;
    font-size: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.number{
    width: 24px;
    height: 24px;
    background: rgb(150,150,150);
    border-radius: 12px;
    color: black;
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.right {
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.r-left{
    width: 650px;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.serach {
    width: 300px;
    height: 40px;
    background: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px;
}
.r-font {
    color: rgb(150,150,150);
    font-size: 16px;
}
.r-font:hover {
    color: white;
}
.r-right {
    width: 120px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.carts {
    display: flex;
    justify-content: center;
}
.icon {
    margin-right: 5px;
}
.piaoqilai :hover {
    color: white;
}
.dian {
    width: 2px;
    height: 2px;
    border-radius: 1px;
    background: rgb(150,150,150);
}
</style>