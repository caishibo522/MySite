<template>
  <div class="test-container">
    <SiteAside />
  </div>
</template>

<script>
  import "@/styles/global.less";
  import SiteAside from "./";
  export default {
    components: {
      SiteAside,
    }
  }
</script>

<style scoped>
.test-container {
  width: 250px;
  height: 100vh;
  border: 2px solid red;
  margin: 0 auto;
}
</style>