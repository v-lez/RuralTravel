<template>
  <div id='home'>
    <nav-bar class="home-nav">
      <div slot="left">$lt;</div>
      <div slot="center"><input type="text" placeholder="输入城市/景点/游玩主题"></div>
      <div slot="right">
        <select name="" id="">
          <option value="上海">上海</option>
        </select>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar'

export default {
  name: 'Home',
  components: {
    NavBar
  }
}
</script>

<style scoped>

</style>
