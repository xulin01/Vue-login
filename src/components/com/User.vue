<template>
  <div id="user">
    <h3>用户管理</h3>
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">姓名</th>
          <th scope="col">年龄</th>
          <th scope="col">头衔</th>
          <th scope="col">操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="k in list" :key="k.id">
          <td>{{ k.id }}</td>
          <td>{{ k.uname }}</td>
          <td>{{ k.age }}</td>
          <td>{{ k.toux }}</td>
          <td>
            <a href="#" @click.prevent="xq(k.id)">详情</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          id: 1,
          uname: "张三",
          age: "20",
          toux: "无畏",
        },
        {
          id: 2,
          uname: "李四",
          age: "21",
          toux: "德玛",
        },
        {
          id: 3,
          uname: "王五",
          age: "22",
          toux: "深渊",
        },
      ],
    };
  },
  methods: {
    xq(id) {
      this.$router.push("/home/userinfo" + id);
    },
  },
};
</script>

<style>
#user {
  width: 100%;
  height: 100%;
}
.table {
  margin-top: 30px;
}
</style>
