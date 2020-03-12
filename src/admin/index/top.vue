<template>
  <div class="main">
      <div id="homeTop" contenteditable="true">
        <span class="homeSpan">
          <el-button type="primary" icon="el-icon-sort"></el-button>
        </span>
        <span class="homeSpan" id="login">
          <el-button type="primary" @click="login">登陆</el-button>
          <el-button type="primary" @click="register">注册</el-button>
        </span>
        <span class="homeSpan">
          <el-menu
          :default-active="activeIndex2"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-menu-item index="1"><router-link to="/" tag="li" replace>首页</router-link></el-menu-item>
          <el-menu-item index="2"><router-link to="/home" tag="li" replace>我的主页</router-link></el-menu-item>
          <el-menu-item index="3"><router-link to="/admin" tag="li" replace>后台管理系统</router-link></el-menu-item>
          <el-menu-item index="4"><router-link to="/storeHome" tag="li" replace>商城</router-link></el-menu-item>
          <el-menu-item index="5"><router-link to="/fitmentHome" tag="li" replace>装饰公司</router-link></el-menu-item>
          <el-menu-item index="6"><router-link to="/WeChatHome" tag="li" replace>微信</router-link></el-menu-item>
        </el-menu>
        </span>
        <span class="homeSpan">
          
        </span>
      </div>
      <div id="navigation">
        <router-view/>
      </div>
  </div>
</template>

<!-- 
        <el-submenu index="2">
          <template slot="title">我的工作台</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
          <el-submenu index="2-4">
            <template slot="title">选项4</template>
            <el-menu-item index="2-4-1">选项1</el-menu-item>
            <el-menu-item index="2-4-2">选项2</el-menu-item>
            <el-menu-item index="2-4-3">选项3</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="3" disabled>消息中心</el-menu-item>
        <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
-->

<script>
export default {
  data () {
    return {
      msg: '寒冷无处不在管理后台',
      activeIndex2: '1'
    };
  },
  methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      login(){
        let routeData = this.$router.resolve({ path: '/login' });
        window.open(routeData.href, '_blank');
      },
      login(){
        this.$router.push({ path:'/login'})
      },
      register(){
        this.$router.push({ path:'/register'})
      }
    }
}
</script>

<style>
.main {
    font-size:  14px;
    color: #58666e;
    background-color: #1c2b36
}

.homeSpan{
  float:right;
  line-height: 70px;
}

#homeTop{
  display: inline-block;
  width: 100%;
  height: auto;
  padding-top: 10px;
  margin-right: 10px;
}

#navigation{
  background-color: red;
  
}
</style>