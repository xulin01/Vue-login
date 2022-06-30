<template>
  <div id="left">
    <ul>
      <router-link to="/home/users"><li>用户管理</li></router-link>
      <router-link to="/home/quanxian"><li>权限管理</li></router-link>
      <router-link to="/home/shangpin"><li>商品管理</li></router-link>
      <router-link to="/home/dingdan"><li>订单管理</li></router-link>
      <router-link to="/home/xitong"><li>系统设置</li></router-link>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
#left {
  width: 20%;
  height: 1000px;
  border: 1px solid #ccc;
  border-top: 0;
  ul {
    list-style: none;
    padding-top: 50px;
    padding-left: 0;
    a {
      text-decoration: none;
      color: #000;
    }
    li {
      width: 100%;
      height: 50px;
      text-align: center;
      line-height: 50px;
    }
    li:hover {
      background-color: #ccc;
      cursor: pointer;
    }
  }
}
</style>
