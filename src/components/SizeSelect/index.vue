<template>
  <el-dropdown>
    <span>
      <svg-icon custom-class="w-2em h-2em" iconName="ant-design:font-size-outlined"></svg-icon>
    </span>

    <template #dropdown>
      <el-dropdown-menu trigger="click">
        <el-dropdown-item
          :disabled="item.value === store.size"
          v-for="item in sizeOptions"
          :key="item.value"
          @click="store.setSize(item.value as Size)"
        >
          {{ item.label }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
import type { Size } from '@/plugins/element'
import { useAppStore } from '@/stores/app'

const store = useAppStore()

console.log(store.size.value)

const sizeOptions = ref<Array<{ label: string; value: Size }>>([
  {
    label: 'Default',
    value: 'default'
  },
  {
    label: 'Large',
    value: 'large'
  },
  {
    label: 'Small',
    value: 'small'
  }
])
</script>
