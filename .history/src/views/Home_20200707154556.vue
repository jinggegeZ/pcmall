<template>
  <div>
    <swiper :swiper = swiper></swiper>
    <middle :middle = middle></middle>
    <hootgoods :hotgoods = hotgoods></hootgoods>
    <officialSelection :officialSelection = officialSelection></officialSelection>
    <aroundBrand :aroundBrand = aroundBrand></aroundBrand>
    <brandSelection :bandSelection = bandSelection></brandSelection>
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
      hotgoods:[],
      officialSelection:[],
      aroundBrand:[],
      bandSelection:[],
      panelContents:[],

    };
  },
  methods: {
    
  },
  mounted() {
    this.$api.homeGoods()
    .then(res => {
      this.list = res.data
      this.swiper = res.data[0].panelContents
     
      this.middle = res.data[1].panelContents
      
      this.hotgoods = res.data[2].panelContents
      
      this.officialSelection = res.data[3].panelContents
      
      this.aroundBrand = res.data[4].panelContents
      console.log(this.aroundBrand);
      this.bandSelection = res.data[5].panelContents
      this.panelContents = res.data[6].panelContents
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