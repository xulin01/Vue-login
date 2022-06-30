<template>
  <div id="home">
    <Header></Header>
    <div class="flex">
      <Left></Left>
      <div class="right">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Left from "@/components/Left.vue";
import Header from "@/components/Header.vue";

export default {
  components: {
    Left,
    Header,
  },
};
</script>

<style>
#home {
  width: 100%;
  height: 100%;
  background-color: #fff;
}
.right {
  width: 60%;
  text-align: center;
  margin: 30px auto;
}
.flex {
  display: flex;
}
</style>
