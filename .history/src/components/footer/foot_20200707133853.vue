<template>
 <div>
    <div class="box">
      <div class="box1"></div>
    </div>
 </div>
</template>

<script>
 export default {
   name: '',
   props: {
     panelContents:{
       type :Array,
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
.box {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: skyblue;
}
.box1 {
  width: 1220px;
  height: 200px;
  border-radius: 15px;
  background: snow;
  display: flex;

}
</style>