<template>
  <div class="blog-comment-container">
    <MessageArea
    title="评论列表"
    :subTitle="data.total"
    :list="data.rows"
    :isListLoading="isLoading"
    @submit="handleSubmit"/>
  </div>
</template>

<script>
  import MessageArea from "@/components/MessageArea";
  import fetchData from "@/mixins/fetchData";
  import {getComment,postComment} from "@/api/blog";

  export default {
    mixins:[fetchData({total:0,rows:[]})],
    components: {
      MessageArea
    },
    data() {
      return {
        page:1,
        limit:10
      }
    },
    computed: {
      hasMore() {
        return this.data.length < this.data.total;
      }
    },
    methods: {
      async fetchData() {
        return await getComment(this.$route.params.id,this.page,this.limit);
      },
      async fetchMore() {
        if(!this.hasMore) {
          return
        }
        this.isLoading = true;
        this.page++;
        const resp = await this.fetchData();
        this.data.total = resp.total;
        this.data.rows = this.data.rows.concat(resp.rows);
        this.isLoading = false;
      },
      async handleSubmit(formData,callback) {
        const resp =  await postComment({
          blogId: this.$route.params.id,
          ...formData
        })
        this.data.rows.unshift(resp);
        this.data.total++;
        callback('评论成功');
      },
      async handleScroll(dom) {
        if(this.isLoading || !dom) {
          return
        }
        const range = 50;
        const dec = Math.abs((dom.clientHeight + dom.scrollTop  -dom.scrollHeight));
        if(dec <= range) {
          await this.fetchMore();
        }
      }
    },
    created() {
      this.$bus.$on('mainScroll',this.handleScroll);
    }
  }
</script>

<style scoped>
  .blog-comment-container {
    margin: 30px 0;
  }
</style>