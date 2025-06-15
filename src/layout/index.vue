<template>
  <div class="app-wrapper">
    <div class="sidebar-container">侧边导航</div>
    <div class="main-container">
      <div class="header">
        <div class="navbar">导航条-1</div>
        <div class="tags-view">导航条-2</div>
      </div>

      <div class="app-main">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.app-wrapper {
  @apply flex w-full h-full;
  .sidebar-container {
    @apply bg-red w-[var(--sidebar-width)];
  }

  .main-container {
    @apply flex-1;
  }
  .header {
    @apply h-[84px];
    .navbar {
      @apply h-[var(--navbar-height)] bg-blue;
    }
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
