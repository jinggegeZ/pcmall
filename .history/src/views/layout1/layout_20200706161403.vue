<template>
 <div>
    <div class="box">
        <div class="top">
            <div class="t-nav">
                <div class="img">M</div>
            </div>
        </div>
        <div></div>
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
.t-nav {
    width: 1220px;
    height: 100px;
    display: flex;
    align-items: center;
}
.img {
    width: 50px;
    height: 50px;
    background: white;
    border-radius: 25px;
    color: black;
    font-size: 36px;
}
</style>