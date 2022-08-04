<template>
<!-- 右边部分 -->
  <div class='appMain'>
    <nav-bar class="navbar"></nav-bar>
   <router-view></router-view>
  </div>
</template>

<script>
import navBar from './navBar.vue'
export default {
  name:'appMain',
  data(){
     return{}
  },
  components:{
    navBar
  }
}
</script>
<style scoped lang='scss'>
    .appMain .navbar{
        width: 100%;
        height: 60px;
    }
</style>