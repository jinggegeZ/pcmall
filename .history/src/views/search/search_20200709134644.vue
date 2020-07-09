<template>
  <div>
    <div class="box">
      <div class="box1">
        <div class="box2">
          <div class="top">
            <a>
              <div class="font" @click="moren">综合排序</div>
            </a>
            <a>
              <div class="font" @click="down">价格从低到高</div>
            </a>
            <a>
              <div class="font" @click="up">价格从高到低</div>
            </a>
            <div class="t-right">
              <div>
                <Input v-model="value1" size="small" placeholder="价格" style="width:60px" />
              </div>-
              <div>
                <Input v-model="value2" size="small" placeholder="价格" style="width:60px" />
              </div>
              <div>
                <Button type="primary" @click="enter">确定</Button>
              </div>
            </div>
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
      key: ""
    };
  },
  methods: {},
  mounted() {
    this.key = this.$route.query.key;
    console.log(this.key);
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
a {
  color: #666;
}
a:hover {
  color: #5079d9;
}
.box {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  background: rgb(247, 247, 247);
}
.box1 {
  width: 1220px;
  height: 800px;
  border: 1px solid #dddddd;
  box-shadow: 0 8px 16px -6px rgba(0, 0, 0, 0.1);
  background: white;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.box2 {
  width: 95%;
  height: 95%;
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
</style>