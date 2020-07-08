<template>
  <div>
    <div class="lunbo">
      <div class="lunbo_a">
        <Carousel v-model="value1" loop>
          <CarouselItem  v-for="item in swiper" :key="item.id">
            <div class="demo-carousel">
              <div class="lunbo_b">
                <img class="img1" :src="item.picUrl" alt @click="details(item)" />
                <img class="img2" :src="item.picUrl2" alt @click="details(item)" />
                <img class="img3" :src="item.picUrl3" alt @click="details(item)" />
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
  name: "",
  props: {
    swiper:{
      type:Array,
      default: () => []
    }
  },
  components: {},
  data() {
    return {
      value1: 0
    };
  },
  methods: {
    details(item){
      this.$router.push({
        path:'deta',
        query:{item: item}
      })
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>