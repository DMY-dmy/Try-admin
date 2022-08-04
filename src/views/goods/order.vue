<template>
  <div class='order'>
    <el-table :data="tableData" border class="content" >
      <el-table-column prop="name" label="用户名"></el-table-column>
      <el-table-column prop="id" label="订单号" width="180"></el-table-column>
      <el-table-column prop="order" label="订单规则"  width="180"></el-table-column>
      <el-table-column prop="price" label="价格"></el-table-column>
      <el-table-column prop="payData" label="支付时间">                
        <!-- <template slot-scope="scope">
          <span>{{scope.row.payTime | formData}}</span>
          {{formData(scope.row.payTime)}}
        </template> -->
      </el-table-column>
      <el-table-column prop="data" label="创建时间">
        <!-- <template slot-scope="scope">
          <span>{{scope.row.time | formData}}</span>
          {{formData(scope.row.time)}}
        </template> -->
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
// import dateFormat2 from '../../utils/utils.js'
export default {
  name:'order',
  data(){
     return{
      tableData: [
        { 
          name:'小屋',
          id: 'X3345679286968',
          order: '郁金香',
          price: 30.0,
          payData:'2022-07-22',
          data:'2022-07-21',
        }, 
        { 
          name:'讷讷',
          id: 'X3345679286968',
          order: '牡丹',
          price: 30.0,
          payData:'2022-07-22',
          data:'2022-07-22',
        }, 
        { 
          name:'uu',
          id: 'X3345679286968',
          order: '郁金香',
          price: 30.0,
          payData:'2022-07-22',
          data:'2022-07-22',
        }, 
        { 
          name:'窝窝', 
          id: 'X3345679286968',
          order: '玫瑰',
          price: 30.0,
          payData:'2022-07-22',
          data:'2022-07-22',
        }, 
        { 
          name:'微微',
          id: 'X3345679286968',
          order: '芍药',
          price: 30.0,
          payData:'2022-07-22',
          data:'2022-07-22',
        }, 
      ]
     }
  },
  // filters:{
  //     // 兑换时间的转化
  //     formData(value){
  //         return dateFormat2(value)
  //     },
  // },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    // 兑换时间的转化
    // formData(value){
    //   return dateFormat2(value)
    // },
  }
}
</script>
<style scoped lang='scss'>
.order{
  width: 95%;
  padding: 30px ;
}

</style>