<template>
  <div>
    <div class="box">
      <div class="box1">
        <div
          class="box2"
          v-for="(item,index) in panelContents.slice(1,4)"
          :key="index"
          @click="details"
        >
          <div class="img">
            <img :src="item.picUrl" alt height="200px" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    panelContents: {
      type: Array,
      default: () => {}
    }
  },
  components: {},
  data() {
    return {
      productId: ""
    };
  },
  methods: {
    details() {
      this.$router.push({
        path: "deta",
        query: {productId : productId}
      });
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.box {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.box1 {
  width: 1220px;
  height: 200px;
  border-radius: 15px;
  background: snow;
  display: flex;
  box-shadow: 0 8px 16px 0 #ddd;
}
.img {
  width: 406px;
  height: 200px;
}
.img:hover {
  box-shadow: inset 0 0 38px rgba(0, 0, 0, 0.08);
  transition: all 0.15s ease;
}
</style>