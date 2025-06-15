<template>
  <el-menu
    router
    class="sidebar-container-menu"
    :default-active="defaultActive"
    :background-color="variables.menuBg"
    :text-color="variables.menuText"
    :active-text-color="variables.menuActiveText"
    :collapse="sidebar.opened"
  >
    <el-menu-item index="/dashboard">
      <el-icon></el-icon>
      <template #title>navigator four</template>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import { useAppStore } from '@/stores/app'
import variables from '@/styles/variables.module.scss'

const route = useRoute()
const { sidebar } = useAppStore()
const defaultActive = computed(() => route.path)
</script>
