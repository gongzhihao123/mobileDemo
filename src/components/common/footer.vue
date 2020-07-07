<template>
  <div class="footer">
    <ul>
      <li v-for="(item, index) in footList" :key="index" @click="nav(item.path)">
        <img :src="item.path === $route.path ? footList[index].active : footList[index].img" alt="">
        <i>{{ item.name }}</i>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      footList: [
        { name: '主页', path: '/home', img: require('./../../assets/img/home.png'), active: require('./../../assets/img/home_1.png') },
        { name: '列表', path: '/list', img: require('./../../assets/img/list.png'), active: require('./../../assets/img/list_1.png') }
      ]
    }
  },
  methods: {
    nav (path) {
      this.$router.replace(path)
    }
  },
  mounted () {
    console.log(this.$route.path)
  }
}
</script>
<style lang="scss" scoped>
.footer {
  height: 60px;
  width: 100%;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  border-top: 1px solid #ccc;
  ul {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    li {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      img {
        color: #f00;
      }
      i {
        font-style: normal;
      }
    }
  }
}
</style>
