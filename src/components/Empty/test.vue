<template>
  <div class="test-container">
    <Empty/>
  </div>
</template>

<script>
import Empty from "./index.vue";
export default {
  components: {
    Empty,
  }
}
</script>

<style scoped>
  .test-container {
    width: 600px;
    height: 400px;
    border: 2px solid #333;
    margin: 50px auto;
    position: relative;
  }
</style>