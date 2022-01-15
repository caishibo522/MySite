<template>
  <div class="pager-container" v-if="totalPage > 1">
    <a :class="{disabled: current === 1}" @click="handleClick(1)">|&lt;&lt;</a>
    <a :class="{disabled: current === 1}" @click="handleClick(current - 1)">&lt;&lt;</a>
    <a v-for="(n,i) in numbers" :key="i" :class="{active:current === n}" @click="handleClick(n)">{{n}}</a>
    <a :class="{disabled: current === totalPage}" @click="handleClick(current + 1)">&gt;&gt;</a>
    <a :class="{disabled: current === totalPage}" @click="handleClick(totalPage)">&gt;&gt;|</a>
  </div>
</template>

<script>
export default {
  props: {
    current: {
      type:Number,
      default: 1
    },
    total: {
      type:Number,
      default: 0
    },
    limit: {
      type:Number,
      default: 10
    },
    visibleNumber: {
      type:Number,
      default:10
    }
  },
  computed: {
    // 计算出总页数
    totalPage() {
      return Math.ceil(this.total / this.limit)
    },
    // 计算出最小的页数
    visibleMin() {
      let min = this.current - Math.floor(this.visibleNumber / 2);
      if(min < 1) {
        min = 1
      }
      return min
    },
    // 计算出最大数
    visibleMax() {
      let max = this.visibleMin + this.visibleNumber - 1;
      if(max > this.totalPage) {
        max = this.totalPage;
      }
      return max
    },
    // 计算出每次显示的数字
    numbers() {
      let arr = [];
      for(let i = this.visibleMin; i <= this.visibleMax; i++) {
        arr.push(i);
      }
      return arr
    }
  },
  methods: {
    handleClick(i) {
      if(i < 1) {
        i = 1
      }
      if(i > this.totalPage) {
        i = this.totalPage
      }
      if(i === this.current) {
        return
      }
      this.$emit('pageChange',i)
    }
  }
}
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
  .pager-container {
    display: flex;
    justify-content: center;
    margin: 20px 0;
    a {
      margin: 0 7px;
      cursor: pointer;
      color: @primary;
      &.disabled {
        color: @gray;
        cursor: not-allowed;
      }
      &.active {
        color: @words;
        font-weight: bold;
        cursor: text;
      }
    }
  }
</style>