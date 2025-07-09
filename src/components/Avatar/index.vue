<template>
  <el-dropdown>
    <img :src="avatar" size-40px rounded-sm cursor-pointer outline-none />
    <template #dropdown>
      <el-dropdown-menu>
        <router-link to="/"><el-dropdown-item>首页</el-dropdown-item></router-link>
        <router-link to="/profile/index"><el-dropdown-item>个人设置</el-dropdown-item></router-link>
        <el-dropdown-item divided @click="logout">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
import avatar from '@/assets/vue.svg'

const logout = () => {}
</script>
