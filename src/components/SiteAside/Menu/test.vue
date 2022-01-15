<template>
  <div class="test-container">
    <Menu />
  </div>
</template>

<script>
  import "@/styles/global.less";
  import Menu from "./index";
  export default {
    components: {
      Menu,
    }
  }
</script>

<style scoped>
.test-container {
  width: 250px;
  height: 400px;
  padding-top: 200px;
  border: 2px solid #333;
  margin: 50px auto;
  background-color: #888;
}
</style>