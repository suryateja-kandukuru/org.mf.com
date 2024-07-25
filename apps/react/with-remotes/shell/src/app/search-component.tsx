import React, { ChangeEvent, useEffect } from 'react';
import { useAtom } from 'jotai'
import { searchTermAtom, useAppContext } from '@org.mf.com/statemanagement';
import { useBearStore } from 'libs/src/lib/statemanagement';

const Remote = React.lazy(() => import('remote1/Module'));

const styles = {
  form: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px',
  },
  input: {
    padding: '10px',
    width: '200px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    marginRight: '10px',
  },
  button: {
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#007BFF',
    color: 'white',
    cursor: 'pointer',
  },
};

const SearchBar: React.FC = () => {

  const [searchTerm, setSearchTerm] = useAtom(searchTermAtom)
  const [searchTermSurya] = useAtom(searchTermAtom)

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  };

  const increaseCount = useBearStore((state: any) => state.increasePopulation)

  const { state, dispatch } = useAppContext();

  useEffect(() => {
    setInterval(() => {
    //   const random = Math.random() * 100
    // setSearchTerm(random.toString())
      setInterval(() => {
        increaseCount();
        dispatch({ type: 'INCREMENT_COUNT' })
        console.log('state', state)
      }, 5000)
    }, 5000)
  },[])

  return (
    <>
    <form style={styles.form}>
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        style={styles.input}
        placeholder="Search..."
      />
     surya- {searchTermSurya}
    </form>
    <Remote />
    </>
  );
};

export default SearchBar;
