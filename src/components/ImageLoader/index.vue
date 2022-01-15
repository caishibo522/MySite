<template>
  <div class="image-loader-container">
    <img :src="placeholder" class="placeholder" v-if="!evertThing">
    <img :src="src" :style="{opacity:originOpacity,transition:`${duration}ms`}" @load="handleLoad">
  </div>
</template>

<script>
  export default {
    props: {
      placeholder: {
        required: true,
        type:String,
      },
      src: {
        required: true,
        type:String,
      },
      duration: {
        type:Number,
        default: 1500
      }
    },
    data() {
      return {
       originLoad: false, //图片加载完毕以后透明度为1
        evertThing:false // 是否加载完毕
      }
    },
    computed: {
      originOpacity() {
        return this.originLoad?1:0
      }
    },
    methods: {
      handleLoad() {
        this.originLoad = true;
        setTimeout(() => {
          this.evertThing = true;
          this.$emit('load');
        },this.duration)
      }
    }
  }
</script>

<style scoped lang="less">
  @import "~@/styles/mixins.less";
  .image-loader-container {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    img {
      .self-fill();
      object-fit: cover;
    }
    .placeholder {
      filter: blur(2vw);
    }
  }
</style>