<template>
  <form class="data-form-container" @submit.prevent="handleSubmit" ref="container" id="data-form-container">
    <div class="form-item">
      <div class="input-area">
        <input type="text" maxlength="10" placeholder="用户昵称" v-model="formData.nickname">
        <span class="tip">{{formData.nickname.length}}/10</span>
      </div>
      <div class="error">{{err.nickname}}</div>
    </div>
    <div class="form-item">
      <div class="text-area">
        <textarea maxlength="300" placeholder="请输入内容" v-model="formData.content"></textarea>
        <span class="tip">{{formData.content.length}}/300</span>
      </div>
      <div class="error">{{err.content}}</div>
    </div>
    <div class="form-item">
      <div class="button-area">
        <button :disabled="isSubmit">{{isSubmit?'提交中...':'提交'}}</button>
      </div>
    </div>
  </form>
</template>

<script>
  export default {
    data() {
      return {
        formData:{
          nickname:'',
          content:'',
        },
        err:{
          nickname: '',
          content:''
        },
        isSubmit:false
      }
    },
    methods: {
      handleSubmit() {
        this.err.nickname = this.formData.nickname?'':'请输入昵称';
        this.err.content = this.formData.content?'':'请输入内容';
        if(this.err.nickname || this.err.content) {
            return
        }
        this.isSubmit = true;
        this.$emit('submit',this.formData,(successMsg) => {
          this.$showMessage({
            content:successMsg,
            duration: 1000,
            type:'success',
            container: this.$refs.container,
            callback: () => {
              this.isSubmit = false;
              this.formData.nickname = '';
              this.formData.content = '';
            }
          })
        });
      }
    }
  }
</script>

<style scoped lang="less">
  @import "~@/styles/var.less";
.data-form-container {
  margin-bottom: 20px;
  overflow: hidden;
}
  .form-item {
    margin-bottom: 8px;
  }
.input-area {
  width: 50%;
  position: relative;
}
.text-area {
  position: relative;
}
  .tip {
    position: absolute;
    right: 5px;
    bottom: 5px;
    color: #b4b8bc;
    font-size: 12px;
  }
  input,textarea {
    display: block;
    width: 100%;
    box-sizing: border-box;
    border: 1px dashed @gray;
    outline: none;
    color: @words;
    font-size: 14px;
    border-radius: 4px;
  }
  input {
    padding: 0 15px;
    height: 40px;
  }
  textarea {
    resize: none;
    padding: 8px 15px;
    height: 120px;
  }
  .error {
    margin-top: 6px;
    color: @danger;
    font-size: 14px;
    height: 20px;
    line-height: 20px;
  }
  button {
    position: relative;
    cursor: pointer;
    border: none;
    outline: none;
    width: 100px;
    height: 34px;
    color: #fff;
    border-radius: 4px;
    background: @primary;
    &:hover {
      background: darken(@primary, 10%);
    }
    &:disabled {
      background: lighten(@primary, 20%);
      cursor: not-allowed;
    }
  }
</style>