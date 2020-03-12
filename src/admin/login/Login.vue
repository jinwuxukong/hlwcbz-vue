<template>
  <div>
    <div class="outer_label">
      <img style="width:700px;height:500px;justify-content: center;align-items: center;" class="inner_label login_logo" src="../../assets/login/login_top.jpg">
    </div>
    <div class="login_form">
      <input type="text"  class="qxs-ic_user qxs-icon"  placeholder="用户名" v-model="userName">
      <input type="text"  class="qxs-ic_password qxs-icon"  placeholder="密码" v-model="password">
      <div style="margin-top: 10px">
        <button style="color: #000099;" @click="login">账号登陆</button><span style="float: right;color: #A9A9AB">忘记密码？</span>
      </div>
    </div>
  </div>
</template>

<script>
import '../../style/character.css'
</script>

<script>
export default {
  data() {
      return {
        userName: '',
        password: '',
        isBtnLoading: false
      }
  },
  methods: {
    login() {
        if(this.userName == 'admin' && this.password == '123'){
              this.$router.push({name:'index'})
          } else {
              alert('用户名错误')
          }
      }
  }
}
</script>