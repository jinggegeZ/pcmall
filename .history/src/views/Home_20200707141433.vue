<template>
  <div>
    <swiper></swiper>
    <middle></middle>
    <hootgoods></hootgoods>
    <officialSelection></officialSelection>
    <aroundBrand></aroundBrand>
    <brandSelection></brandSelection>
    <foot :panelContents = panelContents></foot>
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
    return {
      list:[],
      swiper:[],
      middle:[],
      panelContents:[],

    };
  },
  methods: {
    
  },
  mounted() {
    this.$api.homeGoods()
    .then(res => {
      this.list = res.data
      this.panelContents = res.data[6].panelContents
      this.swiper = res.data[0].panelContents
      console.log(this.swiper);
      this.middle = res.data[1].panelContents
      console.log(this.middle);
      this.hotgoods = res.data[2].panelContents
      
      console.log(this.list);
    })
    .catch(err => {})
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>