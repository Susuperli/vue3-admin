export const useAppStore = defineStore(
  'app',
  () => {
    const state = reactive({
      sidebar: {
        opened: true
      }
    })

    const sidebar = computed(() => state.sidebar)

    const toggleSideBar = () => {
      state.sidebar.opened = !state.sidebar.opened
    }

    return {
      sidebar,
      toggleSideBar,
      state
    }
  },
  { persist: { storage: window.localStorage, pick: ['state.sidebar'] } }
)
