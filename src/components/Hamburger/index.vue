<template>
  <div class="hamburger-container">
    <svg-icon
      icon-name="ant-design:bars-outlined"
      custom-class="hamburger"
      :class="{ 'rotate-180': collapse }"
      @click="handleClick"
    ></svg-icon>
  </div>
</template>

<script setup lang="ts">
const { collapse } = defineProps<{
  collapse: boolean
}>()

const emit = defineEmits<{
  (e: 'toggleCollapse'): void
}>()
const handleClick = () => {
  emit('toggleCollapse')
}
</script>

<style scoped lang="scss">
.hamburger-container {
  @apply leading-[50px] float-left cursor-pointer px-10px hover:(bg-black/5);

  .hamburger {
    @apply w-30px h-30px transition-transform duration-300;
  }
}
</style>
