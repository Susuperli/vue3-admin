<template>
  <RouterLink to="/home">首页</RouterLink>
  <RouterLink to="/about">关于</RouterLink>

  {{ counterStore.count }}
  <button @click="counterStore.increment">+</button>

  <el-button type="danger">点击</el-button>

  <RouterView></RouterView>
</template>

<style scoped></style>

<script setup lang="ts">
import { useCounterStore } from './stores/counter'

const counterStore = useCounterStore()
</script>
