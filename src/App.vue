<template>
  <el-config-provider :size="store.size"><router-view></router-view></el-config-provider>
</template>

<style scoped></style>

<script setup lang="ts">
import { useAppStore } from './stores/app'
const store = useAppStore()
</script>
