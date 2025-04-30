import js from '@eslint/js' // 校验js语法
import globals from 'globals'
import tseslint from 'typescript-eslint' // 校验ts语法
import pluginVue from 'eslint-plugin-vue' // 校验vue语法
import { defineConfig } from 'eslint/config'
import prettierRecommended from 'eslint-plugin-prettier/recommended'

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,vue}'],
    plugins: { js },
    extends: ['js/recommended']
  },
  {
    files: ['**/*.{js,mjs,cjs,ts,vue}'],
    languageOptions: { globals: { ...globals.browser, ...globals.node } }
  },
  tseslint.configs.recommended,
  pluginVue.configs['flat/essential'],
  {
    files: ['**/*.vue'], // 校验vue中ts代码
    languageOptions: { parserOptions: { parser: tseslint.parser } }
  },
  {
    // 忽略文件
    ignores: ['.css', '*.d.ts']
  },
  // 自定义规则
  {
    rules: {
      'no-console': 'warn',
      semi: ['error']
    }
  },
  prettierRecommended // 覆盖eslint默认规则
])
