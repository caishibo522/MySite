<template>
  <div class="app-container">
   <Layout>
     <template #left>
      <div class="aside">
        <SiteAside />
      </div>
     </template>
     <template #default>
      <RouterView />
     </template>
   </Layout>
    <toTop />
  </div>
</template>

<script>
import Layout from "@/components/Layout";
import SiteAside from "@/components/SiteAside";
import toTop from "@/components/toTop";
export default {
 components: {
   Layout,
   SiteAside,
   toTop
 }
}
</script>

<style scoped lang="less">
  @import "~@/styles/mixins.less";
.app-container {
  .self-fill(fixed);
}
  .aside {
    width: 250px;
    height: 100%;
  }
</style>
