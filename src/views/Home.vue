<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div class="test">
        <p class="hello" @click="getApi">Hello</p>
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { apiTest, apiList } from '@/services/api/index'

export default {
  name: 'Home',
  components: {
    HelloWorld
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
    this.getApi()
    this.getList()
  }
}
</script>

<style>
  /* rootValue: 75 */
  .test{
    width:320px;
    height:160px;
    background-color: bisque;
    text-align: center；
}
.hello{
    color:red;
}
</style>
