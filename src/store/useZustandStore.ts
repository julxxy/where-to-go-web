import { create } from 'zustand'
import { isDebugEnable, log } from '@/common/Logger.ts'
import storageUtils from '@/utils/storageUtils.ts'
import { isTrue } from '@/common/booleanUtils.ts'

/**
 * This is the store for the app. implemented using Zustand library.
 */
const useZustandStore = create<{
  /* state */
  token: string
  isDarkEnable: boolean
  /* setters */
  setToken: (token: string) => void
  setIsDarkEnable: () => void
}>(set => ({
  /* state */
  token: '',
  isDarkEnable: isTrue(storageUtils.get('dark-enable')),
  /* setters */
  setToken: (token: string) => set(() => ({ token })),
  setIsDarkEnable: () => {
    set(state => {
      const enable = !state.isDarkEnable
      logUpdate(enable)
      storageUtils.set('dark-enable', enable)
      return { isDarkEnable: enable }
    })
  },
}))

function logUpdate(data: any) {
  if (isDebugEnable) log.debug('Zustand meta data update:', data)
}

export default useZustandStore
