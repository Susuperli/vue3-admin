<template>
  <div>
    <svg-icon
      @click="handleClick"
      custom-class="w-2em h-2em"
      :iconName="
        isFullScreen ? 'ant-design:fullscreen-exit-outlined' : 'ant-design:fullscreen-outlined'
      "
    ></svg-icon>
  </div>
</template>

<script setup lang="ts">
import screenfull from 'screenfull'
const isFullScreen = ref(false)
const { proxy } = getCurrentInstance()!

const handleClick = () => {
  if (screenfull.isEnabled) {
    screenfull.toggle()
  } else {
    proxy!.$message.warning('当前浏览器不支持全屏')
  }
}

function updateFullScreen() {
  // 看是否是全屏，如果是的话，就切换状态
  isFullScreen.value = screenfull.isFullscreen
}

onMounted(() => {
  if (screenfull.isEnabled) {
    screenfull.on('change', updateFullScreen)
  }
})
onBeforeUnmount(() => {
  if (screenfull.isEnabled) {
    screenfull.off('change', updateFullScreen)
  }
})
</script>
