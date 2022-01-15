<template>
  <div class="site-aside-container">
   <template v-if="data">
     <Avatar :src="data.avatar"/>
     <h1 class="title">{{data.siteTitle}}</h1>
   </template>
    <Menu />
    <Contact v-if="data"/>
    <p class="desc" v-if="data">{{data.icp}}</p>
  </div>
</template>

<script>
  import {mapState} from "vuex";
  import Avatar from "@/components/Avatar";
  import Menu from "./Menu";
  import Contact from "./Contact";
  export default {
    components: {
      Avatar,
      Menu,
      Contact
    },
    computed: {
      ...mapState('setting',['data'])
    }
  }
</script>

<style scoped lang="less">
  @import "~@/styles/var.less";
  .site-aside-container {
    width: 100%;
    height: 100%;
    background-color: @dark;
    padding: 20px 0;
    box-sizing: border-box;
    overflow-y: auto;
    overflow-x: hidden;
    .avatar-container {
      margin: 0 auto;
    }
    .title {
      font-size: 1.2em;
      color: #fff;
      text-align: center;
    }
    .desc {
      font-size: 12px;
      text-align: center;
    }
  }
</style>