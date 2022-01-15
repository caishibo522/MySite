<template>
  <div class="message-area-container">
    <DataForm v-on="$listeners"/>
    <h3>{{title}}
    <span>{{subTitle}}</span></h3>
    <DataList :list="list" />
  </div>
</template>

<script>
  import DataForm from "./DataForm";
  import DataList from "./DataList";
  export default {
    props: {
      title: {
        type:String,
        default: ''
      },
      list: {
        type:Array,
        default: () => []
      },
      subTitle: {
        type: String,
        default: ""
      },
      isListLoading: {
        type: Boolean,
        default: false,
      },
    },
    components: {
      DataForm,
      DataList
    },
  }
</script>

<style scoped>
.message-area-container {
  width: 100%;
}
</style>