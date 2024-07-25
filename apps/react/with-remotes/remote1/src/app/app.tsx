// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useBearStore } from '@mfe-monorepo/shared-state';
import styles from './app.module.scss';


export function App() {
  const  { increaseCount, count } = useBearStore()

  return (
    <div>
      <button onClick={() => increaseCount()}>Click me</button>
      <p>count - {count}</p>
    </div>
  );
}

export default App;
