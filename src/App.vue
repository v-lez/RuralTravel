<template>
  <div id="app">
    <!-- <button @click="homeClick">首页</button>
    <button @click="cityClick">城市</button>
    <button @click="detailClick">详情</button> -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    homeClick () {
      this.$router.replace('/home')
    },
    cityClick () {
      this.$router.replace('/city')
    },
    detailClick () {
      this.$router.replace('/detail')
    }
  }
}
</script>

<style>

</style>
