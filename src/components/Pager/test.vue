<template>
  <div class="test-container">
    <Pager :current="current" :total="total" @pageChange="handleClick"/> 
  </div>
</template>

<script>
import Pager from "./index.vue";
import "@/styles/global.less";
export default {
  components: {
    Pager,
  },
  data() {
    return {
      current: 1,
      total: 302
    }
  },
  methods: {
    handleClick(i) {
      this.current = i;
      console.log('aaa');
    }
  }
}
</script>

<style>

</style>