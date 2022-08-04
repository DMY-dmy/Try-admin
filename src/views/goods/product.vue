<template>
  <div class='product'>
    <div style="padding: 10px 0;">
      <el-button type="primary" size="small" @click="addProduct">添加产品</el-button>    
    </div>
    <el-table :data="tableData" border class="content" >
      <el-table-column prop="id" label="序号" width="180">
      </el-table-column>
      <el-table-column prop="name" label="名称"  width="180">
      </el-table-column>
      <el-table-column prop="price" label="价格">
      </el-table-column>
      <el-table-column prop="desc" label="描述">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

     <el-dialog title="添加流程" :visible.sync="deliveGoodsVisible" >
        <el-form  :model="ruleForm" ref="ruleForms" :rules="rules">
          <el-form-item label="产品id"  prop="id">
            <el-input :row="2"  v-model="ruleForm.id"></el-input>
          </el-form-item>
          <el-form-item label="商品名称" prop="name">
            <el-input :row="2"  v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="商品价格" prop="price">
            <el-input :row="2"  v-model="ruleForm.price"></el-input>
          </el-form-item>   
          <el-form-item label="商品描述" prop="desc">
            <el-input :row="2"  v-model="ruleForm.desc"></el-input>
          </el-form-item> 
      </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="deliveGoodsVisible = false">取 消</el-button>
          <el-button type="primary" @click="submitForm">确 定</el-button>
        </div>
      </el-dialog>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name:'product',
  data(){
     return{
      deliveGoodsVisible: false,
      ruleForm: {
        id:null,
        name:'',
        price:null,
        desc:'',
      },
      tableData: [
        {
          id:null,
          name: '',
          price: null,
          desc: '',
        }, 
      ],
      rules: {
        id: [{ required: true, message: "请输入商品ID" ,trigger: 'blur' }],
        name: [{ required: true, message: "请输入商品名称" ,trigger: 'blur' }],
        price: [{ required: true, message: "请输入商品价格" ,trigger: 'blur' }],
        desc: [{ required: true, message: "请输入商品描述" ,trigger: 'blur' }],
      },
     }
  },
  methods: {
     ...mapActions(["getPruData",'delPruData','addPruData']),
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
       this.$confirm('是否确定删除该产品?', '提示', {
            cancelButtonText: '取消',
            confirmButtonText: '确定',
            type: 'warning'
        }).then(() => {
            const id = row.id;
            this.delPruData({id}).then(resp => {
                this.$message.success(resp.msg);
                this.getData(this.search)
            })
        }).catch(() => {})
      
    },
    // 商品列表
    getData(){
      this.getPruData().then((data)=> {
        this.tableData = data
        // console.log(this.tableData)
      })
    },
    //添加流程按钮
    addProduct(){
      this.ruleForm={
        id:null,
        name:'',
        price: null,
        desc:''
      }
      this.deliveGoodsVisible = true
    },
    // 确认添加
    submitForm(){
      this.$refs['ruleForms'].validate(bool => {
        if(bool){
          const {id,name,price,desc } = this.ruleForm
          // console.log(this.ruleForm.id,this.ruleForm.name,this.ruleForm.price,this.ruleForm.desc)
          this.addPruData({
              id,
              name,
              price,
              desc
            }).then(res => {
              this.deliveGoodsVisible = false
              this.$message({
                message: res.msg,
                type: 'success'
              })
              this.getData()
            }).catch(error =>{
              this.deliveGoodsVisible = false
            })
        }
      })
    }
  },
  mounted(){
    this.getData();
  }
}
</script>
<style scoped lang='scss'>
.product{
  width: 95%;
  padding: 30px ;
}

</style>