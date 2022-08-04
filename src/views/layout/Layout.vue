<template>
  <div class='layout'>
    <navMenu class="navmenu"></navMenu>
    <appMain class="appmain"></appMain>
  </div>
</template>

<script>
import  navMenu from './components/navMenu.vue'
import  appMain  from './components/appMain.vue'
export default {
  name:'Layout',
  data(){
     return{}
  },
  components:{
    navMenu, 
    appMain
  }
}
</script>
<style scoped lang='scss'>
.layout{
  width: 100%;
  height: 820px;
  // background-color: rebeccapurple;
  .navmenu{
    width: 17%;
    height: 100%;
    // background-color: antiquewhite;
    float: left;
  }
  .appmain{
    width: 83%;
    height: 100%;
    // background-color: aqua;
    float: right;
  }

}
</style>
