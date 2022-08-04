<template>
<!-- 头部导航 -->
  <div class='navBar'>
      <div class="useList">
        <img src="@/assets/img/integral.png" :msg="aside" @click="autoAside" alt="" style="width: 30px;height:30px"  />
        <el-breadcrumb separator="/" class="das">
          <el-breadcrumb-item :to="{ path: '/' }" >Dashboard</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <el-dropdown class="useInfo">
        <span class="el-dropdown-link">
          <i class="el-icon-user"></i>
        </span>
        <el-dropdown-menu slot="dropdown" class="drop">
          <router-link :to="{path:'/login'}"><el-dropdown-item>退出登录</el-dropdown-item></router-link>
        </el-dropdown-menu>
      </el-dropdown>
  </div>
</template>

<script>
  export default {
      name:'navBar',
      data(){
        return{
          aside:true,
        }
      },
      methods:{
        autoAside(){
          this.aside = !this.aside
          // console.log(this.aside)
        }
      }
  }
</script>
<style scoped lang='scss'>
  .navBar{
    display:flex;
    align-items: center;
    // background-color: rgb(240, 116, 116);
    box-shadow: 0px 3px 3px #d4d3d3;
    justify-content: space-between;
    .useList{
      padding-left:10px;
      display: flex;
      .das{
        line-height: 30px;
        padding-left: 10px;
      }
    }
    .useInfo{
      padding: 0 50px;
    }
  }
  .el-dropdown-link {
    cursor: pointer;
    color: #5e5d5d;
    font-size: 22px;
  }
</style>