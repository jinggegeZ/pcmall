<template>
  <div>
    <div class="box">
      <div class="box1">
        <div class="box2">
          <div class="left">
            <div class="img1">1</div>
            <div class="img">2</div>
            <div class="img">3</div>
            <div class="img">4</div>
            <div class="img">5</div>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
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
.box {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  background: rgb(237, 237, 237);
}
.box1 {
  width: 1220px;
  height: 600px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
}
.box2 {
  width: 1120px;
  height: 550px;
  display: flex;
  align-items: center;
}
.left {
  width: 150px;
  height: 550px;
}
.img {
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgb(150,150,150);
  margin-left: 25px;
  margin-top: 5px;
}
.img1 {
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgb(150,150,150);
  margin-left: 25px;
  margin-top: 15px;
}


</style>