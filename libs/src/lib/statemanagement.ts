import { create } from 'zustand'

export const useBearStore = create((set) => ({
  count: 0,
  increaseCount: () => set((state: any) => {
    console.log('satet surya', state)
    return ({ count: state.count + 1 })
  }),
  removeAllCounts: () => set({ count: 0 }),
}))
