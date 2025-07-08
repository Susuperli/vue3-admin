<template>
  <!-- 我们需要将路由表中的路径进行添加 index-->
  <template v-if="!item.meta?.hidden">
    <sidebar-item-link
      v-if="filteredChildren.length <= 1 && item.meta?.alwaysShow"
      :to="resolvePath(singleChildRoute.path)"
    >
      <el-menu-item :index="resolvePath(singleChildRoute.path)">
        <el-icon v-if="iconName">
          <svg-icon :icon="iconName" />
        </el-icon>
        <template #title>{{ singleChildRoute.meta?.title }}</template>
      </el-menu-item>
    </sidebar-item-link>

    <el-sub-menu v-else :index="item.path">
      <template #title>
        <el-icon v-if="iconName">
          <svg-icon :icon="iconName" />
        </el-icon>
        <span>{{ singleChildRoute.meta?.title }}</span>
      </template>

      <sidebar-item
        v-for="child of filteredChildren"
        :key="child.path"
        :item="child"
        :base-path="basePath"
      ></sidebar-item>
    </el-sub-menu>
  </template>
</template>

<script lang="ts" setup>
import { isExternal } from '@/utils/validate'
import path from 'path-browserify'
import type { RouteRecordRaw } from 'vue-router'

const { item, basePath } = defineProps<{ item: RouteRecordRaw; basePath: string }>()

const filteredChildren = computed(() =>
  (item.children || []).filter((child) => !child.meta?.hidden)
)

// 要渲染的路由
const singleChildRoute = computed(() =>
  filteredChildren.value.length === 1 ? filteredChildren.value[0] : item
)

const iconName = computed(() => singleChildRoute.value.meta?.icon)

// 解析父路径 + 子路径 (resolve可以解析绝对路径)
const resolvePath = (childPath: string) => {
  if (isExternal(childPath)) {
    return childPath
  }
  path.resolve(basePath, childPath)
}
</script>
