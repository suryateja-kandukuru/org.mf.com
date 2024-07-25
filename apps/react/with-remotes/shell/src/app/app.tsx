import * as React from 'react';

import useStore from 'remote2/Module';


const Remote1 = React.lazy(() => import('remote1/Module'));



export function App() {
  const { count, increment } = useStore();


  return (
    <React.Suspense fallback={null}>
      <p>shell app:</p>

      <button onClick={increment}>increment</button>
      <p>count: {count}</p>
      <Remote1 />

    </React.Suspense>
  );
}

export default App;
