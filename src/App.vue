<template>
  <div class="container">
    <img src="./assets/images/ips-logo.svg">
  </div>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss" scoped>
img {
  margin-top: 62px;
  margin-bottom: 181px;
}
</style>
