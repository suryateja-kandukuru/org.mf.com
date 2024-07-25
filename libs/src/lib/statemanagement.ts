import { atom, useAtom } from 'jotai';

const countAtom = atom(0);

export const useBearStore = () => {
  const [count, setCount] = useAtom(countAtom);

  const increaseCount = () => setCount((c) => c + 1);

  return {
    count,
    increaseCount,
  };
}
