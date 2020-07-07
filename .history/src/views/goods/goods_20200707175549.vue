<template>
  <div>
    <div class="box">
      <div class="box1">
        <div class="top">
          <div class="font">综合排序</div>
          <div class="font">价格从低到高</div>
          <div class="font">价格从高到低</div>
          <div class="t-right">
            <div>
              <Input v-model="value1" size="small" placeholder="价格" style="width:60px" />
            </div>-
            <div>
              <Input v-model="value2" size="small" placeholder="价格" style="width:60px" />
            </div>
            <div>
              <Button type="primary">确定</Button>
            </div>
          </div>
        </div>
        <div class="nav">
          <div class="nav1">
            <div>
              
            </div>

            <div></div>
          </div>
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
    return {
      value1: "",
      value2: "",
      currentPage: 1,
      pageSize: 20,
      arr:[]
    };
  },
  methods: {
    handleSizeChange(val) {
      this.pageSize = val;
    },
    handleCurrentChange(val) {
      this.currentPage = val;
    }
  },
  mounted() {
    this.$api.allGoods({page:1, size:10})
    .then(res => {
        this.arr = res.data
    }).catch (err => {})
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.box {
  width: 100%;
  display: flex;
  justify-content: center;
  background: rgb(247, 247, 247);
}
.box1 {
  width: 1220px;
  height: 1000px;
}
.top {
  width: 600px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 15px;
}
.t-right {
  width: 250px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
t-left {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.font {
  width: 80px;
  margin-right: 15px;
  font-size: 12px;
}
.nav {
  width: 100%;
  height: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 3px 8px -6px rgba(0, 0, 0, 0.1);
}
.nav1 {
  width: 95%;
  height: 95%;
}
</style>