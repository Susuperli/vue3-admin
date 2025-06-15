<template>
  <el-button>hello</el-button>

  <svg-icon
    icon-name="https://zishui.oss-cn-beijing.aliyuncs.com/BugFilled.svg"
    custom-class="text-blue-100"
    @click="show"
  ></svg-icon>
    <svg-icon
    icon-name="ant-design:apple-filled"
    custom-class="text-blue-100"
    @click="show"
  ></svg-icon>

</template>

<script setup lang="ts">
const { proxy } = getCurrentInstance()!

// const a = ref(0)
const show = () => {
  proxy?.$message('成功')
}
</script>
