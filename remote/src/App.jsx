import Button from './Button';
import useCount from './store';

export default function App() {
  const [count, setCount] = useCount();

  return (
    <div>
      <h2>Remote app</h2>
      <Button />
      <button onClick={() => setCount(count + 1)}>
        You can also click me{count}
      </button>
    </div>
  );
}
