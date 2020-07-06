<template>
  <div>
    <top></top>
    <navb></navb>
    <swiper></swiper>
    <middle></middle>
  </div>
</template>

<script>
import top from "../components/top/top";
import navb from "../components/navb/navb";
import swiper from '../components/swiper/swiper';
import middle from '../components/middle/middle'
export default {
  name: "",
  props: {},
  components: {
    top,
    navb,
    swiper,
    middle,
    
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