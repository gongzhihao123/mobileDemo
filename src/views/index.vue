<template>
  <div class="index">
    <!-- <p class="hello" @click="getApi">Hello</p> -->
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from './../components/common/footer'
import { apiTest, apiList } from '@/services/api/index'

export default {
  name: 'index',
  components: {
    Footer
  },
  methods: {
    getApi () {
      apiTest()
        .then((res) => {
          console.log('sd', res)
        })
    },
    getList () {
      apiList({
        pageNo: 1,
        pageSize: 10,
        applyState: 1
      })
        .then((res) => {
          console.log('sss', res)
        })
    }
  },
  mounted () {
  }
}
</script>

<style lang="scss">
.index {
  height: 100%;
  .hello{
    font-size: 18px;
    color:red;
  }
}

</style>
