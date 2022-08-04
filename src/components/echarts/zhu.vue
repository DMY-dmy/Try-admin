<template>
  <div id="zhu" style="width: 500px;height:400px;"></div>
</template>

<script>
import * as echarts from 'echarts';
export default {
  name:'zhu',
  data(){
     return{}
  },
  mounted(){
    var myChart = echarts.init(document.getElementById('zhu'));
    // 指定图表的配置项和数据
    var option,
    option = {
        title: {
            text: '花束销量'
        },
        tooltip: {},
        legend: {
            data:['销量']
        },
        xAxis: {
            data: ["玫瑰","芍药","郁金香","牡丹","向日葵","兰花"]
        },
        yAxis: {},
        series: [{
            name: '销量',
            type: 'bar',
            data: [55, 20, 36, 40, 100, 60]
        }]
    };

    // 使用刚指定的配置项和数据显示图表。
    option && myChart.setOption(option);
  }
}
</script>

<style scoped lang='scss'>
</style>