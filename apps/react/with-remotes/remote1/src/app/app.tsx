// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

import useStore from 'remote2/Module';


export function App() {
  const { count, increment } = useStore();

  return (
    <div>
      <p>remote count: { count }</p>
    </div>
  );
}

export default App;
