<template>
  <div id='home'>
    <nav-bar class="home-nav">
      <div slot="left">
        <i class="el-icon-arrow-left"></i>
      </div>
      <div slot="center">
        <el-input placeholder="请输入内容"
                  prefix-icon="el-icon-search"
                  v-model="input">
        </el-input>
      </div>
      <div slot="right">
        <el-select v-model="value"
                   placeholder="上海">
          <el-option v-for="item in options"
                     :key="item.value"
                     :label="item.label"
                     :value="item.value">
          </el-option>
        </el-select>
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
  },
  data () {
    return {
      input: '',
      options: [{
        value: 1,
        label: '上海'
      }, {
        value: 2,
        label: '北京'
      }, {
        value: 3,
        label: '广州'
      }, {
        value: 4,
        label: '深圳'
      }, {
        value: 5,
        label: '杭州'
      }],
      value: ''
    }
  }
}
</script>

<style scoped>
</style>
