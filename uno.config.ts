import {
  defineConfig,
  presetAttributify,
  presetWebFonts,
  presetTypography,
  presetUno,
  presetWind,
  presetIcons,
} from 'unocss'
import { theme } from 'unocss/preset-wind'

export default defineConfig({
  presets: [
    presetAttributify(),
    presetUno(),
    presetWebFonts(),
    presetTypography(),
    presetWind(),
    presetIcons(),
  ],
  theme: {
    colors: {
      ...theme.colors,
      'primary-blue-4': 'rgb(17 106 204)',
      'primary-blue-3': 'rgb(0 76 174)',
      'state-success': 'rgb(118 202 102)',
      'state-warning': 'rgb(251 199 86)',
      'state-error': 'rgb(186 0 0)',
    },
  }
})