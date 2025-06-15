<template>
  <el-button>{{ a }}</el-button>

  <HelloWorld msg="Hello Vue3" />

  <el-button @click="show">按钮</el-button>
</template>

<script setup lang="ts">
const { proxy } = getCurrentInstance()!

const a = ref(0)
const show = () => {
  proxy?.$message('成功')
}
</script>
