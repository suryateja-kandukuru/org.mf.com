import { atom } from 'jotai'
import { create } from 'zustand'


export const searchTermAtom = atom('')
console.log('searchTermAtom:', searchTermAtom);

export const countAtom = atom(0);
export const userAtom = atom({ name: 'John Doe' });


export const useBearStore = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state: any) => {
    console.log('satet surya', state)
    return ({ bears: state.bears + 1 })
  }),
  removeAllBears: () => set({ bears: 0 }),
}))
