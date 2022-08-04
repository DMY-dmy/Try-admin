vue
<template>
  <div id="san" style="width: 500px;height:300px;"></div>
</template>

<script>
import * as echarts from 'echarts';
export default {
  name:'san',
  data(){
     return{}
  },
  mounted(){
    var ehart = echarts.init(document.getElementById('san'));
    // 指定图表的配置项和数据
    var option,
    option = {
        xAxis: {
            data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
        },
        yAxis: {},
        series: [
            {
            type: 'scatter',
            data: [220, 182, 191, 234, 290, 330, 310]
            }
        ]
    };
    // 使用刚指定的配置项和数据显示图表。
    option && ehart.setOption(option);
  }
}
</script>

<style scoped lang='scss'>
</style>