<template>
  <div class='update'>
    <el-form class="form">
      <el-form-item label="更新类型：" class="name"> 
        <el-select v-model="value" placeholder="请选择" class="input">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="更新文件：" class="file"> 
        <el-upload
          class="upload-demo"
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :before-remove="beforeRemove"
          multiple
          :limit="3"
          :on-exceed="handleExceed"
          :file-list="fileList">
          <el-button size="small" type="primary">点击上传</el-button>
        </el-upload>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>

export default {
  name:'update',
  data(){
     return{
        options: [
          {
            value: '选项1',
            label: '前台更新'
          }, 
          {
            value: '选项2',
            label: '后台更新'
          }, 
        ],
        value: '',
        fileList: [{name: 'file.zip',url:'http://localhost:27017/'}]
     }
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${ file.name }？`);
    }
  }
}
</script>
<style scoped lang='scss'>
.form{
  padding-left: 20px;
  padding-top: 20px;
  .name{
    text-align: left;
  }
}
.file {
    text-align: left;
    width: 25%;
}
</style>