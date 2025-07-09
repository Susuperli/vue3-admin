import type { App } from 'vue'
import { ElMessage, ElNotification, ElMessageBox } from 'element-plus'

export default (app: App) => {
  // 都放在组件实例上面了
  app.config.globalProperties.$message = ElMessage
  app.config.globalProperties.$notification = ElNotification
  app.config.globalProperties.$confirm = ElMessageBox.confirm
  app.config.globalProperties.$alert = ElMessageBox.alert
  app.config.globalProperties.$prompt = ElMessageBox.prompt
}

export type Size = 'default' | 'small' | 'large'
