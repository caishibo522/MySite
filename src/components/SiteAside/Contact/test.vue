<template>
  <div class="test-container">
    <Contact />
  </div>
</template>

<script>
  import Contact from "./index";
  export default {
    components: {
      Contact,
    }
  }
</script>

<style scoped>
.test-container {
  width: 300px;
  height: 400px;
  padding-top: 200px;
  border: 2px solid red;
  margin: 50px auto;
  background-color: #333;
}
</style>