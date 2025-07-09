<template>
  <div class="navbar" flex>
    <hamburger @toggleCollapse="toggleSideBar" :collapse="sidebar.opened"></hamburger>

    <breadcrumb-item></breadcrumb-item>

    <div flex justify-end flex-1 items-center mr-20px>
      <screenfull mx-10px></screenfull>
      <el-tooltip content="change size" placement="bottom">
        <size-select></size-select>
      </el-tooltip>

      <avatar></avatar>
    </div>
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
