/**
 * RUSA TRAVEL - Composable i18n simplifié
 * Support FR, Lingala, Swahili
 */

import { ref, computed } from 'vue'

type Locale = 'fr' | 'ln' | 'sw'

interface Translations {
  [key: string]: string | Translations
}

const STORAGE_KEY = 'rusa-travel-locale'

let frTranslations: Translations = {}
let lnTranslations: Translations = {}
let swTranslations: Translations = {}

const currentLocale = ref<Locale>('fr')

export function useI18n() {
  const setLocale = (locale: Locale) => {
    currentLocale.value = locale
    localStorage.setItem(STORAGE_KEY, locale)
  }

  const initLocale = () => {
    const saved = localStorage.getItem(STORAGE_KEY) as Locale | null
    if (saved && ['fr', 'ln', 'sw'].includes(saved)) {
      currentLocale.value = saved
    }
  }

  const loadTranslations = async () => {
    try {
      const [fr, ln, sw] = await Promise.all([
        import('@/assets/locales/fr.json').then((m) => m.default),
        import('@/assets/locales/ln.json').then((m) => m.default),
        import('@/assets/locales/sw.json').then((m) => m.default),
      ])
      frTranslations = fr
      lnTranslations = ln
      swTranslations = sw
    } catch (e) {
      console.warn('Failed to load translations:', e)
    }
  }

  const getTranslations = (): Translations => {
    switch (currentLocale.value) {
      case 'ln':
        return lnTranslations
      case 'sw':
        return swTranslations
      default:
        return frTranslations
    }
  }

  const t = (key: string, params?: Record<string, string | number>): string => {
    const keys = key.split('.')
    let obj: unknown = getTranslations()
    for (const k of keys) {
      if (obj && typeof obj === 'object' && k in obj) {
        obj = (obj as Record<string, unknown>)[k]
      } else {
        return key
      }
    }
    let str = typeof obj === 'string' ? obj : key
    if (params) {
      Object.entries(params).forEach(([k, v]) => {
        str = str.replace(new RegExp(`\\{${k}\\}`, 'g'), String(v))
      })
    }
    return str
  }

  const locale = computed(() => currentLocale.value)

  return {
    t,
    locale,
    setLocale,
    initLocale,
    loadTranslations,
  }
}
