<template>
  <div class="test-container">
    <RightList :list="items" @select="handleSelect"/>
  </div>
</template>

<script>
  import RightList from "./RightList";
  export default {
    components: {
      RightList,
    },
    data() {
      return {
        items:[
          {name:'a',isSelected: false},
          {name:'b',isSelected: false},
          {name:'c',isSelected: true,children:[
              {name:'c-1',isSelected:false},
              {name:'c-2',isSelected:true},
              {name:'c-3',isSelected:false},
              {name:'c-4',isSelected:false},
            ]},
          {name:'d',isSelected: false},
        ]
      }
    },
    methods: {
      handleSelect(item) {
        console.log(item)
      }
    }
  }
</script>

<style scoped>

</style>