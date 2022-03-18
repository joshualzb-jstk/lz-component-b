<template>
  <div style="margin: 20px;">
    <el-input v-model="input" placeholder="请输入内容"></el-input>
    <el-button type="primary">测试按钮</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "Hello Element UI!",
    };
  },
};
</script>
