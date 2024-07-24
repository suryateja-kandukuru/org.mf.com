import { atom, useAtom, useAtomValue, useSetAtom } from 'jotai';
import React, { useEffect, useMemo } from 'react';

import { searchTermAtom, Button, countAtom , useBearStore} from '@org.mf.com/statemanagement';
//  import { searchTermAtom } from 'shell/shared-state';


const styles = {
  button: {
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#007BFF',
    color: 'white',
    cursor: 'pointer',
  },
  list: {
    listStyleType: 'none',
    padding: '0',
  },
  listItem: {
    padding: '10px',
    borderBottom: '1px solid #ccc',
  },
};

const items: string[] = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];

function SearchListComponent() {

  const bears = useBearStore((state: any) => {
    console.log('bears', state)
    return state.bears
  })


  const [searchTerm] =   useAtom(searchTermAtom);

  const filterItems = useMemo(() => {
    const filtered = items.filter((item) =>
      item.toLowerCase().includes(item.toLowerCase())
    );
    return filtered;
  }, [searchTerm])

  const [count, setCount] = useAtom(countAtom)

  useEffect(() => {
    setInterval(() => {
      setCount((c) => c + 1)
    }, 5000)
  },[])

  return (
    <>
      <div>SearchListComponent</div>
      <Button title={'remote 1 ' + count} />
      <div> bears: {bears} </div>
      <ul style={styles.list}>
        {filterItems.map((item) => (
          <li key={item} style={styles.listItem}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default SearchListComponent;
