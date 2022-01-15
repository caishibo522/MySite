<template>
  <div class="home-container" ref="container" @wheel="handleWheel" v-loading="loading">
    <ul class="carousel-img" :style="{marginTop}" @transitionend="handleTransitionEnd">
      <li v-for="item in data" :key="item.id">
        <CarouselItem :carousel="item"/>
      </li>
    </ul>
    <div class="icon icon-up" @click="switchTo(index - 1)" v-show="index > 0">
      <Icon type="arrowUp"/>
    </div>
    <div class="icon icon-down" @click="switchTo(index + 1)" v-show="index < data.length - 1">
      <Icon type="arrowDown"/>
    </div>
    <ul class="indicator">
      <li v-for="(item,i) in data" :key="item.id" @click="switchTo(i)" :class="{active:index === i}"></li>
    </ul>
  </div>
</template>

<script>
  import {mapState} from "vuex";
  import CarouselItem from "./CarouselItem";
  import Icon from "@/components/Icon";
  export default {
    components: {
      CarouselItem,
      Icon,
    },
    data() {
      return {
        containerHeight: 0,// 一屏幕的高度
        index:0,// 当前第几张图片
        switching: false,// 是否正在切换
      }
    },
    computed:{
      marginTop() {
        return -this.index * this.containerHeight + 'px';
      },
      ...mapState('banner',['loading','data'])
    },
    created() {
      this.$store.dispatch('banner/fetchBanner');
    },
    methods: {
      switchTo(i) {
        this.index = i;
      },
      setSize() {
        this.containerHeight = this.$refs.container.clientHeight;
      },
      handleWheel(e) {
        if(this.switching) {
          return
        }
        if(e.deltaY === 125 && this.index < this.data.length - 1) {
          this.index++;
          this.switching = true;
        }else if(e.deltaY === -125 && this.index > 0) {
          this.index--;
          this.switching = true;
        }
      },
      handleTransitionEnd() {
        this.switching = false;
      }
    },
    mounted() {
      this.setSize();
      window.addEventListener('resize',this.setSize);
    },
    destroyed() {
      window.removeEventListener('resize',this.setSize);
    }
  }
</script>

<style scoped lang="less">
  @import "~@/styles/mixins.less";
  @import "~@/styles/var.less";
  .home-container {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }
    .carousel-img {
      width: 100%;
      height: 100%;
      transition: .4s;
      li {
        width: 100%;
        height: 100%;
      }
    }
    .icon {
      .self-center();
      font-size: 30px;
      position: absolute;
      color: @gray;
      cursor: pointer;
      transform: translateX(-50%);
    }
    .icon-up {
      top: 25px;
      animation: jump-up 2s infinite;
    }
    .icon-down {
      top: auto;
      bottom: 25px;
      animation: jump-down 2s infinite;
    }
    .indicator {
      .self-center();
      transform: translateY(-50%);
      left: auto;
      right: 20px;
      li {
        width: 7px;
        height: 7px;
        border: 1px solid #fff;
        border-radius: 50%;
        cursor: pointer;
        background-color: @dark;
        margin-bottom: 10px;
        box-sizing: border-box;
        &.active {
          background: #fff;
        }
      }
    }
  }
  @jump: 5px;
  @keyframes jump-up {
    0% {
      transform: translate(-50%, @jump);
    }
    50% {
      transform: translate(-50%, -@jump);
    }
    100% {
      transform: translate(-50%, @jump);
    }
  }
  @keyframes jump-down {
    0% {
      transform: translate(-50%, -@jump);
    }
    50% {
      transform: translate(-50%, @jump);
    }
    100% {
      transform: translate(-50%, -@jump);
    }
  }
</style>