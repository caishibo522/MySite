<template>
  <div class="blog-category-container" v-loading="isLoading">
    <h2>文章分类</h2>
    <RightList :list="list" @select="handleSelect"/>
  </div>
</template>

<script>
  import RightList from "./RightList";
  import fetchData from "@/mixins/fetchData";
  import {getBlogType} from "@/api/blog";
  export default {
    mixins:[fetchData([])],
    components: {
      RightList
    },
    computed: {
      categoryId() {
        return +this.$route.params.categoryId || -1;
      },
      limit() {
        return +this.$route.query.limit || 10;
      },
      list() {
        const totalBlog = this.data.reduce((a,b) => a + b.articleCount,0);
       const result = [{id:-1,name:'全部文章',articleCount:totalBlog},...this.data]
        return result.map(it => ({
          ...it,
          isSelected: it.id === this.categoryId,
          aside: `${it.articleCount}`,
        }))
      }
    },
    methods: {
      async fetchData() {
        return await getBlogType()
      },
      handleSelect(it) {
        if(it.id === -1) {
          this.$router.push({
            name:'Blog',
            query: {
              page:1,
              limit: this.limit
            }
          })
        }else {
          this.$router.push({
            name:'categoryBlog',
            params: {
              categoryId: it.id,
            },
            query: {
              page:1,
              limit: this.limit
            }
          })
        }
      }
    }
  }
</script>

<style scoped>
.blog-category-container {
  width: 300px;
  height: 100%;
  box-sizing: border-box;
  padding: 20px;
  position: relative;
  overflow-y: auto;
}
  h2{
    font-size: 1em;
    font-weight: bold;
    letter-spacing: 2px;
    margin: 0;
  }
</style>