<template>
  <ul class="right-list-container">
    <li v-for="(item,i) in list" :key="i">
      <span :class="{active:item.isSelected}" @click="handleClick(item)">{{item.name}}</span>
      <span class="aside" v-if="item.aside" :class="{active:item.isSelected}"  @click="handleClick(item)">{{item.articleCount}}</span>
      <RightList :list="item.children" @select="handleClick"></RightList>
    </li>
  </ul>
</template>

<script>
  export default {
    name: "RightList",
    props:{
      list: {
        type:Array,
        default:() => []
      }
    },
    methods: {
      handleClick(item) {
        if(item.isSelected) {
          return
        }
        this.$emit('select',item)
      }
    }
  }
</script>

<style scoped lang="less">
  @import "~@/styles/var.less";
  .right-list-container {
    list-style: none;
    padding: 0;
    .right-list-container {
      margin-left: 1em;
    }
  }
  li {
    font-size: 14px;
    min-height: 40px;
    .active {
      font-weight: bold;
      color: @warn;
    }
  }
  span {
    cursor: pointer;
  }
.aside {
  font-size: 12px;
  color: @gray;
  margin-left: 1em;
}
</style>