<template>
  <div>
    <swiper></swiper>
    <middle></middle>
    <hootgoods></hootgoods>
    <officialSelection></officialSelection>
    <aroundBrand></aroundBrand>
    <brandSelection></brandSelection>
    <foot></foot>
  </div>
</template>

<script>
import swiper from '../components/swiper/swiper';
import middle from '../components/middle/middle';
import hootgoods from '../components/hotgoods/hootgoods'
import officialSelection from '../components/officialSelection/officialSelection'
import aroundBrand from '../components/aroundBrand/aroundBrand'
import brandSelection from '../components/brandSelection/brandSelection'
import foot from '../components/footer/foot'
export default {
  name: "",
  props: {},
  components: {
    swiper,
    middle,
    hootgoods,
    officialSelection,
    aroundBrand,
    brandSelection,
    foot,
  },
  data() {
    return {};
  },
  methods: {
    
  },
  mounted() {
    this.$api.homeGoods()
    .then(res => {
      console.log(res);
    })
    .catch(err => {})
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>