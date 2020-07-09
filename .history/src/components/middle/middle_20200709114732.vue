<template>
 <div>
   <div class="four">
      <div class="four_a" >
        <div class="four_b" @click="details(index)" v-for="(item,index) in middle" :key="index">
          <img :src="item.picUrl" alt />
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
     details(item){
      this.$router.push({
        path:'deta',
        query:{item: item}
      })
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

</style>