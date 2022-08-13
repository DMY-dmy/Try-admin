<template>
  <div class='dashboard'>
    <div class="top">
      <Bing class="bing"></Bing>
      <Zhu class="zhu"></Zhu>      
    </div>
    <div class="bottom">
      <San class="san"></San>
      <Zhe class="zhe"></Zhe>      
    </div>

  </div>
</template>

<script>
import Zhu from '../../components/echarts/zhu.vue'
import Bing from '../../components/echarts/bing.vue'
import Zhe from '../../components/echarts/zhe.vue'
import San from '../../components/echarts/san.vue'
export default {
    name: "dashboard",
    data() {
        return {};
    },
    components: { Zhu ,Bing ,Zhe ,San},
}
</script>
<style scoped lang='scss'>
.top{
  .bing{
    position: absolute;
    padding: 10px 0 0 20px;
  }
  .zhu{
    position: absolute;
    margin-left: 600px;
    padding: 10px 20px 0 0;
  }
}
.bottom{
  position: absolute;
  margin-top: 450px;
  .zhe{
    position: absolute;
    padding: 0px 0px 0 20px;
  }
  .san{
    position: absolute;
    margin-left: 600px;
    padding: 0px 20px 0 0;
  }

}


</style>
