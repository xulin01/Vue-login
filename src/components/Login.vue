<template>
  <div id="login">
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">Username</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputEmail1"
          placeholder="username"
          v-model="username"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
          v-model="pwd"
        />
        <br />
        <input class="btn btn-default" type="button" value="登录" @click="bt" />
        <input
          class="btn btn-default"
          type="reset"
          value="重置"
          @click="reset"
        />
      </div>
      <div class="img">
        <img src="../assets/logo.png" alt="" />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      pwd: "",
    };
  },
  methods: {
    reset() {
      (this.username = ""), (this.pwd = "");
    },
    bt() {
      if (this.username == "admin" && this.pwd === "123456") {
        localStorage.setItem("token", "Brean xxx");
        this.$router.replace("/home");
      } else {
        localStorage.clear("token");
      }
    },
  },
};
</script>

<style lang="less">
#login {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  form {
    width: 500px;
    height: 260px;
    border: 1px solid #ccc;
    position: relative;
    border-radius: 20px;
    background-color: #fff;
    .form-group {
      width: 400px;
      margin-top: 30px;
      margin-left: 30px;
    }
  }

  .img {
    width: 100px;
    height: 100px;
    overflow: hidden;
    border: 2px solid #ccc;

    border-radius: 50%;
    background-color: #fff;
    position: absolute;
    top: -50px;
    left: 190px;
    img {
      width: 100px;
      height: 100px;
    }
  }
}
</style>
