<template>
<!-- 侧边栏 -->
  <div class='navMenu'>
    <el-row class="row">
        <el-col class="col">
            <el-menu class="menu" :collapse="isCollapse">
                <router-link :to="{path:'/'}"><div class="font"><h5>Dashboard</h5></div></router-link>
                <el-submenu index="1">
                    <template slot="title">
                        <i class="el-icon-menu"></i>
                        <span>用户管理</span>
                    </template>
                    <el-menu-item-group class="under-select">
                        <router-link :to="{path:'/user/all'}" ><el-menu-item index="1-1" @click="allUser">所有用户</el-menu-item></router-link>
                        <router-link :to="{path:'/user/active'}"><el-menu-item index="1-2" @click="active">活跃用户</el-menu-item></router-link>
                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="2">
                    <template slot="title">
                        <i class="el-icon-menu"></i>
                        <span >后台管理</span>
                    </template>
                    <el-menu-item-group class="under-select">
                        <router-link :to="{path:'/admin/member'}"><el-menu-item index="2-1" @click="member">成员管理</el-menu-item></router-link>
                        <router-link :to="{path:'/admin/authority'}"><el-menu-item index="2-2" @click="authority">权限管理</el-menu-item></router-link>
                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="3">
                    <template slot="title">
                        <i class="el-icon-menu"></i>
                        <span >商品管理</span>
                    </template>
                    <el-menu-item-group class="under-select">
                        <router-link :to="{path:'/goods/product'}"><el-menu-item index="3-1" @click="product">产品管理</el-menu-item></router-link>
                        <router-link :to="{path:'/goods/order'}"><el-menu-item index="3-2" @click="order">订单管理</el-menu-item></router-link>          
                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="4">
                    <template slot="title">
                        <i class="el-icon-menu"></i>
                        <span >消息管理</span>
                    </template>
                    <el-menu-item-group class="under-select">
                        <router-link :to="{path:'/message/report'}"><el-menu-item index="4-1" @click="report">举报管理</el-menu-item></router-link>
                        <router-link :to="{path:'/message/information'}"><el-menu-item index="4-2" @click="information">信息反馈</el-menu-item></router-link>            
                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="5">
                    <template slot="title">
                        <i class="el-icon-menu"></i>
                        <span >系统设置</span>
                    </template>
                    <el-menu-item-group class="under-select">
                        <router-link :to="{path:'/system/rotation'}"><el-menu-item index="5-1" @click="rotation">轮播设置</el-menu-item></router-link>
                        <router-link :to="{path:'/system/update'}"><el-menu-item index="5-2" @click="update">系统更新</el-menu-item></router-link>
                    </el-menu-item-group>
                </el-submenu>                  
            </el-menu>
        </el-col>
    </el-row>
  </div>
</template>
<script>
    export default {
        props:['msg'],
        name:'navMenu',
        data(){
            return{
                num: 0,
                isCollapse: false,
            }
        },
        mounted(){
            if(this.msg){
                console.log(this.msg)
            }
            
        },
        methods:{
            allUser(){
                this.num = 1
                console.log(this.num)
            },
            active(){
                this.num = 2
                console.log(this.num)
            },
            member(){
                this.num = 3
                console.log(this.num)
            },
            authority(){
                this.num = 4
                console.log(this.num)
            },
            product(){
                this.num = 5
                console.log(this.num)
            },
            order(){
                this.num = 6
                console.log(this.num)
            },
            report(){
                this.num = 7
                console.log(this.num)
            },
            information(){
                this.num = 8
                console.log(this.num)
            },
            rotation(){
                this.num = 9
                console.log(this.num)
            },
            update(){
                this.num = 10
                console.log(this.num)
            },
        }
        

    }
</script>
<style scoped lang='scss'>
.navMenu{
    // width: 200px;
    // height: 821px;
    background-color: #d8d8d8;
    // color:white;
    .menu{
        background-color: #d8d8d8;
        border-right: 0px;
        .font{
            width: 100%;
            height: 60px;
            line-height: 60px;
            font-size: 24px;
            font-weight: 400;
        }
        .under-select{
            background-color: #d8d8d8;
        }
       
    }
}
</style>