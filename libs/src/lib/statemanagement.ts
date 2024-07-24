import { atom } from 'jotai'

export const searchTermAtom = atom('')
console.log('searchTermAtom:', searchTermAtom);

export const countAtom = atom(0);
export const userAtom = atom({ name: 'John Doe' });
