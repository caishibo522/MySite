<template>
  <div class="project-container" v-loading="loading">
    <a v-for="item in data" :key="item.id" class="project-item">
      <a :href="item.url?item.url:'javascript:alert(`该项目暂时无法访问`)'" :target="item.url?'_blank':'_self'" class="project-item">
        <img :src="item.thumb" alt="" class="thumb">
      </a>
      <div class="info">
        <a :href="item.url?item.url:'javascript:alert(`该项目暂时无法访问`)'" :target="item.url?'_blank':'_self'" class="project-item">
          <h2>{{item.name}}</h2>
        </a>
        <div class="github" v-if="item.github">
          <a  :href="item.github?item.github:`javascript:alert('该项目暂时没有github地址')`">github</a>
        </div>
        <p v-for="desc in item.description" :key="desc">{{desc}}</p>
      </div>
    </a>
  </div>
</template>

<script>
  import {mapState} from "vuex";
  export default {
    computed: {
      ...mapState('project',['loading','data']),
    },
    created() {
      this.$store.dispatch('project/fetchProject')
    }
  }
</script>

<style scoped lang="less">
  @import "~@/styles/var.less";
  .project-container {
    width: 100%;
    height: 100%;
    padding: 20px;
    box-sizing: border-box;
    position: relative;
    overflow-y: auto;
    scroll-behavior: smooth;
  }
  .project-item {
    transition: 0.5s;
    padding: 20px;
    display: flex;
    margin-bottom: 20px;
    &:hover {
      box-shadow: -1px 1px 5px #000;
      transform: scale(1.01) translate(3px, -3px);
      color: inherit;
    }
  }
  .thumb {
    width: 250px;
    min-height: 150px;
    flex: 0 0 auto;
    object-fit: cover;
    border-radius: 5px;
    margin-right: 15px;
  }
  .info {
    line-height: 1.7;
    flex: 1 1 auto;
    h2 {
      margin: 0;
    }
  }
  .github {
    font-size: 14px;
    color: @primary;
  }
</style>