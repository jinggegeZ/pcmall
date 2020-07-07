<template>
 <div>
  <div class="box">
    <div class="box1">
      <div class="box2">
        <div class="left">
          <div></div>
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
}
.box1 {
  width: 1220px;
  height: 580px;
  border-radius: 15px;
  background: skyblue;
  display: flex;
  justify-content: center;
  align-items: center;
}
.box2 {
  width: 1100px;
  height: 440px;
  background: chartreuse;
}
</style>