<template>
  <div class='member'>
    <el-table :data="tableData" border class="content" >
      <el-table-column prop="date" label="日期" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名"  width="180"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
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

export default {
  name:'member',
  data(){
     return{
      tableData: [
        {
          date: '2016-05-02',
          name: 'aaaa',
          address: '上海市普陀沙江路 1519 弄区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: 'dddd',
          address: '上海市普陀区金沙沙江路 1519 弄江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: 'ffff',
          address: '上海市普陀区金沙江沙江路 1519 弄路 1519 弄'
        }, {
          date: '2016-05-03',
          name: 'hhhh',
          address: '上海市普陀区沙江路 1519 弄金沙江路 1516 弄'
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
.member{
  width: 95%;
  padding: 30px ;
}

</style>