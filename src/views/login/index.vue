<template>
  <div class="login">
    <div class="login-form">
      <h2>登录</h2>
      <div class="login-item">
        <input class="loginUser" type="text" v-model="loginForm.account" placeholder="请输入账号">
        <p v-if="userFlag">{{ userMessage }}</p>
      </div>
      <div class="login-item">
        <input class="password" type="password" v-model="loginForm.password" placeholder="请输入密码">
        <p v-if="passwordFlag">{{ passwordMessage }}</p>
      </div>
      <div class="login-item">
        <button @click="loginDefine">登 录</button>
      </div>
      <div class="login-item other-notice">
        <span>立即注册</span>
        <span>忘记密码</span>
      </div>
      <div class="links">
        <!-- <p>---------- 第三方登录 ----------</p>
        <ul>
          <li>微信</li>
          <li>邮箱</li>
          <li>QQ</li>
        </ul> -->
      </div>
    </div>
  </div>
</template>
<script>
// import { validEmail, validPhone } from './../../lib/validate.js'
import { apiLogin } from './../../services/api/index.js'
export default {
  data () {
    return {
      loginForm: {
        account: '',
        password: ''
      },
      userFlag: false,
      userMessage: '',
      passwordFlag: false,
      passwordMessage: ''
    }
  },
  methods: {
    // 登录验证
    loginCheck () {
      if (!this.loginForm.account) {
        this.userMessage = '账号不能为空'
        this.userFlag = true
      }
      // else if (!validEmail(this.loginForm.username) && !validPhone(this.loginForm.username)) {
      //   this.userMessage = '账号格式错误'
      // }
      if (!this.loginForm.password) {
        this.passwordMessage = '密码不能为空'
        this.passwordFlag = true
      }
      return true
    },
    // 登录
    loginDefine () {
      apiLogin(this.loginForm)
        .then(res => {
          this.$toast(res.message)
          if (res.code === 1) {
            window.localStorage.setItem('token', res.data)
          }
        })
    }
  }
}
</script>
<style lang="scss" scoped>
.login {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  .login-form {
    width: 100%;
    height: 100%;
    background: url(./../../assets/img/loginLogo.jpg) no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    h2 {
        margin-top: -50px;
        margin-bottom: 30px;
        text-align: center;
        font-size: 18px;
        color: #fff;
      }
    .login-item {
      width: 70%;
      margin-bottom: 30px;
      input {
        width: 100%;
        height: 40px;
        padding-left: 44px;
        line-height: 40px;
        font-size: 16px;
        color: #fff;
        background: none;
        outline: none;
        border: 1PX solid #fff;
        border-radius: 10px;
      }
      input:focus {
        color: #fff;
        border: 1PX solid #0066FF;
      }
      input::-webkit-input-placeholder{
        color: #fff;
        font-size: 16px;
      }
      .password {
        background: url(./../../assets/img/password.png) 7px center no-repeat;
      }
      .loginUser {
        background: url(./../../assets/img/user.png) 4px center no-repeat;
      }
      & > button {
        width: 100%;
        height: 40px;
        line-height: 40px;
        font-size: 14px;
        color: #fff;
        border-radius: 10px;
        background: linear-gradient(45deg, #ffffff, #000066);
      }
      & > p {
        margin: 10px 0 0 5px;
        color: #f00;
      }
    }
    .other-notice {
      display: flex;
      justify-content: space-between;
      > span {
        color: #fff;
        text-decoration: underline;
      }
    }
    .links {
      color: #fff;
      ul {
        display: flex;
        justify-content: space-around;
      }
    }
  }
}
</style>
