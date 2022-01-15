<template>
  <Layout>
    <div ref="mainContainer" class="main-container" v-loading="isLoading">
      <BlogDetail :blog="data" v-if="data"/>
      <BlogComment v-if="!isLoading"/>
    </div>
    <template #right>
      <div class="right-container" v-loading="isLoading">
        <BlogTOC :toc="data.toc" v-if="data"/>
      </div>
    </template>
  </Layout>
</template>

<script>
  import Layout from "@/components/Layout";
  import BlogDetail from "./components/BlogDetail";
  import BlogTOC from "./components/BlogTOC";
  import fetchData from "@/mixins/fetchData";
  import {getBlog} from "@/api/blog";
  import BlogComment from "./components/BlogComment";
  import titleControlle from "../../utils/titleControlle";
  import "@/styles/markdown.css";
  export default {
    mixins:[fetchData(null)],
    components: {
      Layout,
      BlogDetail,
      BlogTOC,
      BlogComment
    },
    methods: {
      async fetchData() {
        const resp = await getBlog(this.$route.params.id);
        titleControlle.setRouterTitle(resp.title)
        return resp
      },
      handleScroll() {
        this.$bus.$emit('mainScroll',this.$refs.mainContainer)
      },
      handleSetScroll(scrollNum) {
        this.$refs.mainContainer.scrollTop = scrollNum;
      }
    },
    created() {
      this.$bus.$on('setMainScroll',this.handleSetScroll)
    },
    mounted() {
      this.$refs.mainContainer.addEventListener('scroll',this.handleScroll)
    },
    beforeDestroy() {
      this.$bus.$emit('mainScroll');
      this.$refs.mainContainer.removeEventListener('scroll',this.handleScroll)
      this.$bus.$off('setMainScroll',this.handleSetScroll)
    },
    updated() {
      const hash = location.hash;
      location.hash = '';
      setTimeout(() => {
        location.hash = hash;
      },50)
    },

  }
</script>

<style scoped lang="less">
.main-container {
  height: 100%;
  overflow-y: scroll;
  scroll-behavior: smooth;
  box-sizing: border-box;
  padding: 20px;
  position: relative;
  width: 100%;
  overflow-x: hidden;
}
.right-container {
  width: 300px;
  height: 100%;
  overflow-y: auto;
  padding: 20px;
  box-sizing: border-box;
  position: relative;
}
</style>