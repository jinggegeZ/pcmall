<template>
  <div>
    <div class="lunbo">
      <div class="lunbo_a">
        <Carousel v-model="value1" loop>
          <CarouselItem>
            <div class="demo-carousel" v-for="(item,index) in swiper" :key="index">
              <div class="lunbo_b">
                <img class="img1" :src="item.picUrl" alt />
                <img class="img2" :src="item.picUrl2" alt />
                <img class="img3" :src="item.picUrl3" alt />
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
      default: () => {}
    }
  },
  components: {},
  data() {
    return {
      value1: 0
    };
  },
  methods: {
    click() {
      this.$router.push("/deta");
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>