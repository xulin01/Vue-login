<template>
  <div id="header">
    <h1>用户管理系统</h1>

    <button class="btn btn-default" @click="move">退出登录</button>
  </div>
</template>

<script>
export default {
  methods: {
    move() {
      localStorage.clear("token");
      this.$router.replace("/login");
    },
  },
};
</script>

<style lang="less">
#header {
  width: 100%;
  height: 100px;
  text-align: center;
  border-bottom: 1px solid #ccc;
  h1 {
    font-weight: 500;
    font-size: 23px;
    text-align: left;
    margin-left: 30px;
  }
  button {
    width: 100px;
    height: 40px;
    text-align: center;
    float: right;
  }
}
</style>
