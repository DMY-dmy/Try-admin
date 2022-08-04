<template>
  <div class='authority'>
    <el-table :data="tableData" border class="content" >
      <el-table-column prop="name" label="名称" width="180"></el-table-column>
      <el-table-column prop="route" label="路由"  width="180"></el-table-column>
      <el-table-column prop="source" label="来源"></el-table-column>
      <el-table-column prop="time" label="注册时间"></el-table-column>
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
  name:'authority',
  data(){
     return{
      tableData: [
        {
          time: '2016-05-02',
          name: 'aaaa',
          source: '上海市普陀沙江路 1519 弄区金沙江路 1518 弄',
          route:'/user/pro'
        }, {
          time: '2016-05-02',
          name: 'aaaa',
          source: '上海市普陀沙江路 1519 弄区金沙江路 1518 弄',
          route:'/user/pro'
        }, {
          time: '2016-05-02',
          name: 'aaaa',
          source: '上海市普陀沙江路 1519 弄区金沙江路 1518 弄',
          route:'/user/pro'
        }, {
          time: '2016-05-02',
          name: 'aaaa',
          source: '上海市普陀沙江路 1519 弄区金沙江路 1518 弄',
          route:'/user/pro'
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
.authority{
  width: 95%;
  padding: 30px ;
}

</style>