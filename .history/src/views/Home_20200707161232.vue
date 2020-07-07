<template>
  <div>
    <swiper v-if="swiper.length > 1 " :swiper="swiper"></swiper>
    <middle v-if="middle.length > 1 " :middle="middle"></middle>
    <hootgoods v-if="hotgoods.length > 1 " :hotgoods="hotgoods"></hootgoods>
    <officialSelection v-if="officialSelection.length > 1 " :officialSelection="officialSelection"></officialSelection>
    <aroundBrand v-if="aroundBrand.length > 1 " :aroundBrand="aroundBrand"></aroundBrand>
    <brandSelection v-if="bandSelections.length > 0 " :bandSelections="bandSelections"></brandSelection>
    <foot v-if="panelContents.length > 1 " :panelContents="panelContents"></foot>
  </div>
</template>

<script>
import swiper from "../components/swiper/swiper";
import middle from "../components/middle/middle";
import hootgoods from "../components/hotgoods/hootgoods";
import officialSelection from "../components/officialSelection/officialSelection";
import aroundBrand from "../components/aroundBrand/aroundBrand";
import brandSelection from "../components/brandSelection/brandSelection";
import foot from "../components/footer/foot";
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
    foot
  },
  data() {
    return {
      list: [],
      swiper: [],
      middle: [],
      hotgoods: [],
      officialSelection: [],
      aroundBrand: [],
      bandSelections: [],
      panelContents: []
    };
  },
  methods: {},
  mounted() {
    this.$api.homeGoods()
      .then(res => {
        this.list = res.data;
        this.swiper = res.data[0].panelContents;
        console.groupEnd(this.swiper);
        this.middle = res.data[1].panelContents;
        this.hotgoods = res.data[2].panelContents;
        this.officialSelection = res.data[3].panelContents;
        this.aroundBrand = res.data[4].panelContents;
        this.bandSelections = res.data[5].panelContents;
        this.panelContents = res.data[6].panelContents;
        console.log(res.data[5].panelContents);
      })
      .catch(err => {});
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>