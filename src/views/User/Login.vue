<!--
 * @Author       : yznaisy
 * @Date         : 2020-08-16 14:56:37
 * @LastEditors  : yznaisy
 * @LastEditTime : 2020-08-16 16:11:38
 * @FilePath     : \antdv\src\views\User\Login.vue
-->
<template>
  <div class="login">
    <h1>Login</h1>

    <!-- Loging form -->
    <form>
      <div class="form-group">
        <input
          v-model="loginInfo.username"
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        />
      </div>
      <div class="form-group">
        <input
          v-model="loginInfo.password"
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
        />
      </div>

      <div class="form-check">
        <label class="switch">
          <input type="checkbox" />
          <span class="slider round"></span>
        </label>
        <label class="form-check-label" for="exampleCheck1">Remember me</label>

        <label class="forgot-password">
          <a href="#">Forgot Password?</a>
        </label>
      </div>

      <br />
      <button type="button" @click="login" class="btn btn-lg btn-block btn-success">Sign in</button>
    </form>
    <!-- End Loging form -->
  </div>
</template>
<script>
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/login.css";
export default {
  name: "",
  data() {
    return {
      loginInfo: {
        username: "admin",
        password: "",
      },
    };
  },
  methods: {
    login() {
      if (
        this.loginInfo.username === "admin" &&
        this.loginInfo.password === "123"
      ) {
        this.$message.success("登录成功", 2, () => {
          this.$router.push("/");
        });
      } else {
        this.$message.warning("用户名或密码忘记");
      }
    },
  },
};
</script>
<style scoped>
</style>