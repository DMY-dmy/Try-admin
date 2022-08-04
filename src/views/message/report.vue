<template>
  <div class='report'>
    <el-table :data="tableData" border class="content" >
      <el-table-column prop="date" label="日期" width="180"></el-table-column>
      <el-table-column prop="name" label="用户名"  width="180"></el-table-column>
      <el-table-column prop="mess" label="举报内容"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">同意</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>

export default {
  name:'report',
  data(){
     return{
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          mess: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          mess: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          mess: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          mess: '上海市普陀区金沙江路 1516 弄'
        }
      ]
     }
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  }
}
</script>
<style scoped lang='scss'>
.report{
  width: 95%;
  padding: 30px ;
}

</style>