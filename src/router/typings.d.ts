import 'vue-router'

// g给模块添加额外类型 ts中接口合并
declare module 'vue-router' {
  interface RouteMeta {
    title?: string
    icon?: string
    hidden?: boolean
    alwaysShow?: boolean
  }
}
