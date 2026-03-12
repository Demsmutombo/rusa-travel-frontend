import { inject } from 'vue'

export interface Theme {
  isDarkMode: {
    value: boolean
  }
  toggleTheme: () => void
}

export function useTheme() {
  const theme = inject<Theme>('theme')
  if (!theme) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return theme
}
