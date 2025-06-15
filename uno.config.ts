import { defineConfig } from 'unocss'
import presetUno from '@unocss/preset-uno'
import presetAttributify from '@unocss/preset-attributify'
import transformerDirectives from '@unocss/transformer-directives'
// uncoss 图标预设，会查找依赖的图标库，并生成图标样式
import presetIcons from '@unocss/preset-icons'

export default defineConfig({
  presets: [presetUno(), presetAttributify(), presetIcons()],
  transformers: [transformerDirectives()],
  shortcuts: [['icon', 'inline-block w-1em h-1em align-middle text-current']]
})
