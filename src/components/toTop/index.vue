<template>
  <div @click="handleClick" v-show="show" class="to-top-container">
    top
  </div>
</template>

<script>
  export default {
    data() {
      return {
        show:false,
      }
    },
    methods: {
      handleScroll(dom) {
        if(!dom) {
          this.show = false;
          return
        }
        this.show = dom.scrollTop>=500;
      },
      handleClick() {
        this.$bus.$emit('setMainScroll',0)
      }
    },
    created() {
      this.$bus.$on('mainScroll',this.handleScroll);
    },
    destroyed() {
      this.$bus.$off('mainScroll',this.handleScroll)
    }
  }
</script>

<style scoped lang="less">
  @import "~@/styles/var.less";
.to-top-container {
  width: 50px;
  height: 50px;
  background-color: @primary;
  border-radius: 50%;
  position: fixed;
  right: 50px;
  bottom: 50px;
  cursor: pointer;
  color: #fff;
  text-align: center;
  line-height: 50px;
}
</style>