<template>
 <div>
    <div class="lunbo">
      <div class="lunbo_a">
        <Carousel v-model="value1" loop>
          <CarouselItem>
            <div class="demo-carousel">
              <div class="lunbo_b">
                <img class="img1" src="https://i.loli.net/2019/09/30/CAZ6QrXPBoh5aIT.png" alt />
                <img class="img2" src="https://i.loli.net/2019/09/30/9Y5MHc8sfhJLk3u.png" alt />
                <img class="img3" src="https://i.loli.net/2019/09/30/lLv8xp3IWqa7Oz6.png" alt />
              </div>
            </div>
          </CarouselItem>
        </Carousel>
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
     click(){
       this.$router.push('/deta')
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