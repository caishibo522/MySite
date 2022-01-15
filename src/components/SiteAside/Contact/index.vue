<template>
  <ul class="contact-container">
    <li>
      <a>
        <div class="icon">
          <Icon type="qq"></Icon>
        </div>
        <span>{{data.qq}}</span>
      </a>
      <div class="pop">
        <img src="https://img0.baidu.com/it/u=264706582,3258856625&fm=26&fmt=auto">
      </div>
    </li>

    <li>
      <a>
        <div class="icon weixin">
          <Icon type="weixin"></Icon>
        </div>
        <span>{{data.weixin}}</span>
      </a>
      <div class="pop">
        <img src="https://img0.baidu.com/it/u=264706582,3258856625&fm=26&fmt=auto">
      </div>
    </li>

    <li>
      <a :href="data.github" target="_blank">
        <div class="icon">
          <Icon type="github"></Icon>
        </div>
        <span>{{data.githubName}}</span>
      </a>
      <div class="pop">
        <img src="https://img0.baidu.com/it/u=264706582,3258856625&fm=26&fmt=auto">
      </div>
    </li>

    <li>
      <a :href="`mailto:${data.mail}`">
        <div class="icon">
          <Icon type="mail"></Icon>
        </div>
        <span>{{data.mail}}</span>
      </a>
      <div class="pop">
        <img src="https://img0.baidu.com/it/u=264706582,3258856625&fm=26&fmt=auto">
      </div>
    </li>
  </ul>
</template>

<script>
  import {mapState} from "vuex";
  import Icon from "@/components/Icon";
  export default {
    components: {
      Icon,
    },
    computed: {
      ...mapState('setting',['data'])
    }
  }
</script>

<style scoped lang="less">
  @import "~@/styles/var.less";
.contact-container {
  list-style: none;
  margin: 0;
  padding: 20px;
  color: @gray;
  li {
    height: 30px;
    line-height: 30px;
    margin: 14px 0;
    position: relative;
    &:hover {
      .pop {
        transform: scaleY(1);
      }
    }
  }
  a {
    display: flex;
    align-items: center;
    font-size: 14px;
    cursor: pointer;
  }
  .icon {
    font-size: 26px;
    width: 36px;
    &.weixin {
      font-size: 32px;
      text-indent: -3px;
    }
  }
  .pop {
    position: absolute;
    bottom: 35px;
    left: 0;
    padding: 10px 15px;
    box-sizing: border-box;
    background-color: #fff;
    border-radius: 5px;
    transition: .3s;
    transform: scaleY(0);
    transform-origin: center bottom;
    &:after {
      content: '';
      position: absolute;
      bottom: -4px;
      transform: translateX(-50%) rotate(45deg);
      left: 50%;
      width: 8px;
      height: 8px;
      background-color: #fff;
    }
    img {
      width: 150px;
      height: 150px;
    }
  }
}
</style>