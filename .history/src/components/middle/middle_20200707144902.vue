<template>
 <div>
   <div class="four">
      <div class="four_a" v-for="(item,index) in middle" :key="index">
        <div class="four_b">
          <img :src="item.fullUrl" alt />
          <div class="four_c"></div>
        </div>
      </div>
    </div>
 </div>
</template>

<script>
 export default {
   name: '',
   props: {
     middle:{
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