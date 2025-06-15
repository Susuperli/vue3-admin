<template>
  <div class="navbar">
    <hamburger @toggleCollapse="toggleSideBar" :collapse="sidebar.opened"></hamburger>
  </div>
</template>

<style scoped>
.navbar {
  @apply h-[var(--navbar-height)] bg-blue;
}
</style>

<script setup lang="ts">
import { useAppStore } from '@/stores/app'

// 在解构的时候要考虑值是不是对象，如果非对象解构出来 就会丧失响应式
const { toggleSideBar, sidebar } = useAppStore()
</script>
