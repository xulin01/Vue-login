<template>
  <div id="userinfo">
    <h3>用户详情--{{ id }}</h3>
    <button type="button" @click="bac" class="btn btn-secondary">后退</button>
  </div>
</template>

<script>
export default {
  props: ["id"],
  methods: {
    bac() {
      this.$router.back();
    },
  },
};
</script>

<style>
#userinfo {
  width: 100%;
  height: 100%;
  position: relative;
}
#userinfo button {
  width: 50px;
  height: 30px;
  font-size: 10px;
  text-align: center;
  line-height: 20px;
  position: absolute;
  top: 0;
  left: 0;
}
</style>
