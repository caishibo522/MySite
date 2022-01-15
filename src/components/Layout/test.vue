<template>
  <div class="test-container">
    <Layout>
      <template #left>
        <div class="left">左边区域</div>
      </template>
      <div class="main">主题区域</div>
      <template #right>
        <div class="right">右边海域</div>
      </template>
    </Layout>
  </div>
</template>

<script>
  import Layout from "./index";
  export default {
    components: {
      Layout,
    }
  }
</script>

<style scoped>
.test-container {
  width: 60%;
  height: 600px;
  border: 2px solid #333;
}
  .left {
    width: 250px;
    height: 100%;
    background-color: skyblue;
  }
  .main {
    width: 100%;
    height: 100%;
    background-color: orange;
  }
  .right {
    width: 300px;
    height: 100%;
    background-color: yellowgreen;
  }
</style>