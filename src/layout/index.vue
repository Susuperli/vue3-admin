<template>
  <div class="app-wrapper">
    <div class="sidebar-container">
      <sidebar></sidebar>
    </div>
    <div class="main-container">
      <!-- 上面收缩的导航条 -->
      <navbar></navbar>

      <div class="header">
        <div class="tags-view">导航条-2</div>
      </div>

      <div class="app-main">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.app-wrapper {
  @apply flex w-full h-full;
  .sidebar-container {
    @apply bg-[var(--menu-bg)];
    // 跨组件设置样式
    :deep(.sidebar-container-menu:not(.el-menu--collapse)) {
      @apply w-[var(--sidebar-width)];
    }
  }

  .main-container {
    @apply flex-1;
  }
  .header {
    @apply h-[84px];
    .tags-view {
      @apply h-[var(--tagsView-height)] bg-yellow;
    }
  }

  .app-main {
    @apply bg-[#f5f5f5];
    min-height: calc(100vh - var(--navbar-height) - var(--tagsView-height));
  }
}
</style>
