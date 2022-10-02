import { defineStore } from 'pinia'

type AppStoreState = {
  loading: boolean
}
export const useAppStore = defineStore('app', {
  state: (): AppStoreState => {
    return {
      loading: true,
    }
  },
  getters: {},
  actions: {},
})
