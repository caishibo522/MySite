<template>
  <div class="blog-toc-container">
    <h2>目录</h2>
    <RightList :list="toWithSelect" @select="handleSelect"/>
  </div>
</template>

<script>
  import RightList from "./RightList";
  import debounce from "@/utils/debounce";
  export default {
    props:{
      toc: {
        type:Array,
        default: () => []
      }
    },
    data() {
      return {
        activeAnchor: '',
      }
    },
    components: {
      RightList,
    },
    computed: {
      toWithSelect() {
        const getToc = (toc =[]) => {
          return toc.map(it => ({
            ...it,
            isSelected: it.anchor === this.activeAnchor,
            children: getToc(it.children)
          }))
        }
        return getToc(this.toc)
      },
      doms() {
        let doms = [];
        const addDom = toc => {
          for (let t of toc) {
            doms.push(document.getElementById(t.anchor));
            if(t.children) {
              addDom(t.children)
            }
          }
        }
        addDom(this.toc)
        return doms
      }
    },
    methods: {
      handleSelect(it) {
        location.hash = it.anchor;
      },
      setSelect(scrollDom) {
        if(!scrollDom) {
          return
        }
        this.activeAnchor = '';
        const range = 200;
        for(let dom of this.doms) {
          if(!dom) {
            continue;
          }
          const top = dom.getBoundingClientRect().top;
          if(top >= 0 && top <= range) {
            this.activeAnchor = dom.id;
            return
          }else if(top > range) {
            return
          }else {
             this.activeAnchor = dom.id;
          }
        }
      }
    },
    created() {
      this.select = debounce(this.setSelect,50);
      this.$bus.$on('mainScroll',this.select)
    },
    destroyed() {
      this.$bus.$off('mainScroll',this.select)
    }
  }
</script>

<style scoped lang="less">
  .blog-toc-container {
    h2 {
      font-weight: bold;
      font-size: 1em;
      letter-spacing: 2px;
      margin: 0;
    }
  }
</style>