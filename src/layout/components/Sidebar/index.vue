<template>
  <el-menu
    border-none
    class="sidebar-container-menu"
    :default-active="defaultActive"
    :background-color="variables.menuBg"
    :text-color="variables.menuText"
    :active-text-color="variables.menuActiveText"
    :collapse="sidebar.opened"
  >
    <!-- 增加父路径 用于el-menu-item 跳转 -->
    <sidebar-item v-for="item in routes" :key="item.path" :item="item" :base-path="item.path" />
  </el-menu>
</template>

<script lang="ts" setup>
import { useAppStore } from '@/stores/app'
import variables from '@/styles/variables.module.scss'
import { routes } from '@/router'

const route = useRoute()
const { sidebar } = useAppStore()
const defaultActive = computed(() => route.path)
</script>
