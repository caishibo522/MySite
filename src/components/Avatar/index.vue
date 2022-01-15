<template>
  <img class="avatar-container" :src="src" :style="{
    width: size + 'px',
    height: size + 'px'
  }">
</template>

<script>
export default {
  props:{
    src: {
      required: true,
      type:String,
    },
    size: {
      type: Number,
      default: 150
    }
  }
}
</script>

<style lang="less" scoped>
  .avatar-container {
    display: block;
    border-radius: 50%;
    object-fit: cover;
  }
</style>