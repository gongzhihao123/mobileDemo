<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

export default {
  data () {
    return {}
  }
}
</script>

<style lang="scss">
#app {
  height: 100%;
  margin-bottom: 60px;
}
*{
  touch-action: pan-y;
}
</style>
