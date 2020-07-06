<template>
  <div>
    <top></top>
    <navb></navb>
    <swiper></swiper>
    <middle></middle>
    <hootgoods></hootgoods>
    <officialSelection></officialSelection>
  </div>
</template>

<script>
import top from "../components/top/top";
import navb from "../components/navb/navb";
import swiper from '../components/swiper/swiper';
import middle from '../components/middle/middle';
import hootgoods from '../components/hotgoods/hootgoods'
import officialSelection from '../components/officialSelection/officialSelection'
export default {
  name: "",
  props: {},
  components: {
    top,
    navb,
    swiper,
    middle,
    hootgoods,
    officialSelection,
    
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>