<template>
 <div>
    <div class="box">
        <div class="box1">
            <div class="top">  
            <div>综合排序</div>
            <div>价格从低到高</div>
            <div>价格从高到低</div>
            <div></div>
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
.box {
    width: 100%;
    display: flex;
    justify-content: center;
    background: rgb(247,247,247);
}
.box1 {
    width: 1220px;
    height: 800px;
}
.top {
    height: 50px;
    display: flex;
    align-items: center;
}
</style>