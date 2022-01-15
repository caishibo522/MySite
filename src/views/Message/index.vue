<template>
  <div class="message-container">
    <MessageArea title="留言板"
                 :subTitle="`(${data.total})`"
                 :isListLoading="isLoading"
                 :list="data.rows"
                  @submit="handleSubmit"/>
  </div>
</template>

<script>
  import MessageArea from "@/components/MessageArea";
  import fetchData from "../../mixins/fetchData";
  import * as msgApi from "@/api/message";
  export default {
    mixins:[fetchData({total: 0,rows:[]})],
    components: {
      MessageArea,
    },
    methods: {
      async fetchData() {
        return  msgApi.getMessage(this.page,this.limit);
      },
      async handleSubmit(data,callback) {
        const resp = await msgApi.postMessage(data);
        callback('感谢您的留言')
        console.log(resp)
        this.data.rows.unshift(resp);
        this.data.total++;
      },
    }
  }
</script>

<style scoped lang="less">
  .message-container {
    width: 100%;
    height: 100%;
    overflow-y: auto;
    box-sizing: border-box;
    padding: 25px 0;
  }
  .message-area-container {
    width: 700px;
    margin: 0 auto;
  }
</style>