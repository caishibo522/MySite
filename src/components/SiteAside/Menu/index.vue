<template>
  <nav class="menu-container">
    <RouterLink v-for="item in items"
       :key="item.link"
       :to="{name:item.name}"
        active-class="selected"
        :exact="item.exact">
      <div class="icon">
        <Icon :type="item.icon"/>
      </div>
      <span>{{item.title}}</span>
    </RouterLink>
  </nav>
</template>

<script>
  import Icon from "@/components/Icon";
  export default {
    components: {
      Icon
    },
    data() {
      return {
        items: [
          {
            name:'Home',
            icon:'home',
            title:'首页',
            exact: true,
          },
          {
            name:'Blog',
            icon:'blog',
            title:'文章',
            exact: false
          },
          {
            name:'About',
            icon:'about',
            title:'关于我',
            exact:true
          },
          {
            name:'Project',
            icon:'code',
            title:'项目&效果',
            exact:true
          },
          {
            name:'Message',
            icon:'chat',
            title:'留言板',
            exact:true
          },
        ]
      }
    },
  }
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
  .menu-container {
    color: @gray;
    margin: 24px 0;
    a {
      padding: 0 50px;
      display: block;
      display: flex;
      align-items: center;
      height: 45px;
      &.selected {
        background: darken(@words, 3%);;
      }
      &:hover {
        color: #fff;
      }
    }
    .icon {
      width: 24px;
    }
  }
</style>