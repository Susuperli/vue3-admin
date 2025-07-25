import type { Size } from '@/plugins/element'

export const useAppStore = defineStore(
  'app',
  () => {
    const state = reactive({
      sidebar: {
        opened: true
      },
      size: 'default' as Size
    })

    const sidebar = computed(() => state.sidebar)

    const toggleSideBar = () => {
      state.sidebar.opened = !state.sidebar.opened
    }

    const size = computed(() => state.size)
    const setSize = (size: Size) => (state.size = size)

    return {
      sidebar,
      toggleSideBar,
      state,
      size,
      setSize
    }
  },
  { persist: { storage: window.localStorage, pick: ['state.sidebar', 'state.size'] } }
)
