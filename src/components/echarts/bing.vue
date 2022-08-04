<template>
  <div id='bing' style="width: 500px;height: 400px;"></div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  name:'bing',
  data(){
     return{}
  },
  mounted(){
    let Chart = echarts.init(document.getElementById('bing'))
    var option,
    option = {    
            series : [
                {
                  name: '访问来源',
                  type: 'pie',
                  radius: '55%',
                  roseType: 'angle',
                  data:[
                    {value:235, name:'郁金香'},
                    {value:274, name:'玫瑰'},
                    {value:310, name:'向日葵'},
                    {value:335, name:'芍药'},
                    {value:400, name:'牡丹'}
                  ]
                }
            ]
        };
    option && Chart.setOption(option)
  }
}
</script>
<style scoped lang='scss'>
</style>