<template>
  <div class="test-container">
    <ImageLoader placeholder="https://img0.baidu.com/it/u=1051577226,2771334401&fm=26&fmt=auto"
    src="https://img0.baidu.com/it/u=1051577226,2771334401&fm=26&fmt=auto"/>
  </div>
</template>

<script>
  import ImageLoader from "./index";
  export default {
    components: {
      ImageLoader,
    }
  }
</script>

<style scoped>
.test-container {
  width: 600px;
  height: 400px;
  border: 2px solid #333;
  margin: 50px auto;
}
</style>