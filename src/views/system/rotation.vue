<template>
  <div class='rotation'>
    <el-table :data="tableData" border class="content" >
      <el-table-column prop="id" label="排序" width="180"></el-table-column>
      <el-table-column prop="img" label="图片"  width="180"></el-table-column>
      <el-table-column prop="date" label="时间"></el-table-column>
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
  name:'rotation',
  data(){
     return{
      tableData: [
        {
          date: '2016-05-02',
          id: '王小虎',
          img: '上海市普陀区金沙江路 1518 弄'
        }, 
        {
          date: '2016-05-02',
          id: '王小虎',
          img: '上海市普陀区金沙江路 1518 弄'
        }, 
        {
          date: '2016-05-02',
          id: '王小虎',
          img: '上海市普陀区金沙江路 1518 弄'
        }, 
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
.rotation{
  width: 95%;
  padding: 30px ;
}

</style>