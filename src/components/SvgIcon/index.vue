<template>
  <IconifyIcon :icon="props.iconName" :class="svgClass" v-if="!isExternalIcon" />
  <div
    v-else
    :style="styleExternalIcon"
    :class="svgClass"
    v-bind="$attrs"
    bg-current
    text-red
  ></div>
</template>

<script setup lang="ts">
import { isExternal } from '@/utils/validate'
import { Icon as IconifyIcon } from '@iconify/vue'

const props = withDefaults(defineProps<{ iconName: string; customClass?: string }>(), {
  customClass: ''
})

// 组合成的类名
const svgClass = computed(() => (props.customClass ? `${props.customClass} icon` : 'icon'))

const isExternalIcon = computed(() => isExternal(props.iconName))
// 通过mask 渲染svg图标 兼容性不好。可以通过请求svg的方式来渲染
const styleExternalIcon = computed(() => ({
  mask: `url(${props.iconName}) no-repeat 50% 50%`,
  '-webkit-mask': `url(${props.iconName}) no-repeat 50% 50%`,
  'mask-size': 'cover'
}))
</script>

<!-- 在实现图标的时候，尽量采用svg图标，svg图标的兼容性更好，而且图标的样式可以自定义 -->
