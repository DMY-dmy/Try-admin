<template>
    <div class='login-all'>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="ruleForm">
            <h3 class="title">宣白后台管理系统</h3>
            <el-form-item label="用户名" prop="name">
                <el-input v-model="ruleForm.name" type="text" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pwd">
                <el-input type="password" v-model="ruleForm.pwd" placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
                <el-button @click="resetForm('ruleForm')">取消</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
export default {
  name:'index',
  data(){
    return{
        ruleForm:{
            name:'',
            pwd:'',
        },
        rules: {
            name: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 3, max: 3, message: '长度在 3个字符', trigger: 'blur' }
            ],
            pwd: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 3, max: 3, message: '长度在 3个字符', trigger: 'blur' }
            ],
        }
    }
  },
  methods:{
    submitForm() {
        this.$refs.ruleForm.validate(valid => {
          if (valid) {
            this.$router.push({path:'/'});
            console.log(this.ruleForm.name,this.ruleForm.pwd);
          } else {
            return false;
          }
        });
    },
    resetForm() {
        this.ruleForm.name = '';
        this.ruleForm.pwd = '';
    }
  }
}
</script>
<style  lang='scss'>
.login-all{
    // background-color: aqua;
    position: fixed;
    height: 100%;
    width: 100%;
        .ruleForm{
            position: absolute;
            left: 50%;
            top: 50%;
            width: 520px;
            max-width: 100%;
            height: 376px;
            padding: 35px 35px 15px 35px;
            margin-left: -360px;
            margin-top: -188px;
            .title{
                margin:0 0 50px 60px;
                color: gray;
                font-size:20px;
                font-family:400;
            }
        }
}
</style>