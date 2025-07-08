<template>
  <div class="app-main">
    <router-view>
      <!-- <keep-alive>
        <component :is="Component" :key="$route.path"></component>
      </keep-alive> -->
    </router-view>
  </div>
</template>

<style lang="scss" scoped>
.app-main {
  @apply bg-[#f5f5f5];
  min-height: calc(100vh - var(--navbar-height) - var(--tagsView-height));
}
</style>
