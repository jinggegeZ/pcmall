<template>
 <div>
  <div class="box">
    <div class="box1">
      <div class="box2">
        <div class="left">
          <div class="img">1</div>
          <div></div>
          <div></div>
          <div></div>
      </div>
      <div></div>
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
  height: 100%;
  display: flex;
  justify-content: center;
  background: rgb(237,237,237);
}
.box1 {
  width: 1220px;
  height: 600px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
}
.box2 {
  width: 1100px;
  height: 500px;
  background: chartreuse;
  display: flex;
}
.left {
  width: 200px;
  height: 500px;

}
.img {
  width: 150px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>