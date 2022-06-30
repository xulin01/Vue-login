<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Login from "@/components/Login.vue";

export default {
  components: {
    Login,
  },
};
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
}
body,
html {
  width: 100%;
  height: 100%;
}
#app {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #9b9bd6;
}
</style>
