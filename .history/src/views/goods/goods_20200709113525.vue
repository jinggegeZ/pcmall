<template>
  <div>
    <div class="box">
      <div class="box1">
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
        <div class="nav">
          <div>
            <div class="hot_c" v-if="sort === ''">
              <div class="hot_d" v-for="(item,index) in shoplist" :key="index">
                <div class="hot_stuff">
                  <div class="hot_e">
                    <img :src="item.productImageBig" alt />
                  </div>
                  <div class="hot_f">{{item.productName}}</div>
                  <div class="hot_g">{{item.subTitle}}</div>
                  <div class="hot_h">
                    ￥{{item.salePrice}}
                    <div class="hot_i">
                      <Button @click="details(index)">查看详情</Button>
                      <Button type="primary">加入购物车</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="page">
          <Page
            :total="Number(total)"
            :page-size="pageSize"
            :page-size-opts="pageSizeGroup"
            :current="currentPage"
            @on-change="changepage"
            @on-page-size-change="changeSizePage"
            show-total
            show-elevator
            show-sizer
          />
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
      arr: [],
      shoplist: [],
      sort: "",
      total: "",
      //page
      currentPage: 1,
      //size
      pageSize: 20,
      pageSizeGroup: [8, 20, 24, 30]
    };
  },
  methods: {
    //默认请求
    moren() {
      this.$api
        .allGoods({ page: 1, size: 30 })
        .then(res => {
          this.arr = res.data;
          this.shoplist = this.arr;
          console.log(this.shoplist);
        })
        .catch(err => {});
    },
    //降序
    down() {
      this.$api
        .allGood({ page: 1, size: 30, sort: 1 })
        .then(res => {
          this.arr = res.data;
          console.log(this.arr);
          this.shoplist = this.arr;
        })
        .catch(err => {});
    },
    //升序
    up() {
      this.$api
        .allGood({ page: 1, size: 30, sort: -1 })
        .then(res => {
          this.arr = res.data;
          console.log(this.arr);
          this.shoplist = this.arr;
        })
        .catch(err => {});
    },
    //价格输入搜索
    enter() {
      this.$api
        .allG({
          page: 1,
          size: 30,
          sort: 1,
          priceGt: Number(this.value1),
          priceLte: Number(this.value2)
        })
        .then(res => {
          if (this.value1 < this.value2) {
            this.arr = res.data;
            this.total = res.total;
            this.shoplist = this.arr;
            console.log(this.shoplist);
          }
          if (this.value1 > this.value2) {
            this.$Message.error("请正确输入价格区间（由小到大）");
          }
        })
        .catch(err => {});
    },
    //改变页码
    changepage(index) {
      this.currentPage = index;
      this.resquestInfo(this.currentPage, this.pageSize);
    },
    changeSizePage(val) {
      //页面大小
      this.pageSize = val;
      this.resquestInfo(this.currentPage, this.pageSize);
    },
    //跳转详情
    details(index) {
      // window.open(`/deta?item=${item}`);
      let routeData = this.$router.resolve({
        name: "Particulars",
        query: {id: this.shoplist[index].productId},
        
      });
      window.open(routeData.href, "_blank");

    },
    //分页请求
    resquestInfo(num, size) {
      this.$api
        .allGoods({ page: num, size: size })
        .then(res => {
          this.arr = res.data;
          this.total = res.total;
          this.shoplist = this.arr;
          if (this.total < this.pageSize) {
            this.shoplist = this.arr;
          } else {
            this.arr = this.arr.slice(0, this.pageSize);
          }
        })
        .catch(err => {});
    }
  },
  //默认请求
  mounted() {
    // this.resquestInfo();
    this.$api
      .allGoods({ page: this.currentPage, size: this.pageSize })
      .then(res => {
        this.arr = res.data;
        this.total = res.total;
        this.shoplist = this.arr;
        if (this.total < this.pageSize) {
          this.shoplist = this.arr;
        } else {
          this.arr = this.arr.slice(0, this.pageSize);
        }
      })
      .catch(err => {});
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
  display: flex;
  justify-content: center;
  background: rgb(247, 247, 247);
}
.box1 {
  width: 1220px;
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
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 3px 8px -6px rgba(0, 0, 0, 0.1);
  margin-bottom: 25px;
}

.hot_d {
  height: 430px;
  width: 25%;
  transition: all 0.5s;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
}
.foot {
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
.page {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: flex-end;
  margin-left: 15px;
  align-items: center;
}
</style>