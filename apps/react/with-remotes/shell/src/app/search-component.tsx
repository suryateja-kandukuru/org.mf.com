import React from 'react';
import { useBearStore } from '@mfe-monorepo/shared-state';

const Remote = React.lazy(() => import('remote1/Module'));



const SearchBar: React.FC = () => {

  const {count} = useBearStore()

  return (
   <>
   <p>count from shell: {count}</p>
    <Remote />
    </>
  );
};

export default SearchBar;
